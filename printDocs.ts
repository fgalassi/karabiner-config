import { Rule } from "./types";
import { rules } from "./rules";

function printRuleDescription(rule: Rule, index: number) {
  console.log(`${rule.description || 'No description provided'}`);
}

console.log('Karabiner Rules Documentation:');
console.log('=============================');
rules.forEach(printRuleDescription);