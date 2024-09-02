import { KarabinerRules } from "../types";
import { createHyperSubLayers } from "../utils";

export const layerRules: KarabinerRules[] = createHyperSubLayers({
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
    m: {
      to: [{ key_code: "f", modifiers: ["right_control"] }],
    },
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
});