import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CreditCard, Wrench, BarChart3, Trophy, GraduationCap, Globe, MessageCircle, Youtube, Podcast, Instagram, Facebook, Building2, ArrowRight, Info } from "lucide-react";

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
    title: "Guardian 챌린지",
    description: "진행 중인 챌린지를 확인하고 참여하세요",
    url: "https://www.guardian-bnikorea.com/",
    icon: Trophy,
  },
  {
    title: "멤버 지원 창구",
    description: "카카오톡으로 문의사항을 남겨주세요",
    url: "http://pf.kakao.com/_xewxmrT",
    icon: MessageCircle,
  },
];

const officialChannels: ResourceLink[] = [
  {
    title: "YouTube",
    description: "BNI Korea 공식 유튜브 채널",
    url: "http://www.youtube.com/@bni2608",
    icon: Youtube,
  },
  {
    title: "Podcast",
    description: "BNI Korea 공식 팟캐스트",
    url: "https://podbbang.page.link/3XmXNUmqDrSQUieH8",
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
  {
    title: "BNI Korea 웹사이트",
    description: "BNI Korea 공식 홈페이지",
    url: "https://www.bnikorea.com",
    icon: Building2,
  },
  {
    title: "BNI Global",
    description: "BNI 글로벌 공식 웹사이트",
    url: "https://www.bni.com/",
    icon: Globe,
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
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
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
      <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid="section-비즈니스-도구">
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
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    본인의 활동 성과를 입력하고 기록하세요
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          <a
            href="https://www.powerteam-bnikorea.com/RPI2%EB%B2%88"
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
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    나와 챕터 전체의 활동 기록을 확인하세요
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="flex items-center justify-center">
          <a
            href="https://www.powerteam-bnikorea.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline focus:outline-none focus-visible:underline"
            data-testid="link-powerteam-more"
          >
            PowerTeam 도구에 대해 자세히 알아보기
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
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
      </div>
    </section>
  );
}

function CategorySection({ title, links }: { title: string; links: ResourceLink[] }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid={`section-${title}`}>
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
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
            BNI Korea 멤버 온보딩
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            환영합니다! BNI Korea 플랫폼 멤버로서 활동에 필요한 모든 리소스를 한눈에 확인하세요.
          </p>
          <p className="text-base text-muted-foreground mt-2">
            모든 리소스가 한 곳에
          </p>
        </header>

        <main className="space-y-12">
          <CategorySection title="필수 시스템" links={essentialSystems} />
          <PowerTeamWorkflowSection />
          <CategorySection title="커뮤니티 & 챌린지" links={communityLinks} />
          <CategorySection title="공식 채널" links={officialChannels} />
        </main>

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              BNI Korea. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
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
                href="https://www.bnikorea.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground focus-visible:text-foreground transition-colors focus:outline-none focus-visible:underline"
                data-testid="link-footer-website"
              >
                공식 웹사이트
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
