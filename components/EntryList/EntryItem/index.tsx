import { useMotionValue } from "framer-motion"
import { Entry } from "@/types"
import Link from "next/link"
import { EntryPattern } from "./EntryPattern"
import { DetailedHTMLProps, HTMLAttributes } from "react"
import { metadataImageUrl } from "@/lib/underdog"

export type EntryItemProps = {
  entry: Entry
}

export function EntryItem({ entry }: EntryItemProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const onMouseMove: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["onMouseMove"] = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={entry.slug}
      onMouseMove={onMouseMove}
      className="bg-white/2.5 group relative flex rounded-2xl"
    >
      <EntryPattern mouseX={mouseX} mouseY={mouseY} />

      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20" />

      <div className="relative rounded-2xl px-4 pb-4">
        <img
          src={metadataImageUrl(entry.collectionAddress)}
          className="h-24 w-24 rounded-md"
          alt={entry.title}
        />
        <h3 className="font-semibold text-white">
          <Link href={entry.slug || "/"}>
            <span className="absolute inset-0 rounded-2xl" />
            {entry.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-400">{entry.description}</p>
      </div>
    </div>
  )
}
