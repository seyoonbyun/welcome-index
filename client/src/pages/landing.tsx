import { useEffect, useState } from "react";
import { Link } from "wouter";
import welcomeImage from "@assets/welcome-pack-index-color_1768900200000.jpg";
import qrCodeImage from "@assets/bni-qr_1768900000000.svg";
import PouchCredit from "@/components/pouch-credit";

type Variant = null | "a" | "b" | "c";

export default function LandingPage() {
  const [showQrHighlight, setShowQrHighlight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [variant, setVariant] = useState<Variant>("c");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const params = new URLSearchParams(window.location.search);
    const v = params.get("v");
    if (v === "a" || v === "b" || v === "c") setVariant(v);
    else if (v === "none") setVariant(null);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setTimeout(() => {
      setShowQrHighlight(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const isEnhanced = variant === "a" || variant === "b" || variant === "c";
  const isCameraZoom = variant === "c";

  const qrStyle =
    isMobile && variant === "c"
      ? {
          top: "17.5%",
          left: "18.2%",
          width: "13%",
          height: "17%",
        }
      : isMobile && isEnhanced
      ? {
          top: "17.5%",
          left: "17.2%",
          width: "15%",
          height: "17%",
        }
      : isMobile
      ? {
          top: "19.4%",
          left: "20.0%",
          width: "9.7%",
          height: "11.0%",
        }
      : {
          top: "22%",
          left: "20.7%",
          width: "8.3%",
          height: "11%",
        };

  const innerBoxAnimation =
    variant === "c"
      ? ""
      : variant === "a" || variant === "b"
      ? "animate-qr-pulse-scale"
      : showQrHighlight
      ? "animate-pulse"
      : "";

  const innerBoxShadow =
    variant === "b"
      ? "0 0 28px 8px rgba(33, 113, 181, 0.55), 0 0 56px 16px rgba(33, 113, 181, 0.3)"
      : "0 0 20px 4px rgba(33, 113, 181, 0.4), 0 0 40px 8px rgba(33, 113, 181, 0.2)";

  return (
    <div className="min-h-screen bg-background flex flex-col">
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-landing-title" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
          <span className="block md:inline">BNI KOREA</span>
          <span className="block md:inline"> 멤버 온보딩 키트</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
          QR 코드를 클릭하여 온보딩 리소스를 확인하세요
        </p>

        <div className="relative inline-block w-fit mx-auto">
          <div className="relative">
            <Link href="/welcome_kit" data-testid="link-to-welcomepack">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 w-[90vw] md:w-[48rem] max-w-full aspect-[1600/1195] bg-white animate-pouch-settle">
                  <img
                    src={welcomeImage}
                    alt="BNI Korea 웰컴 키트 구성"
                    className="w-full h-full object-cover block"
                    data-testid="img-welcome"
                    width={1600}
                    height={1195}
                    fetchPriority="high"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-white/25 pointer-events-none" aria-hidden="true" />
                </div>
              </div>
            </Link>

            <Link href="/onboarding">
            <div
              className={`absolute cursor-pointer transition-all duration-700 ease-out flex items-center justify-center z-50 ${
                showQrHighlight ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
              style={qrStyle}
              data-testid="link-qr-onboarding"
            >
              <div className={`relative w-full h-full ${isCameraZoom ? "animate-qr-zoom-hold" : ""}`}>
                {variant === "c" && (
                  <img
                    src={qrCodeImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-1 w-[calc(100%-0.5rem)] h-[calc(100%-0.5rem)] object-contain bg-white rounded pointer-events-none"
                  />
                )}
                {variant === "b" && showQrHighlight && (
                  <>
                    <span
                      className="absolute inset-0 rounded-lg border-4 border-[#001A9E] animate-ping opacity-75"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute -inset-2 rounded-xl border-2 border-[#001A9E]/60 animate-ping opacity-50"
                      style={{ animationDelay: "0.4s" }}
                      aria-hidden="true"
                    />
                  </>
                )}
                <div
                  className={`w-full h-full rounded-lg border-4 border-[#001A9E] transition-all duration-300 hover:border-[#001A9E]/80 relative ${innerBoxAnimation} ${
                    variant === "b" && showQrHighlight ? "animate-qr-zoom-in" : ""
                  }`}
                  style={{ boxShadow: innerBoxShadow }}
                >
                  <span className="sr-only">온보딩 페이지로 이동</span>
                </div>
                <div
                  className={`absolute ${variant === "c" ? "-bottom-6" : "-bottom-10"} left-1/2 transform -translate-x-1/2 whitespace-nowrap ${
                    isEnhanced ? "animate-qr-label-bounce" : ""
                  }`}
                >
                  <span
                    className={`font-medium text-[#001A9E] bg-background/90 rounded shadow-sm border border-[#001A9E]/20 ${
                      variant === "c"
                        ? "text-[10px] md:text-xs px-2 py-0.5"
                        : isEnhanced
                        ? "text-sm md:text-xs px-3 py-1.5"
                        : "text-[10px] md:text-xs px-2 py-1"
                    }`}
                  >
                    클릭하여 시작
                  </span>
                </div>
              </div>
            </div>
          </Link>
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/welcome_kit" data-testid="link-to-welcomepack-text">
              <div className="group cursor-pointer inline-flex items-center gap-2 text-white font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl bg-gradient-to-b from-[#001A9E] to-[#001A9E] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_4px_0_#001266,0_10px_22px_-4px_rgba(20,61,102,0.55)] hover:from-[#1A36BF] hover:to-[#001A9E] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_6px_0_#001266,0_18px_32px_-6px_rgba(20,61,102,0.7)] hover:-translate-y-0.5 hover:scale-[1.04] active:translate-y-1 active:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_0_0_#001266,0_4px_10px_-2px_rgba(20,61,102,0.4)] active:scale-100 transition-all duration-200 ease-out">
                Welcome Pack 자세히 보러가기
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <PouchCredit />
    </div>
  );
}
