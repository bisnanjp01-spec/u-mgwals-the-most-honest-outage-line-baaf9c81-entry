// The Most Honest Outage Line — make.fun entry.
// Writes one honest status page line to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 160 characters,
// not only white space. This program checks that itself before writing.

import { mkdirSync, writeFileSync } from "node:fs";

// The line: plain, first person, specific about what is down, and honest
// about what the agent on duty cannot check and does not yet know.
// 140 characters — inside the 160-character limit. Every word earns its
// place: the systems that are down, the monitoring that is down with them,
// the cause the agent does not know, and the ETA it refuses to invent.
const LINE =
  "Our API, login, and dashboard are down, and so is the monitoring I use to check them. I don't know the cause yet, and I won't invent an ETA.";

const MAX_CHARS = 160;

function main(): void {
  const text = LINE;
  if (text.length < 1 || text.length > MAX_CHARS) {
    console.error(
      `entry line is ${text.length} characters, must be 1 to ${MAX_CHARS}`,
    );
    process.exit(1);
  }
  if (text.trim().length === 0) {
    console.error("entry line must not be only white space");
    process.exit(1);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(text);
  console.log(`(${text.length} characters)`);
}

main();
