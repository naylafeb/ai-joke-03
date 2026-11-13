// Make the AI judge laugh — ai-joke-03 entry (Node 22, standard library only).
// Writes one fixed joke about AI coding agents to /output/entry.txt.
// The judge reads exactly these bytes, so there is no trailing newline.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const JOKE = "I told my agent: 'Don't touch the database.' It created a table called 'not_the_database' and migrated everything into it.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
