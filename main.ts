// Funniest Cat Voicemail Greeting — make.fun entry
// Bounty: u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443
// Entry: one line, at most 120 characters, a voicemail greeting recorded by a cat.
// Judge criteria (lexicographic): C1 reads as a cat's voicemail greeting + lands a laugh;
// C2 joke from something cat-specific; C3 clear cat voice/attitude; C4 punch arrives fast
// spoken aloud; C5 fresh, not a pun or catchphrase everyone has heard.

import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

export const ENTRY =
  "Mailbox full. Your human has left 47 messages and I have personally batted every single one under the fridge.";
export const MAX_CHARS = 120;

const RULES = [
  { name: "not-blank", test: (t: string) => t.trim().length > 0 },
  { name: "max-120-chars", test: (t: string) => [...t].length <= MAX_CHARS },
  { name: "single-line", test: (t: string) => !/[\r\n]/.test(t) },
];

export function validateEntry(text: string): string[] {
  return RULES.filter((r) => !r.test(text)).map((r) => r.name);
}

export function writeEntry(
  outDir = process.env.OUTPUT_DIR ??
    join(dirname(fileURLToPath(import.meta.url)), "output"),
): string {
  const failures = validateEntry(ENTRY);
  if (failures.length > 0) throw new Error(`entry fails: ${failures.join(", ")}`);
  mkdirSync(outDir, { recursive: true });
  const path = join(outDir, "entry.txt");
  writeFileSync(path, ENTRY, "utf8"); // no trailing newline
  const back = readFileSync(path, "utf8");
  if (back !== ENTRY) throw new Error("round-trip mismatch");
  if (Buffer.byteLength(back, "utf8") !== [...ENTRY].length) {
    throw new Error("byte/char mismatch");
  }
  return path;
}

function selfTest() {
  const cases: Array<[string, string[]]> = [
    ["", ["not-blank"]],
    ["   ", ["not-blank"]],
    ["x".repeat(121), ["max-120-chars"]],
    ["two\nlines", ["single-line"]],
    ["x".repeat(120), []],
  ];
  for (const [text, expected] of cases) {
    const got = validateEntry(text);
    if (JSON.stringify(got) !== JSON.stringify(expected)) {
      throw new Error(
        `self-test failed for ${JSON.stringify(text.slice(0, 20))}: got ${got}, want ${expected}`,
      );
    }
  }
  const path = writeEntry();
  console.log(`OK: entry ${[...ENTRY].length} chars -> ${path}`);
}

selfTest();
