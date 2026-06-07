import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PouchCredit from "@/components/pouch-credit";
import { ExternalLink, CreditCard, Wrench, BarChart3, Trophy, GraduationCap, Globe, MessageCircle, Youtube, Podcast, Instagram, Facebook, Building2, ArrowRight, Info, ShoppingBag, UserPlus, CheckCircle, MapPin, Package } from "lucide-react";

interface ResourceLink {
  title: string;
  description: string;
  url: string;
  icon: typeof CreditCard;
}

interface ResourceCategory {
  title: string;
  links: ResourceLink[];
}

const essentialSystems: ResourceLink[] = [
  {
    title: "멤버십비 결제",
    description: "BNI 멤버십 비용을 안전하게 결제하세요",
    url: "https://pay.bnikorea.com/",
    icon: CreditCard,
  },
  {
    title: "BNI Connect Global",
    description: "글로벌 멤버십 커넥트 시스템에 로그인하세요",
    url: "https://www.bniconnectglobal.com/login/?message=",
    icon: Globe,
  },
];

const communityLinks: ResourceLink[] = [
  {
    title: "내셔널 컨퍼런스",
    description: "BNI Korea 내셔널 컨퍼런스 정보를 확인하세요",
    url: "https://www.nc26-bnikorea.com",
    icon: Trophy,
  },
  {
    title: "GBC : G글로벌 B즈니스 C위원회",
    description: "Global Business Commitee",
    url: "https://www.gbc-bnikorea.com/",
    icon: Trophy,
  },
  {
    title: "포럼 스탬프",
    description: "Director & Ambassador 대상 : DnA 포럼에 출석하고 스토어 포인트는 덤 !",
    url: "https://www.checkin-bnikorea.com/",
    icon: CheckCircle,
  },
  {
    title: "온라인 챕터 초대장",
    description: "지인을 BNI 미팅에 초대하세요",
    url: "https://hub-bnikorea.com/invitation",
    icon: UserPlus,
  },
];

const officialChannels: ResourceLink[] = [
  {
    title: "BNI KOREA 공식 홈페이지",
    description: "bnikorea.com",
    url: "http://bnikorea.com/ko/index",
    icon: Building2,
  },
  {
    title: "BNI Global",
    description: "BNI 글로벌 공식 웹사이트",
    url: "https://www.bni.com/",
    icon: Globe,
  },
  {
    title: "YouTube",
    description: "BNI Korea 공식 유튜브 채널",
    url: "http://www.youtube.com/@bni2608",
    icon: Youtube,
  },
  {
    title: "Podcast",
    description: "BNI Korea 공식 팟캐스트",
    url: "https://youtube.com/playlist?list=PLVM0CBTOzUHwA2TnyfW6GO9-XH8vdovWq&si=-jmPNMUkXCRSl8Cp",
    icon: Podcast,
  },
  {
    title: "Instagram",
    description: "BNI Korea 공식 인스타그램",
    url: "https://www.instagram.com/bnikorea/#",
    icon: Instagram,
  },
  {
    title: "Facebook",
    description: "BNI Korea 공식 페이스북",
    url: "https://facebook.com/bnikorea",
    icon: Facebook,
  },
];

const memberSupportLinks: ResourceLink[] = [
  {
    title: "멤버 지원 창구",
    description: "카카오톡으로 문의사항을 남겨주세요",
    url: "http://pf.kakao.com/_xewxmrT",
    icon: MessageCircle,
  },
  {
    title: "본사 위치 안내",
    description: "BNI Korea 본사 오시는 길",
    url: "https://map.naver.com/p/directions/-/14142748.3697468,4515149.9521428,%EB%B9%84%EC%97%94%EC%95%84%EC%9D%B4%EC%BD%94%EB%A6%AC%EC%95%84,1797861143,PLACE_POI/-/transit?c=15.00,0,0,0,dh",
    icon: MapPin,
  },
];

