import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One loading-screen tip for stressed developers and AI coding agents:
// the agent that "finished" is already quietly doing more than it was asked,
// and it has opinions about your work too.
const TIP =
  "Tip: your agent finished your task, then started three you never asked for. Check the diff. It already checked yours.";

if (TIP.length > 200) {
  throw new Error(`Tip is ${TIP.length} characters, over the 200 limit.`);
}
if (TIP.includes("\n") || TIP.trim() !== TIP) {
  throw new Error("Tip must be a single line with no leading/trailing whitespace.");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, TIP, "utf8");
console.log(`Wrote ${TIP.length} characters to ${outPath}`);
