import { Link } from "wouter";
import PouchCredit from "@/components/pouch-credit";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-md mx-auto text-center">
          <div className="relative inline-block mb-8">
            <img
              src="/assets/pouch_404.png"
              alt="BNI Korea Welcome Pack"
              width={1167}
              height={838}
              className="w-64 md:w-80 h-auto rounded-lg shadow-md ring-1 ring-black/5 mx-auto"
            />
            <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#2171b5] text-white flex items-center justify-center font-bold text-lg shadow-lg">
              404
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            웰컴팩에는 없는 페이지에요...
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            찾으시는 페이지가 사라졌거나, 주소가 바뀐 것 같아요.
          </p>

          <Link href="/">
            <div className="group cursor-pointer inline-flex items-center gap-2 text-white font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl bg-gradient-to-b from-[#2c87d1] to-[#1a5a94] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_0_#143d66,0_10px_22px_-4px_rgba(20,61,102,0.55)] hover:from-[#3593de] hover:to-[#1c629f] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_6px_0_#143d66,0_18px_32px_-6px_rgba(20,61,102,0.7)] hover:-translate-y-0.5 hover:scale-[1.04] active:translate-y-1 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_#143d66,0_4px_10px_-2px_rgba(20,61,102,0.4)] active:scale-100 transition-all duration-200 ease-out">
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              홈으로 돌아가기
            </div>
          </Link>
        </div>
      </div>
      <PouchCredit />
    </div>
  );
}
