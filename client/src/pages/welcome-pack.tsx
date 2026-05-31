import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import WelcomePackHeader from "@/components/welcome-pack-header";
import PouchCredit from "@/components/pouch-credit";
import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// 이미지 경로는 public 폴더 기준
const images = {
  hero: "/assets/pouch_cover2.png",
  organizerFront: "/assets/welcome/pouch_front.jpg",
  organizerSet: "/assets/welcome/pouch_inside1.jpg",
  organizerInterior: "/assets/welcome/pouch_inside2.jpg",
  organizerBack: "/assets/welcome/pouch_back.jpg",
  organizerFull: "/assets/welcome/pouch_inside1.jpg",
};

const galleryImages = [
  "/assets/welcome/pouch_front.jpg",
  "/assets/welcome/pouch_back.jpg",
];

const galleryLabels = ["외부 앞", "외부 뒤"];

const interiorImages = [
  "/assets/welcome/pouch_inside1.jpg",
  "/assets/welcome/pouch_inside2.jpg",
];

const interiorLabels = ["내부 1", "내부 2"];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function WelcomePackPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [interiorIndex, setInteriorIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const nextInterior = () => {
    setInteriorIndex((prev) => (prev + 1) % interiorImages.length);
  };

  const prevInterior = () => {
    setInteriorIndex((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  };

  const goToInterior = (index: number) => {
    setInteriorIndex(index);
  };

  // 5초 간격 자동 전환
  useEffect(() => {
    if (galleryImages.length <= 1) return;
    const id = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (interiorImages.length <= 1) return;
    const id = setInterval(() => {
      setInteriorIndex((prev) => (prev + 1) % interiorImages.length);
    }, 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      <WelcomePackHeader />

      {/* Hero Section */}
      <motion.section
        className="relative flex flex-col pt-20 md:pt-0 md:min-h-screen md:items-center md:justify-center overflow-hidden bg-white"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* 히어로 영상 (모바일: 흐름 블록, 전체 표시 contain / 데스크탑: 배경 꽉 채움 cover) */}
        <video
          className="pointer-events-none relative z-0 w-full h-auto object-contain md:absolute md:inset-0 md:h-full md:object-cover md:object-center"
          src="/assets/welcome/hero.mp4"
          poster="/assets/pouch_out.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* 가독성용 라이트 오버레이 */}
        <div className="hidden md:block absolute inset-0 z-0 bg-white/55 pointer-events-none" />
        <div className="relative z-10 container mx-auto px-4 pt-10 pb-28 md:py-32 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.p
              className="mb-4 text-gray-600"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "24px",
              }}
              variants={fadeInUp}
            >
              BNI Korea New Membership Kit
            </motion.p>

            <motion.h1
              className="mb-6 text-gray-900 leading-none text-5xl md:text-7xl"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontWeight: 400,
                letterSpacing: "normal",
                margin: "0 0 24px",
              }}
              variants={fadeInUp}
            >
              비즈니스의 격을{" "}
              <br className="md:hidden" />
              높이는{" "}
              <br className="hidden md:block" />
              첫 시작
            </motion.h1>

            <motion.p
              className="mb-8 text-gray-700 max-w-2xl mx-auto"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28px",
              }}
              variants={fadeInUp}
            >
              BNI 코리아의 새로운 멤버가 된 순간,
              <br className="hidden md:block" />
              당신의 네트워킹은 더 체계적이고 더 프로페셔널해집니다.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button
                className="bg-white hover:bg-gray-50 text-bni-red border border-gray-300 rounded-full shadow-lg"
                style={{
                  fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                  fontSize: "14px",
                  fontWeight: 400,
                  padding: "12px 24px",
                }}
                onClick={() => {
                  document.getElementById("organizer")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Givers Gain® — 주는 자가 얻는다
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 opacity-70 hover:opacity-100 transition-opacity z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={() => {
            document.getElementById("organizer")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.section>

      {/* Professional Organizer Section */}
      <section id="organizer" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <p
              className="mb-2"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "rgb(211, 18, 18)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Professional Organizer
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "clamp(30px, 7vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "rgb(23, 23, 23)",
                margin: "0 0 16px",
              }}
            >
              BNI 프로페셔널 오거나이저
            </h2>
            <p
              className="max-w-3xl mx-auto"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28px",
                color: "rgb(102, 102, 102)",
              }}
            >
              준비된 사람은 오거나이저부터 다릅니다. BNI 프로페셔널 오거나이저는 필요한 도구를 정돈하는 수납 아이템을 넘어, 미팅 전의 준비성과 현장에서의 전문성을 가장 먼저 보여주는 비즈니스 에센셜입니다.
            </p>
          </motion.div>

          <div className="max-w-[79.2rem] mx-auto mb-20">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <motion.img
                  key={currentImageIndex}
                  src={galleryImages[currentImageIndex]}
                  alt={`Organizer view ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                      {galleryLabels[currentImageIndex] ?? ""}
                    </div>
                  </>
                )}
              </div>
              {galleryImages.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-bni-red w-8" : "bg-gray-300"
                      }`}
                      aria-label={`이미지 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

          </div>

          {/* Focus Gallery Section */}
          <motion.div
            className="text-center mb-12 mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3
              className="mb-4"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "clamp(30px, 7vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "rgb(23, 23, 23)",
              }}
            >
              정리된 도구가 더 깊은 대화를 만듭니다
            </h3>
            <p
              className="max-w-3xl mx-auto mb-6 leading-relaxed"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "26px",
                color: "rgb(102, 102, 102)",
              }}
            >
              비즈니스 도구가 체계적으로 정돈되어 있을수록 당신은 상대와의 대화와{" "}
              <strong className="text-bni-red">관계 형성에 더 깊이 집중</strong>할 수 있습니다.
            </p>
            <blockquote className="italic text-gray-600 text-lg max-w-2xl mx-auto">
              "준비된 사람의 인상은 기회보다 먼저 도착합니다"
            </blockquote>
          </motion.div>

          <div className="max-w-[79.2rem] mx-auto">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                <motion.img
                  key={interiorIndex}
                  src={interiorImages[interiorIndex]}
                  alt={`Interior view ${interiorIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                {interiorImages.length > 1 && (
                  <>
                    <button
                      onClick={prevInterior}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextInterior}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                      {interiorLabels[interiorIndex] ?? ""}
                    </div>
                  </>
                )}
              </div>
              {interiorImages.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {interiorImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToInterior(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === interiorIndex ? "bg-bni-red w-8" : "bg-gray-300"
                      }`}
                      aria-label={`내부 이미지 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interior Design Section */}
      <section id="usage" className="pt-20 md:pt-32 pb-10 md:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p
              className="mb-2"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "rgb(211, 18, 18)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Interior Design
            </p>
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "clamp(30px, 7vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.15,
                color: "rgb(23, 23, 23)",
                margin: "0 0 24px",
              }}
            >
              열면 바로 느껴지는<br />BNI의 기준
            </h2>
            <p
              className="max-w-4xl mx-auto"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28px",
                color: "rgb(102, 102, 102)",
              }}
            >
              오거나이저 내부는 단순한 수납 공간이 아닙니다. BNI의 철학과 실용성이 함께 작동하도록 설계된{" "}
              <br className="hidden md:block" />
              비즈니스 실행의 중심 공간입니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                title: "강렬한 BNI 레드 컬러",
                desc: "열정과 전문성을 상징하는 BNI 레드 컬러가 돋보이며, 한눈에 브랜드 아이덴티티를 전달합니다.",
                img: "/assets/welcome/interior_red.jpg",
                m32: true,
                pos: "object-bottom md:object-center",
              },
              {
                title: "Givers Gain® 손목 스트랩",
                desc: "탈부착 가능한 손목 스트랩에는 BNI의 핵심 철학인 Givers Gain®이 담겨 있어 언제 어디서나 브랜드의 가치를 자연스럽게 상기시켜 줍니다.",
                img: "/assets/welcome/interior_strap.jpg",
              },
              {
                title: "내부 슬로건 디테일",
                desc: '오거나이저를 여는 순간 마주하는 "Changing the Way the World Does Business™" 문구는 당신의 비즈니스 태도와 방향성을 다시 한 번 정렬해 줍니다.',
                img: "/assets/welcome/interior_slogan.jpg",
                fit: "contain",
              },
              {
                title: "체계적인 수납 시스템",
                desc: "메쉬 포켓, 일반 포켓, 펜 홀더가 유기적으로 구성되어 명함, 가이드, 리퍼럴 자료, 필기 도구까지 필수 아이템을 한 번에 정리할 수 있습니다.",
                img: "/assets/welcome/interior_storage.jpg",
                m32: true,
              },
              {
                title: "스마트 QR코드 멀티 키 참",
                desc: "아날로그 만남을 디지털 연결로 자연스럽게 확장할 수 있도록 QR 태그를 통해 BNI 코리아의 다양한 온라인 시스템에 빠르게 접속할 수 있습니다.",
                img: "/assets/welcome/interior_qr.jpg",
                m32: true,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full bg-gray-50 ${
                    (item as any).fit === "contain" ? "object-contain" : "object-cover"
                  } ${
                    (item as any).m32 ? "aspect-[3/2] md:aspect-auto md:h-48" : "h-48"
                  } ${(item as any).pos ?? ""}`}
                  style={(item as any).fit === "contain" ? { backgroundColor: "#d12031" } : undefined}
                />
                <div className="p-6">
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "rgb(23, 23, 23)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22.75px",
                      color: "rgb(102, 102, 102)",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge & Philosophy Section */}
      <section id="content" className="pt-10 md:pt-16 pb-20 md:pb-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-sm text-gray-600 font-normal tracking-wider uppercase mb-2">
              Knowledge & Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-normal mb-4">성공의 토대</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              성장은 감각이 아니라 이해에서 시작됩니다. 지식과 철학을 담은 콘텐츠를 통해 BNI 시스템을 더 깊이 이해하고, 실제 비즈니스에 더 전략적으로 적용할 수 있습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                category: "핵심 철학 도서",
                title: "당신은 기버입니까?",
                desc: 'BNI의 근간이 되는 "Givers Gain®" 철학을 깊이 있게 이해하고, 비즈니스 현장에서 구체적으로 실천하는 방법을 안내하는 필독서입니다.',
                img: "/assets/welcome/found_giver.jpg",
                cover: true,
              },
              {
                category: "가이드라인",
                title: "BNI 멤버 규정",
                desc: "BNI 시스템의 원칙과 규칙을 명확하게 제시하며, 모든 멤버가 공정하고 투명한 환경에서 활동할 수 있는 기반이 됩니다.",
                img: "/assets/welcome/found_rules.jpg",
                cover: true,
              },
              {
                category: "비즈니스 성장",
                title: "성장 전략 자료",
                desc: "BNI가 수십 년간 검증해 온 체계적인 성장 전략을 통해, 당신의 비즈니스를 한 단계 더 도약시킬 통찰력을 제공합니다.",
                img: "/assets/welcome/found_growth.jpg",
                cover: true,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className={`w-full aspect-[3/2] bg-gray-50 ${(item as any).cover ? "object-cover" : "object-contain"}`}
                />
                <div className="p-6">
                  <p className="text-xs text-gray-500 font-normal mb-2">{item.category}</p>
                  <h3 className="text-xl font-normal mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Essential Tools Section */}
      <section id="brand" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-sm text-gray-600 font-normal tracking-wider uppercase mb-2">
              Essential Tools
            </p>
            <h2 className="text-4xl md:text-5xl font-normal mb-4">
              작은 도구가 큰 차이를{" "}
              <br className="md:hidden" />
              만듭니다
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              기록은 신뢰를 남기고, 연결은 기회를 만듭니다. BNI Essential Tools는 당신의 아이디어를 더 정확하게 기록하고, 소중한 관계를 더 빠르게 연결하기 위한 실전형 도구들입니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {[
              {
                title: "BNI 공식 펜",
                desc: "생각을 기록하는 순간에도 브랜드는 남습니다. 깔끔한 화이트 바디와 BNI 로고 디테일이 더해진 공식 펜은 주간 미팅 메모, 1-2-1 핵심 정리, 감사의 메시지까지 모든 비즈니스 순간에 신뢰감 있는 인상을 더해줍니다.",
                features: ["깔끔한 화이트 디자인", "BNI 로고 각인", "부드럽고 안정적인 필기감"],
                img: "/assets/welcome/tool_pen.jpg",
              },
              {
                title: "스마트 QR코드 멀티 키 참",
                desc: "가장 빠르게, 가장 스마트하게 연결되는 방식입니다. 단 한 번의 스캔으로 BNI 코리아의 다양한 온라인 시스템과 연결되어 현장의 만남을 즉시 다음 단계의 관계로 확장할 수 있습니다.",
                features: ["빠르고 직관적인 연결", "다양한 온라인 시스템 활용", "효율적인 디지털 네트워킹 지원"],
                img: "/assets/welcome/tool_qr.jpg",
              },
              {
                title: "멤버 명찰",
                desc: "주간 미팅과 네트워킹 자리에서 당신의 이름과 소속을 명확히 전달합니다. 첫 만남에서부터 신뢰감 있는 인상을 남기는 BNI 멤버의 필수 아이템입니다.",
                features: ["이름·챕터 표기", "깔끔한 BNI 디자인", "간편한 착용"],
                img: "/assets/welcome/tool_namecard.jpg",
              },
              {
                title: "멤버 뱃지",
                desc: "BNI 멤버로서의 자부심을 상징하는 공식 뱃지입니다. 어디서든 글로벌 BNI 네트워크의 일원임을 드러내며 멤버 간 유대감을 강화합니다.",
                features: ["BNI 공식 엠블럼", "고급 메탈 마감", "소속감과 자부심"],
                img: "/assets/welcome/tool_badge.jpg",
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex flex-col sm:flex-row sm:items-stretch h-full">
                  <img
                    src={tool.img}
                    alt={tool.title}
                    className="w-full h-56 sm:h-auto sm:w-1/2 sm:self-stretch object-cover bg-gray-50 flex-shrink-0"
                  />
                  <div className="w-full sm:w-1/2 p-6 sm:p-8">
                    <h3 className="text-2xl font-normal mb-3">{tool.title}</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">{tool.desc}</p>
                    <div className="space-y-2">
                      {tool.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-gray-700 text-sm">
                          <span className="text-bni-red mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-16 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <p className="text-center text-sm text-gray-400 mb-4">
              P.S. 어디서 봤더라? 싶다면 맞습니다. 또 그 빨간 오거나이저예요 🙂
            </p>

            {/* 한 줄 정렬(justified row) — 높이 통일, scenes는 넓은 타일로 제 크기 유지 */}
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-2 [&>img]:h-28 md:[&>img]:h-40 [&>img]:w-auto [&>img]:object-cover [&>img]:rounded-lg [&>img]:shadow-sm">
              <img src="/assets/welcome/lifestyle_main.png" alt="BNI 오거나이저와 함께하는 비즈니스 리더" />
              <img src="/assets/welcome/lifestyle_7.png" alt="미팅을 준비하는 BNI 멤버" />
              <img src="/assets/welcome/lifestyle_11.png" alt="이동 중에도 업무를 이어가는 BNI 멤버" />
              <img src="/assets/welcome/lifestyle_12.png" alt="오거나이저와 함께 이동하는 BNI 멤버" />
              <img src="/assets/welcome/lifestyle_13.png" alt="출장길의 BNI 멤버" />
              <img src="/assets/welcome/lifestyle_5.png" alt="비즈니스 현장의 BNI 멤버" />
              <img src="/assets/welcome/lifestyle_desk.png" alt="업무 공간에서 BNI 오거나이저를 정리하는 멤버" />
              <img src="/assets/welcome/lifestyle_4.png" alt="오거나이저로 업무를 정리하는 BNI 멤버" />
              <img src="/assets/welcome/lifestyle_6.png" alt="오거나이저를 들고 이동하는 BNI 멤버" />
              <img src="/assets/welcome/lifestyle_15.png" alt="오거나이저 구성품을 살펴보는 BNI 멤버" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-bni-red to-bni-red-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-normal mb-6"
              variants={fadeInUp}
            >
              성공적인 시작은{" "}
              <br className="md:hidden" />
              우연이 아니라
              <br />
              준비에서 나옵니다
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              BNI 멤버십 키트는 단순한 물품의 집합이 아닙니다. 이것은 더 정돈된 태도, 더 체계적인 실행, 더 강한 연결을 위한 BNI 코리아의 첫 번째 지원 시스템입니다.
              <br className="hidden md:block" />
              당신의 첫인상부터 실행 방식까지, 더 프로페셔널한 시작을 완성해 보세요.
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-8">
              <blockquote className="text-2xl md:text-3xl font-normal italic mb-4">
                "Changing the Way the World Does Business™"
              </blockquote>
              <p className="text-lg opacity-90">세상의 비즈니스 방법을 바꿉니다</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button
                className="bg-white text-bni-red hover:bg-gray-100 rounded-full shadow-xl font-normal h-10 px-6 text-sm md:h-11 md:px-10 md:py-6 md:text-lg"
                onClick={scrollToTop}
              >
                BNI와 함께 시작하기
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 w-14 h-14 bg-bni-red text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:bg-bni-red-dark transition-colors"
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <PouchCredit />
    </div>
  );
}
