import { useState, type ReactNode } from "react";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PouchCredit from "@/components/pouch-credit";
import { ExternalLink, CreditCard, Wrench, BarChart3, Trophy, GraduationCap, Globe, MessageCircle, Youtube, Podcast, Instagram, Facebook, Building2, ArrowRight, Pointer, Info, ShoppingBag, UserPlus, CheckCircle, MapPin, Package, Home, Users } from "lucide-react";

interface ResourceLink {
  title: string;
  description: ReactNode;
  url: string;
  icon: typeof CreditCard;
  badge?: string;
  step?: number;
  popupText?: string;
  titleClassName?: string;
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
    icon: CreditCard,  },
  {
    title: "BNI Connect Global",
    description: "글로벌 멤버십 커넥트 시스템에 로그인하세요",
    url: "https://www.bniconnectglobal.com/login/?message=",
    icon: Globe,    step: 1,
    popupText: "대표님 성함으로 BNI Connect 계정이 개설되었습니다!\n즐거운 멤버활동을 위해 BNI Connect 계정 등록을 먼저 마무리해주세요!",
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
    title: "글로벌 비즈니스 위원회",
    description: (
      <>
        <span className="text-[#d12031] font-bold">G</span>lobal{" "}
        <span className="text-[#d12031] font-bold">B</span>usiness{" "}
        <span className="text-[#d12031] font-bold">C</span>ommittee
      </>
    ),
    url: "https://www.gbc-bnikorea.com/",
    icon: Trophy,
  },
  {
    title: "비즈니스 포럼",
    description: "비즈니스 포럼 일정을 확인하고 참여하세요",
    url: "https://app.notion.com/p/BNI-KOREA-37839e9f1cf780d5bdc2f05ccf9ccb2f?source=copy_link",
    icon: Users,
  },
  {
    title: "BNI 코리아 공식 단톡방",
    description: "BNI 코리아 공식 단톡방에 참여하세요",
    url: "https://app.notion.com/p/BNI-37839e9f1cf78089a483eaa33a46580f?source=copy_link",
    icon: MessageCircle,
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
    url: "https://map.naver.com/p/search/%EB%B9%84%EC%97%94%EC%95%84%EC%9D%B4%EC%BD%94%EB%A6%AC%EC%95%84/place/1797861143?placePath=/home?bk_query=%EB%B9%84%EC%97%94%EC%95%84%EC%9D%B4%EC%BD%94%EB%A6%AC%EC%95%84&entry=pll&from=nx&fromNxList=true&fromPanelNum=2&timestamp=202606092134&locale=ko&svcName=map_pcv5&searchText=%EB%B9%84%EC%97%94%EC%95%84%EC%9D%B4%EC%BD%94%EB%A6%AC%EC%95%84&searchType=place&c=15.00,0,0,0,dh",
    icon: MapPin,
  },
];

function CoachMark({
  show,
  text,
  isLast,
  nextStepNo,
  onNext,
  onEnd,
  textClassName = "text-sm sm:text-base md:text-lg",
}: {
  show: boolean;
  text: string;
  isLast: boolean;
  nextStepNo: number;
  onNext: () => void;
  onEnd: () => void;
  textClassName?: string;
}) {
  return (
    <div
      role="dialog"
      aria-hidden={!show}
      className={`absolute inset-x-0 bottom-full mb-3 z-[60] transition-all duration-200 ${
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-1 invisible pointer-events-none"
      }`}
      data-testid="coach-mark"
    >
      <div className="relative rounded-xl bg-card border border-primary/30 shadow-2xl p-4 text-left">
        <p className={`${textClassName} text-foreground leading-relaxed break-keep whitespace-pre-line`}>{text}</p>
        <div className="mt-3 flex items-center justify-end">
          <button
            type="button"
            onClick={isLast ? onEnd : onNext}
            className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover-elevate active-elevate-2"
            data-testid={isLast ? "coach-end" : "coach-next"}
          >
            {isLast ? "가이드 종료" : `STEP ${nextStepNo} 바로가기`}
            {!isLast && <ArrowRight className="w-3 h-3" />}
          </button>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 w-3 h-3 rotate-45 bg-card border-r border-b border-primary/30" />
      </div>
    </div>
  );
}

