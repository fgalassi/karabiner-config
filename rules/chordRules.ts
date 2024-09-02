import { Rule } from "../types";
import { karabinerRule, chordManipulator } from "../utils";

export const chordRules: Rule[] = [
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
];