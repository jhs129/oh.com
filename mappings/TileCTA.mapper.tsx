import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import CallToAction from "@/components/cta/tile-cta";

// ❖ Tile - CTA
interface FigmaTileCTAProps extends BaseFigmaProps {
  "Has Button"?: boolean;
  "Has Body"?: boolean;
  "Has Headline"?: boolean;
  Body?: string; // when "Has Body" is true
  Headline?: string; // when "Has Headline" is true
  Theme?: "Light" | "Dark" | "Accent";
  IsHero?: "false" | "true";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "d32dcb926faecec36243719ff17a3009c3a713de",
  mapper(figma: FigmaTileCTAProps) {
    return (
      <CallToAction
        headline={figma["Has Headline"] ? figma.Headline : "[headline]"}
        body={figma["Has Body"] ? figma.Body : "[body]"}
        ctaText={figma["Has Button"] ? "Call to Action" : ""}
        ctaHref="#"
        theme={figma.Theme?.toLowerCase() ?? "light"}
      />
    );
  },
});
