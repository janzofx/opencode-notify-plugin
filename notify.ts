import { execSync } from "child_process"

export default async function(_ctx: any) {
  return {
    event: async ({ event }: any) => {

      if (event.type === "session.idle") {
        try { execSync(`powershell.exe -NoProfile -Command "[Console]::Beep(1000, 400)"`) } catch {}
      }

      if (event.type === "permission.asked") {
        try { execSync(`powershell.exe -NoProfile -Command "[Console]::Beep(1200, 600)"`) } catch {}
      }

    },
  }
}
