/**
 * Portfolio telemetry — company attribution + resume downloads via Umami.
 * Expects Umami loaded with data-auto-track="false".
 * Opt out on your own browsers: localStorage.setItem('umami.disabled', '1')
 */
(() => {
  const run = () => {
    const pathMatch = window.location.pathname.match(
      /^\/r\/([a-zA-Z0-9_-]+)\/?$/,
    );
    const queryRef = new URLSearchParams(window.location.search).get("ref");
    const detectedSlug = pathMatch?.[1] || queryRef;

    if (detectedSlug) {
      sessionStorage.setItem("umami_company_slug", detectedSlug);
    }

    const company =
      sessionStorage.getItem("umami_company_slug") || "direct";

    // Keep Pages report clean: /r/acme → /
    const normalizedUrl = pathMatch ? "/" : window.location.pathname;

    const trackWithUmami = () => {
      if (!window.umami) return false;

      window.umami.track((props) => ({
        ...props,
        url: normalizedUrl,
        data: { company },
      }));

      if (company !== "direct") {
        window.umami.track("company-visit", { company });
      }

      return true;
    };

    // Umami may load after this script — retry briefly
    if (!trackWithUmami()) {
      let attempts = 0;
      const timer = setInterval(() => {
        attempts += 1;
        if (trackWithUmami() || attempts > 40) {
          clearInterval(timer);
        }
      }, 250);
    }

    const handleDownload = (event) => {
      if (event.type === "auxclick" && event.button !== 1) return;
      const link = event.target.closest("a[data-track-download]");
      if (!link || !window.umami) return;

      window.umami.track("resume-download", {
        company,
        file: link.getAttribute("data-track-download") || link.pathname,
        page: normalizedUrl,
      });
    };

    document.addEventListener("click", handleDownload);
    document.addEventListener("auxclick", handleDownload);

    // Tag outbound contact / social clicks when present
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[data-track]");
      if (!link || !window.umami) return;
      window.umami.track(link.getAttribute("data-track") || "outbound-click", {
        company,
        href: link.href,
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
