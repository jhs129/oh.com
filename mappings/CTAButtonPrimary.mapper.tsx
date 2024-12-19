import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import CTAButton from "@/components/ui/cta-button";
import React from "react";

// ❖ CTA - Button Primary
interface FigmaCTAButtonPrimaryProps extends BaseFigmaProps {
  "CTA Text"?: string;
  "Icon Type"?: React.ReactNode; // when "Has icon" is true
  "Has icon"?: boolean;
  Hierarchy?: "Primary" | "Secondary";
  Aligned?: "Center" | "Left";
  State?: "Default" | "Hover";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "0bb3d1d7c3ae82e6a8f260d55460591df3fa9b03",
  mapper(figma: FigmaCTAButtonPrimaryProps) {
    return (
      <CTAButton
        label={figma["CTA Text"] ?? ""}
        href="#"
        theme={figma.Hierarchy?.toLowerCase() ?? "primary"}
        icon="none"
      />
    );
  },
});
