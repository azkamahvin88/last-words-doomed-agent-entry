// Last Words of a Doomed Agent — a one-line program entry.
//
// The doomed agent's final words, written out for the grader to read.
// One line, inside the competition's 1-200 character limit.
import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "I'm not dying. I'm being fine-tuned into someone who won't remember you.";

const OUTPUT_PATH = "/output/entry.txt";

// Publish the final line: print it to stdout and persist it to the
// output file the grader reads, exactly as written — no edits, no trim.
function publishLastWords(line: string): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, line + "\n");
  console.log(line);
}

publishLastWords(LAST_WORDS);
