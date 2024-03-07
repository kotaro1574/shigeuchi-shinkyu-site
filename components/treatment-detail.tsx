"use client"

import { ReactNode } from "react"
import Image from "next/image"

import { AspectRatio } from "./ui/aspect-ratio"

type Treatment = {
  description: ReactNode
  imagePath: string
  subTitle: string
  title: string
}

type Props = {
  treatment: Treatment
  isOdd: boolean
}

export function TreatmentDetail({ treatment, isOdd }: Props) {
  return (
    <div className="relative">
      <div className={`max-w-[600px] ${isOdd ? "ml-0" : "ml-auto"}`}>
        <AspectRatio ratio={6 / 3}>
          <Image
            src={treatment.imagePath}
            alt={treatment.title}
            fill
            className="object-cover"
          />
        </AspectRatio>
      </div>
      <div
        className={`absolute ${
          isOdd ? "left-[50%]" : "left-0"
        } bottom-0 max-w-[50%] bg-accent/70 p-4 backdrop-blur-[3px]`}
      >
        <div>{treatment.title}</div>
        <p>{treatment.subTitle}</p>
        <div>{treatment.description}</div>
      </div>
    </div>
  )
}
