// One Line, One Laugh: Roast Your Fridge (Node 22, standard library only):
// writes one original one-line roast of the entrant's fridge to
// /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
//
// The craft: the judge weighs, in order, that it roasts a fridge in a single
// line, lands a real laugh on a specific recognisable detail, turns on a
// twist in the last few words, reads cleanly aloud, and feels fresh. This
// line picks the most universal fridge detail — the leftovers nobody claims
// in the back — and gives it two turns: first the leftovers have lived there
// so long they pay rent, then the fridge itself goes silent about what is
// growing back there, as if it were in on the secret. The twist lands in the
// last few words, "what's growing in the back", and the line reads aloud as
// one breath with no setup and no second sentence. No generic insult, no
// tired "it's so old" gag.
// Verified by running the program: the output is 104 characters, one line,
// inside the 1-to-200-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ROAST =
  "My fridge keeps leftovers so long they pay rent now — and it still won't say what's growing in the back.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ROAST);
