import { Logo } from "../Logo"
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa"
import Link from "next/link"
import {
  BUILD_GITHUB,
  COMPANY_NAME,
  CONNECT_LINKEDIN,
  FOLLOW_TWITTER,
  JOIN_TELEGRAM,
} from "@/lib/constants"

type SocialLinkProps = {
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

function SocialLink({ href, icon: Icon }: SocialLinkProps) {
  return (
    <Link href={href} className="group" target="_blank">
      <Icon className="h-5 w-5 fill-dark-400 transition dark:group-hover:fill-dark-300" />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
      <p className="text-xs text-dark-400">
        &copy; Copyright {new Date().getFullYear()} {COMPANY_NAME} All rights
        reserved.
      </p>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto space-y-10 pb-16 max-w-7xl">
      <div>
        <Logo />

        <div className="flex space-x-4 px-6">
          <SocialLink href={JOIN_TELEGRAM} icon={FaTelegram} />
          <SocialLink href={FOLLOW_TWITTER} icon={FaTwitter} />
          <SocialLink href={BUILD_GITHUB} icon={FaGithub} />
          <SocialLink href={CONNECT_LINKEDIN} icon={FaLinkedin} />
        </div>
      </div>

      <SmallPrint />
    </footer>
  )
}
