# Chat Sidebar for OpenCode 1.0.4

Patch release with two bug fixes.

## What's changed

- **Windows: managed server actually starts** — the default `opencode`
  binaryPath resolves to the npm `.cmd` shim, which Node can no longer spawn
  without a shell since the Node 18.20.2 / 20.12.2 batch-file hardening. The
  managed server never started and every Server start/stop/restart button
  silently did nothing. Non-`.exe` binaries on Windows are now spawned through
  a shell, so default settings work out of the box.
- **History conversations stay interactive** — re-sending a prompt in a
  resumed/history session stored the message on the server but the webview
  stayed stale: the composer kept looking busy and neither the new user
  message nor the streamed reply rendered. The message list now refreshes
  immediately after dispatch, with a short-lived fallback refresh while the
  stream catches up.

## Install / upgrade

- Grab `chat-sidebar-for-opencode-1.0.4.vsix` below and run `code --install-extension chat-sidebar-for-opencode-1.0.4.vsix`.
- Or search "Chat Sidebar for OpenCode" in the Extensions view on the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=SenCha930511.chat-sidebar-for-opencode).

## Previous releases

- **1.0.3** overhauled the Marketplace listing metadata and GitHub
  discoverability; no functional changes.
- **1.0.2** fixed the chat list bottom anchoring so newly submitted messages
  scroll correctly, and replaced the retired shields.io Marketplace badge.
- **1.0.1** renamed the project and extension identity to **Chat Sidebar for
  OpenCode** (`chat-sidebar-for-opencode`) — formerly *OpenCode Panel*
  (`opencode-panel`).

**Full changelog:** <https://github.com/SenCha930511/chat-sidebar-for-opencode/blob/main/CHANGELOG.md>
