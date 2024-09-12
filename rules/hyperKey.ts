import { Rule, KeyCode } from "../types";
import { karabinerRule, hyperKeyManipulator } from "../utils";

export const hyperKeyRules: Rule[] = [
  karabinerRule("Hyper Key (⌃⌥⇧⌘)", [
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
  ]),
  karabinerRule("Hyper Key + I to Dictate with Wispr Flow", [
    hyperKeyManipulator("Hyper + I -> fn", "i", "fn"),
  ]),
  karabinerRule("Hyper + HJKL to Vim Arrows", [
    hyperKeyManipulator("Hyper + H -> Left Arrow", "h", "left_arrow"),
    hyperKeyManipulator("Hyper + J -> Down Arrow", "j", "down_arrow"),
    hyperKeyManipulator("Hyper + K -> Up Arrow", "k", "up_arrow"),
    hyperKeyManipulator("Hyper + L -> Right Arrow", "l", "right_arrow"),
  ]),
  karabinerRule("Hyper + M to Homerow Click", [
    hyperKeyManipulator("Hyper + M -> Cmd+Shift+Space", "m", "spacebar", ["command", "shift"]),
  ]),
  karabinerRule("Hyper + / to Homerow Search", [
    hyperKeyManipulator("Hyper + / -> Cmd+Shift+/", "slash", "slash", ["command", "shift"]),
  ]),
  karabinerRule("Hyper + , to Homerow Scroll", [
    hyperKeyManipulator("Hyper + , -> Cmd+Shift+G", "comma", "h", ["command", "shift"]),
  ]),
];