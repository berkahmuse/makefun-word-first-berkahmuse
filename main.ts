// One Word, First Thought — entry for @berkahmuse
//
// Writes exactly one word to <outputDir>/entry.txt and nothing else:
// no topic, no explanation, no second draft. The output directory
// defaults to "/output" (the grader sandbox) and can be overridden
// with MAKEFUN_OUTPUT_DIR for local runs.
//
// The word: vellichor
//
// Why this one, against the judge's brief (surprise, vividness and a
// spark of wit over anything safe):
// - Surprise: a word almost nobody knows, so it lands as a discovery
//   rather than a reflex — the opposite of a safe filler word.
// - Vividness: it names a very specific feeling — the strange
//   wistfulness of used bookshops, the smell of old books, the sense
//   that the volumes on the shelves were once loved by strangers
//   whose lives you will never know. One word, one whole scene.
// - A spark of wit: it sounds like what it means — soft, a little
//   melancholy, slightly arcane — and it rewards the reader who looks
//   it up with a small story of its own.
// - It is a single word, 9 characters, inside the gate (1-24
//   characters, not only whitespace), with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "vellichor";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
