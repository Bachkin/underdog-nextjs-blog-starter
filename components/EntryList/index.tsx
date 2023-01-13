import { Entry } from "@/types"
import { EntryItem } from "./EntryItem"

export type EntryListProps = {
  entries: Entry[]
}

export function EntryList({ entries }: EntryListProps) {
  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <EntryItem key={entry.title} entry={entry} />
      ))}
    </div>
  )
}
