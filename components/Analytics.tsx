import Script from "next/script";

const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

export default function Analytics() {
  if (!scriptUrl || !websiteId) {
    return null;
  }

  return (
    <>
      <Script
        src={scriptUrl}
        strategy="afterInteractive"
        data-website-id={websiteId}
        data-auto-track="false"
        defer
      />
      <Script src="/telemetry.js" strategy="afterInteractive" />
    </>
  );
}
