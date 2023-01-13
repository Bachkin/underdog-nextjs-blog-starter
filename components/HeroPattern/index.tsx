import { GridPattern } from "../GridPattern"

export function HeroPattern() {
  return (
    <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
      <div className="mask-image:linear-gradient(white,transparent)] absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem]">
        <div className="from-primary-500/30 to-primary-700/30 absolute inset-0 bg-gradient-to-r opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={72}
            height={56}
            x="-12"
            y="4"
            squares={[
              [4, 3],
              [2, 1],
              [7, 3],
              [10, 6],
            ]}
            className="fill-white/2.5 absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] stroke-white/5 mix-blend-overlay"
          />
        </div>
        <svg
          viewBox="0 0 1113 440"
          aria-hidden="true"
          className="absolute top-0 left-1/2 ml-[-19rem] hidden w-[69.5625rem] blur-[26px]"
        >
          <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z" />
        </svg>
      </div>
    </div>
  )
}
