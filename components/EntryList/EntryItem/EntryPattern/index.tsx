import { motion } from "framer-motion"
import { GridPattern, GridPatternProps } from "@/components/GridPattern"
import { MotionValue, useMotionTemplate } from "framer-motion"

export type EntryPatternProps = {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
} & Omit<GridPatternProps, "width" | "height" | "x">

export function EntryPattern({
  mouseX,
  mouseY,
  ...gridProps
}: EntryPatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  const style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="stroke-dark-500 absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg]"
          {...gridProps}
        />
      </div>
      <motion.div
        className="from-primary-900 to-primary-900 absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="fill-white/2.5 absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}
