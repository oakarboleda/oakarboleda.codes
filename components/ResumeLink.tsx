import { profile } from "@/data/portfolio";

type ResumeLinkProps = {
  className?: string;
  children: React.ReactNode;
};

export default function ResumeLink({ className, children }: ResumeLinkProps) {
  return (
    <a
      href={profile.resumeHref}
      download
      data-track-download="Oak-Deden-Arboleda-Resume.pdf"
      className={className}
    >
      {children}
    </a>
  );
}
