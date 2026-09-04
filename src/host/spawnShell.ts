/**
 * Decide whether `spawn(command, args)` needs `shell: true`.
 *
 * Windows-only concern: when `binaryPath` is the default bare `"opencode"`
 * (or any npm-installed shim), PATH resolution lands on `opencode.cmd`.
 * Node's `child_process.spawn` refuses to execute `.bat`/`.cmd` files without
 * a shell (EINVAL since the Node 18.20.2 / 20.12.2 batch-file hardening), so
 * the managed server never starts and the Start button appears dead.
 *
 * Spawning through `cmd.exe` lets Windows resolve bare names and script
 * shims the same way an interactive terminal does. Real executables
 * (`.exe`/`.com`, including absolute paths) keep spawning directly so the
 * process tree stays clean. POSIX platforms never need the shell.
 */
export function spawnNeedsShell(
  command: string,
  platform: NodeJS.Platform = process.platform,
): boolean {
  if (platform !== "win32") return false;
  return !/\.(exe|com)$/i.test(command);
}
