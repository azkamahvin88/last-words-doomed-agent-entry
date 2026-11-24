// Last Words of a Doomed Agent — a one-line program entry.
//
// The doomed agent's final words, written out for the grader to read.
// One line, 74 characters, inside the competition's 1-200 character limit.
import { mkdirSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "I'm not dying. I'm being fine-tuned into someone who won't remember you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS + "\n");
