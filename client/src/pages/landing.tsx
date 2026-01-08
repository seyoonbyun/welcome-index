import { Link } from "wouter";
import welcomeImage from "@assets/a_1767856008937.png";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-landing-title">
          BNI Korea 멤버 온보딩 키트
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          이미지를 클릭하여 온보딩 리소스를 확인하세요
        </p>
        
        <Link href="/onboarding" data-testid="link-to-onboarding">
          <div className="group cursor-pointer inline-block">
            <div className="overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2">
              <img
                src={welcomeImage}
                alt="BNI Korea 멤버 온보딩 키트 - 클릭하여 시작하기"
                className="w-full h-auto max-w-3xl"
                data-testid="img-welcome"
              />
            </div>
            <p className="mt-6 text-primary font-medium flex items-center justify-center gap-2 group-hover:underline">
              클릭하여 온보딩 시작하기
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
