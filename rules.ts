import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, rectangle, shell, karabinerRule, chordManipulator } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
    ],
  },
  karabinerRule("DF JK -> Control", [
    chordManipulator("DF to Control", ["d", "f"], "left_control"),
    chordManipulator("JK to Control", ["j", "k"], "right_control")
  ]),

  karabinerRule("SD KL -> Command", [
    chordManipulator("SD to Command", ["s", "d"], "left_command"),
    chordManipulator("KL to Command", ["k", "l"], "right_command")
  ]),

  karabinerRule("AS L; -> Option", [
    chordManipulator("AS to Option", ["a", "s"], "left_option"),
    chordManipulator("L; to Option", ["l", "semicolon"], "right_option")
  ]),

  karabinerRule("ER UI -> Shift + Control", [
    chordManipulator("ER to Shift + Control", ["e", "r"], "left_control", ["left_shift"]),
    chordManipulator("UI to Shift + Control", ["u", "i"], "right_control", ["right_shift"])
  ]),

  karabinerRule("WE IO -> Shift + Command", [
    chordManipulator("WE to Shift + Command", ["w", "e"], "left_command", ["left_shift"]),
    chordManipulator("IO to Shift + Command", ["i", "o"], "right_command", ["right_shift"])
  ]),

  karabinerRule("QW OP -> Shift + Option", [
    chordManipulator("QW to Shift + Option", ["q", "w"], "left_option", ["left_shift"]),
    chordManipulator("OP to Shift + Option", ["o", "p"], "right_option", ["right_shift"])
  ]),

  karabinerRule("DC KM -> Shift", [
    chordManipulator("DC to Shift", ["d", "c"], "left_shift"),
    chordManipulator("KM to Shift", ["k", "m"], "right_shift")
  ]),

  karabinerRule("WR UO -> Delete", [
    chordManipulator("WR to Delete", ["w", "r"], "delete_or_backspace"),
    chordManipulator("UO to Delete", ["u", "o"], "delete_or_backspace")
  ]),

  karabinerRule("EF JI -> Escape", [
    chordManipulator("EF to Escape", ["e", "f"], "escape"),
    chordManipulator("JI to Escape", ["j", "i"], "escape")
  ]),
  ...createHyperSubLayers({
    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      // Magicmove via homerow.app
      m: {
        to: [{ key_code: "f", modifiers: ["right_control"] }],
        // TODO: Trigger Vim Easymotion when VSCode is focused
      },
      // Scroll mode via homerow.app
      s: {
        to: [{ key_code: "j", modifiers: ["right_control"] }],
      },
      d: {
        to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      },
      u: {
        to: [{ key_code: "page_down" }],
      },
      i: {
        to: [{ key_code: "page_up" }],
      },
    }
  }),
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
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