function ResourceCard({
  link,
  activeStep = false,
  isLast = false,
  onNext,
  onEnd,
}: {
  link: ResourceLink;
  activeStep?: boolean;
  isLast?: boolean;
  onNext?: () => void;
  onEnd?: () => void;
}) {
  const Icon = link.icon;

  return (
    <div
      id={link.step ? `step-${link.step}` : undefined}
      className={`relative h-full scroll-mt-28 ${activeStep ? "z-50" : ""}`}
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
        data-testid={`link-${link.title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <Card className={`p-6 h-full flex flex-col hover-elevate active-elevate-2 transition-all duration-200 ${activeStep ? "step-active" : ""}`}>
          {link.step && (
            <div className="mb-3">
              <Badge className="bg-primary text-primary-foreground border-0 text-[10px] font-semibold hover:bg-primary">
                신입멤버 온보딩 STEP {link.step}
              </Badge>
            </div>
          )}
          <div className={`flex gap-4 ${link.step ? "items-start" : "flex-1 items-center"}`}>
            <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className={`${link.titleClassName ?? "text-lg"} font-medium text-foreground group-hover:text-primary group-focus-visible:text-primary transition-colors`}>
                  {link.title}
                </h3>
                {link.badge && (
                  <Badge className="flex-shrink-0 bg-primary/10 text-primary border-0 text-[10px] font-semibold hover:bg-primary/10">
                    {link.badge}
                  </Badge>
                )}
                <ExternalLink className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity ml-auto" />
              </div>
              <p className="text-sm text-foreground/70 mt-1">
                {link.description}
              </p>
            </div>
          </div>
        </Card>
      </a>
      {link.popupText && (
        <CoachMark
          show={activeStep}
          text={link.popupText}
          isLast={isLast}
          nextStepNo={(link.step ?? 0) + 1}
          onNext={onNext ?? (() => {})}
          onEnd={onEnd ?? (() => {})}
        />
      )}
    </div>
  );
}

function PowerTeamWorkflowSection({
  tourStep = 0,
  onNext,
  onEnd,
}: {
  tourStep?: number;
  onNext?: () => void;
  onEnd?: () => void;
}) {
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
      
      <div id="step-2" className={`relative mb-6 scroll-mt-28 ${tourStep === 2 ? "z-50" : ""}`}>
      <Card className={`p-6 ${tourStep === 2 ? "step-active" : ""}`}>
        <div className="mb-3">
          <Badge className="bg-primary text-primary-foreground border-0 text-[10px] font-semibold hover:bg-primary">
            신입멤버 온보딩 STEP 2
          </Badge>
        </div>
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
                <Badge className="!bg-[#001A9E] !text-white border-0 text-xs font-medium hover:!bg-[#001A9E]">파워팀 STEP 1</Badge>
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
                  <p className="text-sm text-foreground/70 mt-1">
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
                <Badge className="!bg-[#001A9E] !text-white border-0 text-xs font-medium hover:!bg-[#001A9E]">파워팀 STEP 2</Badge>
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
                  <p className="text-sm text-foreground/70 mt-1">
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
                  파워팀 멤버 매뉴얼 바로보기
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
                  파워팀 관리자 매뉴얼 바로보기
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
      <CoachMark
        show={tourStep === 2}
        text={"이제 PowerTeam에서 나의 활동을 기록해보세요.\n나와 챕터 전체의 성과를 확인하는 시작점입니다."}
        isLast={false}
        nextStepNo={3}
        textClassName="text-base sm:text-lg md:text-xl"
        onNext={onNext ?? (() => {})}
        onEnd={onEnd ?? (() => {})}
      />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResourceCard
          activeStep={tourStep === 3}
          isLast
          onNext={onNext}
          onEnd={onEnd}
          link={{
            title: "비즈니스 트레이닝",
            description: "트레이닝 프로그램을 확인하고 참여하세요",
            url: "https://www.hub-bnikorea.com/BusinessTraining",
            icon: GraduationCap,
            step: 3,
            popupText: "BNI 코리아에서는 멤버십 회원 대상, 비즈니스 성장을 위한 실전 MBA 프로그램이 매주 열립니다. 놓치지 마세요 ! :)",
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

function CategorySection({
  title,
  links,
  id,
  tourStep = 0,
  onNext,
  onEnd,
}: {
  title: string;
  links: ResourceLink[];
  id?: string;
  tourStep?: number;
  onNext?: () => void;
  onEnd?: () => void;
}) {
  return (
    <section id={id} className="scroll-mt-24">
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
          <ResourceCard
            key={link.title}
            link={link}
            activeStep={!!link.step && tourStep === link.step}
            isLast={link.step === 3}
            onNext={onNext}
            onEnd={onEnd}
          />
        ))}
      </div>
    </section>
  );
}

export default function OnboardingPage() {
  const [tourStep, setTourStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const scrollToStep = (n: number) => {
    window.requestAnimationFrame(() => {
      document.getElementById(`step-${n}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  };

  const startTour = () => {
    setTourStep(1);
    scrollToStep(1);
  };

  const nextStep = () => {
    const n = tourStep + 1;
    if (n > 3) {
      setTourStep(0);
      setCompleted(true);
      return;
    }
    setTourStep(n);
    scrollToStep(n);
  };

  const endTour = () => {
    setTourStep(0);
    setCompleted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {tourStep > 0 && (
        <div
          className="fixed inset-0 z-40 bg-black/40 transition-opacity duration-200"
          onClick={endTour}
          data-testid="tour-overlay"
          aria-hidden="true"
        />
      )}
      <div className="relative max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-16">
        <nav className="absolute top-4 right-4 md:top-6 md:right-8 z-50 flex items-center gap-1">
          <Link
            href="/"
            aria-label="홈"
            data-testid="nav-home"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover-elevate active-elevate-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Home className="w-5 h-5" />
          </Link>
          <Link
            href="/welcome_kit"
            aria-label="툴"
            data-testid="nav-tools"
            className="inline-flex items-center justify-center w-9 h-9 rounded-md text-muted-foreground hover-elevate active-elevate-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Package className="w-5 h-5" />
          </Link>
        </nav>
        <header className="text-center mt-10 md:mt-4 mb-10 md:mb-16">
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
                <Badge className="bg-primary/10 text-primary border-0 text-[10px] md:text-xs font-semibold hover:bg-primary/10 badge-pulse">
                  HOT !! 지금 진행중인 챌린지
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

        <div className="mb-12">
          <button
            type="button"
            onClick={startTour}
            data-testid="button-start-here"
            className={`group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 sm:px-6 py-3 text-xs sm:text-base md:text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/30 hover-elevate active-elevate-2 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 break-keep whitespace-nowrap ${
              tourStep === 0 && !completed ? "cta-pulse" : ""
            }`}
          >
            {completed ? "온보딩 가이드 다시 보기" : "신규 멤버가 먼저 확인해야 할 툴 3단계 확인하기!"}
            <Pointer className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
          </button>
        </div>

        <main className="space-y-12">
          <CategorySection title="필수 시스템" links={essentialSystems} id="essential-systems" tourStep={tourStep} onNext={nextStep} onEnd={endTour} />
          <PowerTeamWorkflowSection tourStep={tourStep} onNext={nextStep} onEnd={endTour} />
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
