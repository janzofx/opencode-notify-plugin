export default async function({ $ }: any) {
  return {
    event: async ({ event }: any) => {

      // Agent finished, waiting for your next message
      if (event.type === "session.idle") {
        // Beep works reliably on Windows
        await $`powershell -Command "[Console]::Beep(1000, 400)"`
        // Toast via msg (built into Windows, no object chaining)
        await $`msg * /TIME:5 "OpenCode: Waiting for your input"`
      }

      // Agent stopped, needs your approval before continuing
      if (event.type === "permission.asked") {
        await $`powershell -Command "[Console]::Beep(1200, 600)"`
        await $`msg * /TIME:5 "OpenCode: Permission required!"`
      }

    },
  }
}
