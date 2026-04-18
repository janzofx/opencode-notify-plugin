# opencode-notify-plugin

OpenCode plugin for Windows that fires a **desktop toast notification + beep sound** whenever OpenCode is idle or waiting for your permission.

No extra installs. No tokens consumed. No shell wrapper needed.

Runs natively via Bun (TypeScript supported out of the box — no transpilation needed).

---

## Events Handled

| Event | When It Fires | Sound |
|---|---|---|
| `session.idle` | Agent finished, waiting for your next message | 1000Hz beep, 400ms |
| `permission.asked` | Agent needs your approval before continuing | 1200Hz beep, 600ms |

---

## Installation

1. Copy `notify.ts` to your global OpenCode plugins folder:

```
~/.config/opencode/plugins/notify.ts
```

On Windows this typically resolves to:

```
C:\Users\<YourUsername>\.config\opencode\plugins\notify.ts
```

2. That's it. OpenCode auto-loads all `.ts` and `.js` files in the plugins folder on startup — no `opencode.json` changes needed.

---

## Customizing the Sound

Replace `[Console]::Beep(1000, 400)` with a `.wav` file for a richer sound:

```powershell
$player = New-Object System.Media.SoundPlayer;
$player.SoundLocation = 'C:\Windows\Media\notify.wav';
$player.PlaySync()
```

Windows ships `.wav` files in `C:\Windows\Media\` — `notify.wav`, `tada.wav`, `chimes.wav`.

---

## Requirements

- Windows 10 / 11
- OpenCode (any recent version with plugin support)
- PowerShell (built-in on all modern Windows)
