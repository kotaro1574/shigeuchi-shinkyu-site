import { MainCarousel } from "@/components/main-carouse"

export default function IndexPage() {
  return (
    <div className="mx-auto max-w-[980px]">
      <MainCarousel />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10"></section>
    </div>
  )
}
