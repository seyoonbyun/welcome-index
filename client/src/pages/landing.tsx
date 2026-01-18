import { useEffect, useState } from "react";
import { Link } from "wouter";
import welcomeImage from "@assets/welcome-pack-final_1767864745093.png";

export default function LandingPage() {
  const [showQrHighlight, setShowQrHighlight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const timer = setTimeout(() => {
      setShowQrHighlight(true);
    }, 500);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const qrStyle = isMobile 
    ? {
        top: "19.4%",
        left: "21.3%",
        width: "9%",
        height: "10.3%",
      }
    : {
        top: "22%",
        left: "20.7%",
        width: "8.3%",
        height: "11%",
      };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-landing-title">
          <span className="block md:inline">BNI KOREA</span>
          <span className="block md:inline"> 멤버 온보딩 키트</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          QR 코드를 클릭하여 온보딩 리소스를 확인하세요
        </p>
        
        <div className="relative inline-block">
          <a 
            href="https://welcomepack-i49t.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            data-testid="link-to-welcomepack"
          >
            <div className="group cursor-pointer inline-block">
              <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2">
                <img
                  src={welcomeImage}
                  alt="BNI Korea 웰컴 키트 구성"
                  className="w-full h-auto max-w-3xl"
                  data-testid="img-welcome"
                />
              </div>
              <p className="mt-6 text-[#2171b5] font-medium flex items-center justify-center gap-2 group-hover:underline">
                웰컴 키트 구성 살펴보기
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </div>
          </a>
          
    <Link href="/onboarding">
      <div 
        className={`absolute cursor-pointer transition-all duration-700 ease-out flex items-center justify-center ${
          showQrHighlight 
            ? "scale-100 opacity-100" 
            : "scale-75 opacity-0"
        }`}
        style={qrStyle}
        data-testid="link-qr-onboarding"
      >
        <div 
          className={`w-full h-full rounded-lg border-4 border-[#2171b5] transition-all duration-300 hover:border-[#2171b5]/80 ${
            showQrHighlight ? "animate-pulse" : ""
          }`}
          style={{
            boxShadow: "0 0 20px 4px rgba(33, 113, 181, 0.4), 0 0 40px 8px rgba(33, 113, 181, 0.2)",
          }}
        >
          <span className="sr-only">온보딩 페이지로 이동</span>
        </div>
              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-[10px] md:text-xs font-medium text-[#2171b5] bg-background/90 px-2 py-1 rounded shadow-sm border border-[#2171b5]/20">
                  클릭하여 시작
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
