/**
 * Single registry of every variant. Every showcase page walks this list.
 * Adding a new variant: add it here and add its package to package.json.
 */

import type { Theme } from "@collective/foundation";
import { theme as foundry } from "@collective/foundry";
import { theme as vellum } from "@collective/vellum";
import { theme as beacon } from "@collective/beacon";
import { theme as marginalia } from "@collective/marginalia";
import { theme as proscenium } from "@collective/proscenium";
import { theme as caesura } from "@collective/caesura";
import { theme as cipher } from "@collective/cipher";

export const VARIANTS: ReadonlyArray<Theme> = [
  foundry,
  vellum,
  beacon,
  marginalia,
  proscenium,
  caesura,
  cipher,
];

export const VARIANTS_BY_ID: Record<string, Theme> = Object.fromEntries(
  VARIANTS.map((v) => [v.meta.id, v]),
);

export function getVariant(id: string): Theme | undefined {
  return VARIANTS_BY_ID[id];
}

export const DEFAULT_VARIANT_ID = "foundry";
