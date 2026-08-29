import { describe, expect, it } from "vitest";
import { spawnNeedsShell } from "../spawnShell.js";

describe("spawnNeedsShell", () => {
  it.each(["linux", "darwin"] as const)("never needs a shell on %s", (platform) => {
    expect(spawnNeedsShell("opencode", platform)).toBe(false);
    expect(spawnNeedsShell("/usr/local/bin/opencode", platform)).toBe(false);
  });

  it("uses a shell on Windows for a bare command name (npm shim)", () => {
    expect(spawnNeedsShell("opencode", "win32")).toBe(true);
  });

  it("uses a shell on Windows for .cmd/.bat script paths", () => {
    expect(spawnNeedsShell("C:\\Users\\me\\AppData\\Roaming\\npm\\opencode.cmd", "win32")).toBe(true);
    expect(spawnNeedsShell("C:\\tools\\serve.bat", "win32")).toBe(true);
  });

  it("spawns real executables directly on Windows", () => {
    expect(
      spawnNeedsShell("C:\\Users\\me\\AppData\\Roaming\\npm\\node_modules\\opencode-ai\\bin\\opencode.exe", "win32"),
    ).toBe(false);
    expect(spawnNeedsShell("opencode.EXE", "win32")).toBe(false);
  });
});
