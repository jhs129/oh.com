import * as React from "react";
import { text } from "stream/consumers";

interface CallToActionProps {
    headline: string;
    body: string;
    ctaText: string;
    ctaHref: string;
    theme: string
}

function CallToAction({ headline = "Default Headline", body = "Body Text", ctaText ="Learn More", ctaHref = "#", theme = "light" }: CallToActionProps) {
    
    let themeObj = { bg: "", text: "", accent: "" };
    if (theme === "light") {
        themeObj = {
            bg: "primaryLight",
            text: "primaryDark",
            accent: "primaryAccent"
        };
    } else {
        themeObj = {
            bg: "primaryDark",
            text: "primaryDark",
            accent: "primaryAccent"

        };
    }

    return (
        <section className="flex flex-col p-5 bg-slate-200 max-w-[487px] min-h-[328px] min-w-[280px] text-[var(]" aria-labelledby="cta-heading">
          <article className="flex flex-col justify-center w-full max-md:max-w-full">
            <h2 id="cta-heading" className="text-3xl leading-tight max-md:max-w-full">
              {headline}
            </h2>
            <p className="text-base leading-[var(] max-md:max-w-full">
              {body}
            </p>
            <div className="flex items-start self-center mt-4 max-w-full text-lg tracking-wider leading-none min-w-[172px] w-[172px]">
              <button 
                className="flex-1 shrink gap-3 self-stretch px-8 py-3 bg-orange-700 rounded-3xl min-w-[172px] w-[172px] max-md:px-5"
                aria-label="Call to action button"
                tabIndex={0}
              >
                {ctaText}
              </button>
            </div>
          </article>
        </section>
      );
}

export default CallToAction;



