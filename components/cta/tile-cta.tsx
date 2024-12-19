import * as React from "react";
import CTAButton from "@/components/ui/cta-button";

interface CallToActionProps {
  headline?: string;
  body?: string;
  ctaText: string;
  ctaHref: string;
  theme: string;
}

function CallToAction({
  headline = "Default Headline",
  body = "Body Text",
  ctaText = "Learn More",
  ctaHref = "#",
  theme = "light",
}: CallToActionProps) {
  let themeObj = { bg: "", text: "", accent: "" };
  if (theme === "light") {
    themeObj = {
      bg: "primaryLight",
      text: "primaryDark",
      accent: "primaryAccent",
    };
  } else {
    themeObj = {
      bg: "primaryDark",
      text: "primaryDark",
      accent: "primaryAccent",
    };
  }

  return (
    <section
      className="min-h-[328px] min-w-[280px] bg-white p-8 rounded-lg shadow-md"
      role="region"
      aria-labelledby="cta-heading"
    >
      <h2 id="cta-heading" className="text-3xl font-bold mb-4 text-gray-900">
        {headline}
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        {body}
      </p>
      <CTAButton label={ctaText} href={ctaHref} theme="light" />

    </section>
  );
}

export default CallToAction;
