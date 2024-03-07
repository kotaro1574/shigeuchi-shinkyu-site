"use client"

import { useRef } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import { AspectRatio } from "./ui/aspect-ratio"

const carouselItems = [
  "/images/mainVisual1.jpg",
  "/images/mainVisual2.jpg",
  "/images/mainVisual3.jpg",
  "/images/mainVisual4.jpg",
]

export function MainCarousel() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <AspectRatio ratio={15 / 7}>
              <Image
                src={item}
                priority={index === 0}
                alt="main visual"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