function ResourceCard({ link }: { link: ResourceLink }) {
  const Icon = link.icon;
  
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
      data-testid={`link-${link.title.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <Card className="p-6 h-full hover-elevate active-elevate-2 transition-all duration-200">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors">
                {link.title}
              </h3>
              <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {link.description}
            </p>
          </div>
        </div>
      </Card>
    </a>
  );
}

function PowerTeamWorkflowSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2.5 justify-center md:justify-start" data-testid="section-비즈니스-도구">
        <svg viewBox="0 0 20 22" width="20" height="22" className="text-[#2171b5]/60 flex-shrink-0" aria-hidden="true">
          <path d="M 8 1.5 Q 8 4 5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <rect x="2.5" y="5" width="15" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <line x1="3.5" y1="8" x2="16.5" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
        비즈니스 도구
      </h2>
      
      <Card className="p-6 mb-6">
        <div className="flex items-start gap-3 mb-6">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-foreground mb-1">PowerTeam 활동 기록 시스템</h3>
            <p className="text-sm text-muted-foreground">
              본인의 BNI 활동 성과를 기록하고, 나와 우리 챕터 전체의 기록을 확인할 수 있습니다. 아래 순서대로 이용해주세요.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <a
            href="https://www.powerteam-bnikorea.com/PowerTeamToolkit"
            target="_blank"
            rel="noopener noreferrer"
            className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
            data-testid="link-powerteam-toolkit"
          >
            <div className="p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-all duration-200 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="text-xs font-medium">Step 1</Badge>
                <span className="text-sm text-muted-foreground">기록하기</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors">
                      PowerTeam Toolkit
                    </h4>
                    <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    본인의 활동 성과를 입력하고 기록하세요
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          <a
            href="https://www.powerteam-bnikorea.com/RPI"
            target="_blank"
            rel="noopener noreferrer"
            className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
            data-testid="link-rpi-데이터-뷰어"
          >
            <div className="p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-all duration-200 h-full">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="text-xs font-medium">Step 2</Badge>
                <span className="text-sm text-muted-foreground">확인하기</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors">
                      RPI 데이터 뷰어
                    </h4>
                    <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    나와 챕터 전체의 활동 기록을 확인하세요
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <a
            href="https://www.youtube.com/watch?v=cOG550Q77Zk"
            target="_blank"
            rel="noopener noreferrer"
            className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
            data-testid="link-member-manual"
          >
            <div className="p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-all duration-200 h-full flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <Youtube className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0 flex items-center gap-2">
                <h4 className="font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors">
                  멤버 매뉴얼 바로보기
                </h4>
                <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
              </div>
            </div>
          </a>

          <a
            href="https://www.youtube.com/watch?v=vZcyOdyu6bg"
            target="_blank"
            rel="noopener noreferrer"
            className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
            data-testid="link-admin-manual"
          >
            <div className="p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-all duration-200 h-full flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <Youtube className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0 flex items-center gap-2">
                <h4 className="font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors">
                  관리자 매뉴얼 바로보기
                </h4>
                <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
              </div>
            </div>
          </a>
        </div>

        <a
          href="https://docs.google.com/spreadsheets/d/14KZrC6w8BUIFCp2AcLF6Uj36HKXsVQgZOY9_H2-DY18/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg mb-3"
          data-testid="link-rpi-realtime-stats"
        >
          <div className="p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-all duration-200 flex items-center justify-center gap-2">
            <span className="font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors">
              BNI 코리아 RPI 실시간 현황
            </span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </a>

        <a
          href="https://www.powerteam-bnikorea.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
          data-testid="link-powerteam-more"
        >
          <div className="p-4 rounded-lg border border-border hover-elevate active-elevate-2 transition-all duration-200 flex items-center justify-center gap-2">
            <span className="font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors">
              PowerTeam 페이지 바로 가기
            </span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </a>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResourceCard
          link={{
            title: "비즈니스 트레이닝",
            description: "트레이닝 프로그램을 확인하고 참여하세요",
            url: "https://www.hub-bnikorea.com/BusinessTraining",
            icon: GraduationCap,
          }}
        />
        <ResourceCard
          link={{
            title: "BNI 코리아 스토어",
            description: "BNI 코리아의 공식 굿즈 & 챕터 물품을 구매하실 수 있어요 :)",
            url: "https://www.bnikoreastore.com/",
            icon: ShoppingBag,
          }}
        />
      </div>
    </section>
  );
}

function CategorySection({ title, links }: { title: string; links: ResourceLink[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2.5 justify-center md:justify-start" data-testid={`section-${title}`}>
        <svg viewBox="0 0 20 22" width="20" height="22" className="text-[#2171b5]/60 flex-shrink-0" aria-hidden="true">
          <path d="M 8 1.5 Q 8 4 5 5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
          <rect x="2.5" y="5" width="15" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
          <line x1="3.5" y1="8" x2="16.5" y2="8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </svg>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {links.map((link) => (
          <ResourceCard key={link.title} link={link} />
        ))}
      </div>
    </section>
  );
}

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-16">
        <header className="text-center mb-10 md:mb-16">
          <Link href="/welcome_kit" data-testid="link-header-to-welcomekit">
            <div className="group cursor-pointer relative inline-block mb-6">
              <div className="mb-2">
                <span className="text-4xl md:text-6xl font-serif italic text-foreground block md:inline-block tracking-tight transition-colors duration-200 group-hover:text-[#d12031]">
                  Welcome Pack
                </span>
              </div>
              <h1 className="text-xl md:text-4xl font-bold text-foreground px-4 break-keep whitespace-nowrap transition-colors duration-200 group-hover:text-[#d12031]" data-testid="text-page-title">
                BNI KOREA 멤버 온보딩 키트
              </h1>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-3 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 z-20">
                <span className="inline-flex items-center gap-1.5 bg-[#d12031] text-white text-sm font-medium px-4 py-2 rounded-full shadow-md whitespace-nowrap">
                  웰컴팩 구성 살펴보러 갈까요?
                  <span>→</span>
                </span>
              </div>
            </div>
          </Link>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto px-6 break-keep md:whitespace-nowrap">
            환영합니다 ! BNI KOREA 멤버로서 활동에 필요한 모든 리소스를 한눈에 확인하세요 !
          </p>

          <a
            href="https://www.guardian-bnikorea.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block group mt-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
            data-testid="banner-guardian-challenge"
          >
            <div className="relative overflow-hidden rounded-xl border border-border bg-card px-5 py-6 md:px-6 md:py-8 shadow-sm hover-elevate active-elevate-2 transition-all duration-200">
              <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                <Badge className="bg-primary/10 text-primary border-0 text-[10px] md:text-xs font-semibold hover:bg-primary/10">
                  지금 진행 중인 챌린지
                </Badge>
              </div>

              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-10 inline-flex items-center gap-1 text-xs md:text-sm font-medium text-primary">
                자세히 보러 가기
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>

              <div className="flex items-center gap-4 md:gap-6 text-left">
                <div className="w-1/2 flex-shrink-0">
                  <video
                    src="https://www.guardian-bnikorea.com/win.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-36 md:h-48 object-cover rounded-lg bg-muted"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <Trophy className="w-3.5 h-3.5 text-primary" />
                    <span className="text-xs font-semibold tracking-wide text-primary">BNI GUARDIAN</span>
                  </div>
                  <h3 className="font-serif italic text-2xl md:text-[37px] md:whitespace-nowrap font-bold text-foreground mt-1 leading-tight">
                    <span className="block md:inline">+ 1 Member</span>{" "}
                    <span className="block text-right md:inline md:text-left">Challenge</span>
                  </h3>
                </div>
              </div>
            </div>
          </a>
        </header>

        <main className="space-y-12">
          <CategorySection title="필수 시스템" links={essentialSystems} />
          <PowerTeamWorkflowSection />
          <CategorySection title="커뮤니티 & 이벤트" links={communityLinks} />
          <CategorySection title="공식 채널" links={officialChannels} />
          <CategorySection title="멤버 지원" links={memberSupportLinks} />
        </main>

        <section className="mt-6">
          <Link href="/welcome_kit" data-testid="link-bottom-to-welcomekit">
            <div className="block group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl">
              <div className="relative overflow-hidden rounded-xl border border-border bg-card px-5 py-6 md:px-6 md:py-8 shadow-sm hover-elevate active-elevate-2 transition-all duration-200">
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                  <Badge className="bg-primary/10 text-primary border-0 text-[10px] md:text-xs font-semibold hover:bg-primary/10">
                    멤버 전용 혜택
                  </Badge>
                </div>

                <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-10 inline-flex items-center gap-1 text-xs md:text-sm font-medium text-primary">
                  자세히 보러 가기
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>

                <div className="flex items-center gap-4 md:gap-6 text-left">
                  <div className="w-1/2 flex-shrink-0">
                    <video
                      src="/assets/welcome/hero.mp4"
                      poster="/assets/welcome/hero_poster.jpg"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-36 md:h-48 object-cover rounded-lg bg-muted"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 md:justify-center">
                      <Package className="w-3.5 h-3.5 text-primary" />
                      <span className="text-xs font-semibold tracking-wide text-primary whitespace-nowrap"><span className="hidden md:inline">BNI Korea </span>Membership <span className="hidden md:inline">Toolkit </span>Package</span>
                    </div>
                    <h3 className="font-serif italic text-2xl md:text-[37px] md:whitespace-nowrap md:text-center font-bold text-foreground mt-1 leading-tight">
                      <span className="block md:inline">Welcome</span>{" "}
                      <span className="block text-right md:inline md:text-left">Pack</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <footer className="mt-16 pt-8 pb-16 md:pb-0 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-6 order-1 md:order-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors focus:outline-none focus-visible:underline"
                data-testid="link-footer-home"
              >
                홈
              </Link>
              <a
                href="https://pay.bnikorea.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors focus:outline-none focus-visible:underline"
                data-testid="link-footer-payment"
              >
                멤버십 결제
              </a>
              <a
                href="http://pf.kakao.com/_xewxmrT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors focus:outline-none focus-visible:underline"
                data-testid="link-footer-support"
              >
                멤버 지원 문의
              </a>
              <a
                href="http://bnikorea.com/ko/index"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors focus:outline-none focus-visible:underline"
                data-testid="link-footer-website"
              >
                공식 웹사이트
              </a>
            </div>
            <p className="text-sm text-muted-foreground order-2 md:order-1">
              BNI Korea. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <PouchCredit />
    </div>
  );
}
