import { Rule } from "./types";
import { hyperKeyRule } from "./rules/hyperKey";
import { chordRules } from "./rules/chordRules";
import { layerRules } from "./rules/layerRules";

const rules: Rule[] = [
  hyperKeyRule,
  ...chordRules,
  ...layerRules,
];

function printRuleDescription(rule: Rule, index: number) {
  console.log(`${rule.description || 'No description provided'}`);
}

console.log('Karabiner Rules Documentation:');
console.log('=============================');
rules.forEach(printRuleDescription);