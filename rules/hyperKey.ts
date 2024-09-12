import { Rule } from "../types";
import { karabinerRule, hyperKeyManipulator, createHyperKeyManipulator } from "../utils";

export const hyperKeyRules: Rule[] = [
  karabinerRule("Hyper Key (⌃⌥⇧⌘)", [
    createHyperKeyManipulator("Caps Lock -> Hyper Key", "caps_lock", "escape")
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