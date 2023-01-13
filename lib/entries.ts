import glob from "fast-glob"
import * as path from "path"

const importEntry = async (entryFilename: string) => {
  const { entry } = await import(`../pages/${entryFilename}`)
  return {
    ...entry,
    slug: entryFilename.replace(/(\/index)?\.mdx$/, ""),
  }
}

export const getAllEntries = async () => {
  const entryFilenames = await glob(["*.mdx", "*/index.mdx"], {
    cwd: path.join(process.cwd(), "pages"),
  })

  const entries = await Promise.all(entryFilenames.map(importEntry))

  return entries
}
