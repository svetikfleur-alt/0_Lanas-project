import { spawn } from "node:child_process";

const serverArgs = ["server.mjs", ...process.argv.slice(2)];
const children = [
  { name: "site", process: spawn(process.execPath, serverArgs, { stdio: "inherit" }) },
  { name: "bot", process: spawn(process.execPath, ["bot.mjs"], { stdio: "inherit" }) },
];

let shuttingDown = false;

function stopAll(code = 0) {
  if (shuttingDown) return;
  shuttingDown = true;

  children.forEach(({ process }) => {
    if (!process.killed) {
      process.kill("SIGTERM");
    }
  });

  setTimeout(() => process.exit(code), 200);
}

["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, () => stopAll(0));
});

children.forEach(({ name, process: child }) => {
  child.on("exit", (code, signal) => {
    if (shuttingDown) return;

    const exitCode = code ?? (signal ? 1 : 0);
    console.error(`[dev] ${name} exited with code=${exitCode}${signal ? ` signal=${signal}` : ""}`);
    stopAll(exitCode);
  });
});
