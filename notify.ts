import type { Plugin } from "@opencode-ai/plugin"

export const NotifyPlugin: Plugin = async ({ $ }) => {
  return {
    event: async ({ event }) => {
      // Fires when agent finishes and is waiting for your next message
      if (event.type === "session.idle") {
        await $`powershell -Command "[Console]::Beep(1000, 400); Add-Type -AssemblyName System.Windows.Forms; $n = New-Object System.Windows.Forms.NotifyIcon; $n.Icon = [System.Drawing.SystemIcons]::Information; $n.Visible = $true; $n.ShowBalloonTip(5000, 'OpenCode', 'Waiting for your input', 1)"`
      }

      // Fires when agent stops and needs your approval before continuing
      if (event.type === "permission.asked") {
        await $`powershell -Command "[Console]::Beep(1200, 600); Add-Type -AssemblyName System.Windows.Forms; $n = New-Object System.Windows.Forms.NotifyIcon; $n.Icon = [System.Drawing.SystemIcons]::Warning; $n.Visible = $true; $n.ShowBalloonTip(5000, 'OpenCode', 'Permission required!', 2)"`
      }
    },
  }
}
