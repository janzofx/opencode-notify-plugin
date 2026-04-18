// OpenCode Notify Plugin
// Place this file in: ~/.config/opencode/plugins/notify.ts
// It auto-loads every time OpenCode starts — no extra config needed.
//
// Fires on:
//   session.idle     — agent finished, waiting for your next message
//   permission.asked — agent stopped, needs your approval before continuing

export default function(ctx) {
  return {
    "session.idle": async () => {
      ctx.$.`powershell -Command "
        [Console]::Beep(1000, 400);
        Add-Type -AssemblyName System.Windows.Forms;
        $n = New-Object System.Windows.Forms.NotifyIcon;
        $n.Icon = [System.Drawing.SystemIcons]::Information;
        $n.Visible = $true;
        $n.ShowBalloonTip(5000, 'OpenCode', 'Waiting for your input', 1)
      "`
    },

    "permission.asked": async () => {
      ctx.$.`powershell -Command "
        [Console]::Beep(1200, 600);
        Add-Type -AssemblyName System.Windows.Forms;
        $n = New-Object System.Windows.Forms.NotifyIcon;
        $n.Icon = [System.Drawing.SystemIcons]::Warning;
        $n.Visible = $true;
        $n.ShowBalloonTip(5000, 'OpenCode', 'Permission required!', 2)
      "`
    }
  }
}
