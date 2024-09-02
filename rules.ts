import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle, shell, karabinerRule, chordManipulator } from "./utils";
import { hyperKeyRule } from "./rules/hyperKey";
import { chordRules } from "./rules/chordRules";
import { layerRules } from "./rules/layerRules";

const rules: KarabinerRules[] = [
  hyperKeyRule,
  ...chordRules,
  ...layerRules,
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            parameters: {},
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
