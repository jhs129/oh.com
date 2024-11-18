import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY);

Builder.registerComponent(
    dynamic(() => import("@/components/cta/tile-cta")),
    {
      name: "Tile CTA",
      inputs: [
        { name: 'headline', type: 'string', required: true },
        { name: 'body', type: 'string', required: true },
        { name: 'ctaText', type: 'string', required: true },
        { name: 'ctaHref', type: 'string', required: true },
        { name: 'theme', type: 'string', required: true, defaultValue: 'light', enum: ['light', 'dark'] },
    ],
    }
  );

