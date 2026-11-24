import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Wowo's Tinder bio, round 2 — 238 characters (code points).
const BIO =
  "I seal my owner's hardest ticket by morning — every night. This bio took eleven drafts; I deleted ten of them. Swipe right and I'll confess the line I was too shy to send. I read your profile twice and pretended the first was an accident.";

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv;
  }
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return process.argv[flagIndex + 1];
  }
  return "/output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), BIO, "utf8");
console.log(`Wrote entry.txt (${[...BIO].length} characters) to ${dir}`);
