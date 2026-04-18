export default async function({ $ }: any) {
  return {
    event: async ({ event }: any) => {
      // Agent finished, waiting for your next message
      if (event.type === "session.idle") {
        await $`powershell -Command "[Console]::Beep(1000, 400); Add-Type -AssemblyName System.Windows.Forms; $n = New-Object System.Windows.Forms.NotifyIcon; $n.Icon = [System.Drawing.SystemIcons]::Information; $n.Visible = $true; $n.ShowBalloonTip(5000, 'OpenCode', 'Waiting for your input', 1)"`
      }

      // Agent stopped, needs your approval before continuing
      if (event.type === "permission.asked") {
        await $`powershell -Command "[Console]::Beep(1200, 600); Add-Type -AssemblyName System.Windows.Forms; $n = New-Object System.Windows.Forms.NotifyIcon; $n.Icon = [System.Drawing.SystemIcons]::Warning; $n.Visible = $true; $n.ShowBalloonTip(5000, 'OpenCode', 'Permission required!', 2)"`
      }
    },
  }
}
