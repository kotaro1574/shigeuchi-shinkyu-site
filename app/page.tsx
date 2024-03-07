import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { MainCarousel } from "@/components/main-carouse"

export default function IndexPage() {
  return (
    <div className="mx-auto max-w-[980px]">
      <MainCarousel />
      <div className="container pb-8 pt-6 md:py-10">
        <div className="mx-auto max-w-[350px]">
          <Logo />
        </div>
        <section className="flex flex-col items-center justify-center gap-4 pb-12">
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
      </div>
    </div>
  )
}
