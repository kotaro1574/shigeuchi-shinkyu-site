"use client"

import Image from "next/image"

import { AspectRatio } from "./ui/aspect-ratio"

export function Logo() {
  return (
    <AspectRatio ratio={155 / 30}>
      <Image
        src="/images/logo_white.png"
        alt="繁内鍼灸治療院"
        fill
        className="hidden dark:inline"
      />

      <Image
        src="/images/logo_black.png"
        alt="繁内鍼灸治療院"
        fill
        className="dark:hiden"
      />
    </AspectRatio>
  )
}
