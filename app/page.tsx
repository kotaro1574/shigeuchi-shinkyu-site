"use client"

import Image from "next/image"
import {
  CONSULTATION_HOURS,
  QUESTIONS_CONTENTS,
  TREATMENT_DETAIL_CONTENTS,
} from "@/constant"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Logo } from "@/components/logo"
import { MainCarousel } from "@/components/main-carouse"
import { TreatmentDetail } from "@/components/treatment-detail"

export default function IndexPage() {
  const isOdd = (index: number) => index % 2 === 0

  return (
    <div className="mx-auto max-w-[980px]">
      <MainCarousel />
      <div className="container pb-8 pt-6 md:py-10">
        <h2 className="mx-auto max-w-[350px]">
          <Logo />
        </h2>
        <section className="mt-4 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <p>施術について</p>
            <p>当院について</p>
            <p>よくある質問</p>
            <p>診療時間</p>
          </div>
          <div className="flex gap-4">
            <Button variant={"line"}>Lineで予約</Button>
            <Button>電話で予約</Button>
          </div>
        </section>
        <section className="mt-40">
          <h2 className="mb-6 text-center text-2xl font-bold md:mb-8 md:text-4xl">
            施術について
          </h2>
          <p>
            当院では、患者様に安心して治療を受けていただくために、患者様一人ひとりに合わせた治療を行っております。
          </p>
          <p>
            また、治療後のアフターケアも大切にしておりますので、お気軽にご相談ください。
          </p>
          <p>1回 5,000円〜</p>
          <div className="grid gap-20">
            {TREATMENT_DETAIL_CONTENTS.map((treatment, index) => (
              <TreatmentDetail
                key={index}
                treatment={treatment}
                isOdd={isOdd(index)}
              />
            ))}
          </div>
        </section>
        <section className="mt-40">
          <h2 className="mb-6 text-center text-2xl font-bold md:mb-8 md:text-4xl">
            当院について
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                alt={"director_image"}
                src={"/images/director_image.jpg"}
                fill
                className="rounded-lg object-cover"
              />
            </AspectRatio>
            <div>
              <h3>伝統と現代の技術、最良の治療をあなたへ</h3>
              <p>
                当院は、広島県東広島市に位置し、鍼灸、整体、産後骨盤矯正、吸い玉などの治療を組み合わせて、あなたの体調や症状に合わせたケアを提供しています。
              </p>
              <p>
                当院では、痛みや不調の原因をしっかりと捉え、より効果的な治療を目指します。治療の疑問や不安な点、ご相談はお気軽にどうぞ。
              </p>
              <p>
                また、日々の活動や治療情報はInstagramでも更新中。ぜひチェックしてください。
              </p>
            </div>
          </div>
        </section>
        <section className="mt-40">
          <h2 className="mb-6 text-center text-2xl font-bold md:mb-8 md:text-4xl">
            よくある質問
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {QUESTIONS_CONTENTS.map((question_content, index) => (
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{question_content.question}</AccordionTrigger>
                <AccordionContent>{question_content.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
        <section className="mt-40">
          <h2 className="mb-6 text-center text-2xl font-bold md:mb-8 md:text-4xl">
            診療時間
          </h2>
          <div className="mt-8 flex justify-center">
            <Table>
              <TableCaption>※日曜、祝日はお休みです</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>診療時間</TableHead>
                  {CONSULTATION_HOURS.weeks.map((week, index) => (
                    <TableHead key={`week-${index}`}>{week}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>09:00 ~ 18:00</TableCell>
                  {CONSULTATION_HOURS.mornings.map((morning, index) => (
                    <TableCell key={`morning-${index}`}>{morning}</TableCell>
                  ))}
                </TableRow>
                <TableRow>
                  <TableCell>18:00 ~ 21:00</TableCell>
                  {CONSULTATION_HOURS.afternoons.map((afternoon, index) => (
                    <TableCell key={`afternoon-${index}`}>
                      {afternoon}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>
        <footer className="mt-40">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <div className="max-w-[250px]">
                <Logo />
              </div>
              <p>〒739-0035</p>
              <p>広島県東広島市西条町郷曽340-8</p>
              <p>アルソーレ東広島6番館101号室</p>
              <p>tel:080-6335-9995</p>
            </div>
            <div className="">
              <iframe
                height={"300"}
                loading={"lazy"}
                referrerPolicy={"no-referrer-when-downgrade"}
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.945691620884!2d132.70690271604823!3d34.37730150797549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35506e1dbc5ea3d5%3A0x70f62b95765c90a8!2z44CSNzM5LTAwMzUg5bqD5bO255yM5p2x5bqD5bO25biC6KW_5p2h55S66YO35pu977yT77yU77yQ4oiS77yYIOOCouODq-OCveODvOODrOadseW6g-WztuWFreeVqumkqCAxMDE!5e0!3m2!1sja!2sjp!4v1660450601751!5m2!1sja!2sjp"
                }
                width={"100%"}
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <small>© 2024 by ktraw1574</small>
          </div>
        </footer>
      </div>
    </div>
  )
}
