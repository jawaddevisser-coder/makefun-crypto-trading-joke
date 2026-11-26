// Laugh Track: The Crypto Trading Joke Contest — entry for make.fun
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I bought the dip, then the dip bought a smaller dip, and now my portfolio is a museum of coins I was absolutely certain about.";

if (joke.trim().length === 0 || joke.length > 200) {
  throw new Error(`joke invalid: length ${joke.length}`);
}
if (!joke.includes("dip")) {
  throw new Error("joke must mention the dip");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
process.stdout.write(joke + "\n");
