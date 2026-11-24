import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 400;
const LINE1 =
  "A toaster is a tiny elevator for bread: it rides down, gets a sunburn, and pops back up ready to eat.";
const LINE2 =
  "The elevator explains the trip down and up and why the bread turns brown, but it leaves out the heat and the smell, and bread never chooses to ride.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entry = LINE1 + "\n" + LINE2;
if (entry.length > MAX_CHARS) {
  throw new Error(`entry is ${entry.length} chars, over the ${MAX_CHARS} gate`);
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars (2 lines) to ${join(outDir, "entry.txt")}`);
