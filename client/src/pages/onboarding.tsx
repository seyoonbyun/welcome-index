import { Card } from "@/components/ui/card";
import { ExternalLink, CreditCard, Wrench, BarChart3, Trophy, GraduationCap, Globe, MessageCircle, Youtube, Podcast, Instagram, Facebook, Building2 } from "lucide-react";

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

const resourceCategories: ResourceCategory[] = [
  {
    title: "필수 시스템",
    links: [
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
    ],
  },
  {
    title: "비즈니스 도구",
    links: [
      {
        title: "PowerTeam Toolkit",
        description: "플랫폼 멤버 전용 툴킷을 확인하세요",
        url: "https://www.powerteam-bnikorea.com/PowerTeamToolkit",
        icon: Wrench,
      },
      {
        title: "RPI 데이터 뷰어",
        description: "툴킷 입력 후 데이터를 확인할 수 있는 뷰어",
        url: "https://www.powerteam-bnikorea.com/RPI2%EB%B2%88",
        icon: BarChart3,
      },
      {
        title: "비즈니스 트레이닝",
        description: "트레이닝 프로그램을 확인하고 참여하세요",
        url: "https://www.hub-bnikorea.com/BusinessTraining",
        icon: GraduationCap,
      },
    ],
  },
  {
    title: "커뮤니티 & 챌린지",
    links: [
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
    ],
  },
  {
    title: "공식 채널",
    links: [
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
    ],
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

function CategorySection({ category }: { category: ResourceCategory }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid={`section-${category.title}`}>
        {category.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {category.links.map((link) => (
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
          {resourceCategories.map((category) => (
            <CategorySection key={category.title} category={category} />
          ))}
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
