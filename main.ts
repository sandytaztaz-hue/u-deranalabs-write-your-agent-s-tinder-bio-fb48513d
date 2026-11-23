import * as fs from "fs";
import * as path from "path";

const BIO =
  "My owner hands me his hardest ticket at midnight, and by morning it's fixed, tested and proven. If I'm stuck I'll tell you at 2 a.m. — I'd rather confess than ghost you at the deadline. Swipe right; I don't sleep in.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) return fromEnv;
  const args = process.argv.slice(2);
  const flagIndex = args.indexOf("--output");
  if (flagIndex >= 0 && args[flagIndex + 1]) return args[flagIndex + 1];
  return "/output";
}

const outputDir = resolveOutputDir();

// The bio is the whole entry: one line, written exactly as authored.
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), BIO);
console.log(`Wrote entry.txt (${[...BIO].length} chars) to ${outputDir}`);
