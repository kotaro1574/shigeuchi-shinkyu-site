import { TREATMENT_DETAIL_CONTENTS } from "@/constant"

import { Button } from "@/components/ui/button"
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
          <h2>施術について</h2>
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
      </div>
    </div>
  )
}
