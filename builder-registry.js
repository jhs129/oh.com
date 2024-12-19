import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
    dynamic(() => import("@/components/cta/tile-cta")),
    {
      name: "Tile CTA",
      inputs: [
        { name: 'headline', type: 'string', required: true, defaultValue: 'Headline' },
        { name: 'body', type: 'string', required: true, defaultValue: 'Body' },
        { name: 'ctaText', type: 'string', required: true, defaultValue: 'Learn More' },
        { name: 'ctaHref', type: 'string', required: true, defaultValue: '#' },
        { name: 'theme', type: 'string', required: true, defaultValue: 'light', enum: ['light', 'dark'] },
    ],
    }
  );

  Builder.registerComponent(
    dynamic(() => import("@/components/ui/cta-button")),
    {
      name: "Button",
      inputs: [
        { name: 'label', type: 'string', required: true },
        { name: 'href', type: 'string', required: true },
        { name: 'theme', type: 'string', required: true, defaultValue: 'light', enum: ['light', 'dark'] },
    ],
    }
  );

