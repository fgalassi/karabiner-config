import fs from "fs";
import { Rule } from "./types";
import { createHyperSubLayers, app, open, rectangle, shell, karabinerRule, chordManipulator } from "./utils";
import { hyperKeyRules } from "./rules/hyperKey";
import { chordRules } from "./rules/chordRules";

export const rules: Rule[] = [
  ...hyperKeyRules,
  ...chordRules,
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
