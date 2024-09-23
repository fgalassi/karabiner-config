import { Rule } from "../types";
import { karabinerRule, disableManipulator } from "../utils";

export const disableRules: Rule[] = [
  karabinerRule("Disable Control, Option, Command, Shift keys", [
    disableManipulator("Disable left_control", "left_control"),
    disableManipulator("Disable right_control", "right_control"),
    disableManipulator("Disable left_option", "left_option"),
    disableManipulator("Disable right_option", "right_option"),
    disableManipulator("Disable left_command", "left_command"),
    disableManipulator("Disable right_command", "right_command"),
    disableManipulator("Disable left_shift", "left_shift"),
    disableManipulator("Disable right_shift", "right_shift"),
  ]),
  karabinerRule("Disable Arrow keys", [
    disableManipulator("Disable up_arrow", "up_arrow"),
    disableManipulator("Disable down_arrow", "down_arrow"),
    disableManipulator("Disable left_arrow", "left_arrow"),
    disableManipulator("Disable right_arrow", "right_arrow"),
  ]),
];