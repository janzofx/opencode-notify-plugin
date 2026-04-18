import { writeFileSync, appendFileSync } from "fs"

const LOG = "C:\\Users\\jakub\\opencode-notify.log"

export default async function(_ctx: any) {
  appendFileSync(LOG, `[${new Date().toISOString()}] plugin loaded\n`)

  return {
    event: async ({ event }: any) => {
      appendFileSync(LOG, `[${new Date().toISOString()}] event fired: ${event.type}\n`)

      if (event.type === "session.idle") {
        appendFileSync(LOG, `[${new Date().toISOString()}] session.idle triggered\n`)
      }
    },
  }
}
