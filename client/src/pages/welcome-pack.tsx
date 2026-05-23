import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import WelcomePackHeader from "@/components/welcome-pack-header";
import PouchCredit from "@/components/pouch-credit";
import { Button } from "@/components/ui/button";
import { ArrowUp, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// 이미지 경로는 public 폴더 기준
const images = {
  hero: "/assets/pouch_cover2.png",
  organizerFront: "/assets/pouch_out.jpg",
  organizerSet: "/assets/KakaoTalk_20251213_145004065_11.jpg",
  organizerInterior: "/assets/pouch_in.jpg",
  organizerBack: "/assets/pouch_back.png",
  organizerFull: "/assets/pouch_in.jpg",
};

const galleryImages = [
  images.organizerFront,
];

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

  return (
    <div ref={containerRef} className="min-h-screen bg-white" style={{ fontFamily: '"Pretendard Variable", Pretendard, sans-serif' }}>
      <WelcomePackHeader />

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-200"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
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
              성공적인 비즈니스<br />여정의 시작
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
              BNI 코리아의 새로운 가족이 되신 것을 진심으로 환영합니다.
              <br className="hidden md:block" />
              당신의 비즈니스 성장을 위한 여정이 시작됩니다.
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
                fontSize: "48px",
                fontWeight: 400,
                lineHeight: "48px",
                color: "rgb(23, 23, 23)",
                margin: "0 0 16px",
              }}
            >
              BNI 프로페셔널 오거나이저
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28px",
                color: "rgb(102, 102, 102)",
              }}
            >
              당신의 전문성을 담는 첫인상. 비즈니스 미팅에서 체계적인 준비성은 당신의 전문성을 대변합니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
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
                      {currentImageIndex === 0 ? "전면" : currentImageIndex === 1 ? "후면" : currentImageIndex === 2 ? "내부" : "전체"}
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

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                {
                  title: "프리미엄 소재",
                  desc: "고급 사피아노 텍스처의 PU 레더로 제작되어 내구성과 고급스러움을 동시에 갖추었습니다.",
                  img: "/assets/PhotoshopExtension_Image_2.png",
                },
                {
                  title: "네트워킹 최적화",
                  desc: "명함, 리퍼럴 슬립, 비즈니스 카드를 체계적으로 수납하여 효율적인 네트워킹을 지원합니다.",
                  img: "/assets/PhotoshopExtension_Image_3.png",
                },
                {
                  title: "글로벌 BNI 아이덴티티",
                  desc: "전 세계 BNI 멤버들과 동일한 브랜드 경험으로 글로벌 네트워크의 일원임을 실감합니다.",
                  img: "/assets/PhotoshopExtension_Image_4.png",
                },
                {
                  title: "즉각적인 전문성 표현",
                  desc: "미팅 시작 전부터 정리된 오거나이저가 당신의 준비성과 전문성을 무언으로 전달합니다.",
                  img: "/assets/PhotoshopExtension_Image_5.png",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg"
                  variants={fadeInUp}
                >
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      color: "rgb(23, 23, 23)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "22.75px",
                      color: "rgb(102, 102, 102)",
                    }}
                  >
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                  fontSize: "30px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  color: "rgb(23, 23, 23)",
                }}
              >
                완벽한 정리가 만드는 집중력
              </h3>
              <p
                className="mb-6 leading-relaxed"
                style={{
                  fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "26px",
                  color: "rgb(102, 102, 102)",
                }}
              >
                체계적으로 정리된 비즈니스 도구는 당신의 머릿속을 비워, 눈앞의 동료 멤버에게 온전히 집중하게 만듭니다. 이는 더 깊은 관계를 형성하고, 더 가치 있는 리퍼럴을 창출하는{" "}
                <strong className="text-bni-red">Givers Gain®의 진정한 시작</strong>입니다.
              </p>
              <blockquote className="border-l-4 border-bni-red pl-6 italic text-gray-600 text-lg">
                "준비된 전문가는 기회가 왔을 때 망설이지 않습니다"
              </blockquote>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <img
                src={images.organizerSet}
                alt="BNI 오거나이저 풀 구성"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interior Design Section */}
      <section className="py-20 md:py-32 bg-white">
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
                fontSize: "36px",
                fontWeight: 400,
                lineHeight: "40px",
                color: "rgb(23, 23, 23)",
                margin: "0 0 24px",
              }}
            >
              세심하게 설계된<br />내부 구조
            </h2>
            <p
              className="max-w-2xl mx-auto"
              style={{
                fontFamily: '"Pretendard Variable", Pretendard, sans-serif',
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "28px",
                color: "rgb(102, 102, 102)",
              }}
            >
              오거나이저 내부에는 "Changing the Way the World Does Business™ - 세상의 비즈니스 방법을 바꿉니다"라는 슬로건이 각인되어 있어, 열 때마다 BNI의 미션을 상기시켜 드립니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                title: "강렬한 BNI 레드 컬러",
                desc: "열정과 전문성을 상징하는 BNI 레드 컬러와 선명한 BNI KOREA 로고가 멤버로서의 강력한 소속감과 자부심을 느끼게 합니다.",
                img: "/assets/PhotoshopExtension_Image_2.png",
              },
              {
                title: "Givers Gain® 손목 스트랩",
                desc: '탈부착 가능한 손목 스트랩에 BNI의 핵심 철학 "Givers Gain®"이 각인되어 있어 언제 어디서든 BNI의 가치를 기억하고 실천할 수 있습니다.',
                img: "/assets/PhotoshopExtension_Image_3.png",
              },
              {
                title: "내부 슬로건 각인",
                desc: '오거나이저를 열면 마주하는 "Changing the Way the World Does Business™ - 세상의 비즈니스 방법을 바꿉니다" 문구가 끊임없는 영감과 동기를 부여합니다.',
                img: "/assets/PhotoshopExtension_Image_4.png",
              },
              {
                title: "체계적인 수납 시스템",
                desc: "메쉬 포켓, 일반 포켓, 펜 홀더가 체계적으로 설계되어 명함, 책, 리퍼럴 슬립 등 필수 비즈니스 도구를 완벽하게 정리할 수 있습니다.",
                img: "/assets/PhotoshopExtension_Image_5.png",
              },
              {
                title: "스마트 QR코드 태그",
                desc: "탈착 가능한 QR코드 태그로 디지털 명함, BNI 커넥트 프로필에 즉시 연결하여 아날로그 만남을 디지털 관계로 전환합니다.",
                img: "/assets/PhotoshopExtension_Image_6.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section id="usage" className="pt-20 md:pt-32 pb-4 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-sm text-gray-600 font-normal tracking-wider uppercase mb-2">
              Product Details
            </p>
            <h2 className="text-4xl md:text-5xl font-normal mb-4">세심하게 설계된<br />내부 구조</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              세심하게 설계된 모든 디테일이 당신의 비즈니스를 더욱 체계적으로 만들어 드립니다
            </p>
          </motion.div>

        </div>
      </section>

      {/* QR Code Tag Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src="/assets/a.png"
                alt="QR코드 태그 클로즈업"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-sm text-gray-600 font-normal tracking-wider uppercase mb-2">
                Smart Connection
              </p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">QR코드 태그 상세</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Givers Gain® 손목 스트랩에 부착된 스마트 QR코드 태그는 당신의 디지털 프로필과 즉시 연결됩니다. 한 번의 스캔으로 BNI 커넥트, 개인 포트폴리오, SNS 프로필까지 모든 정보를 전달할 수 있습니다.
              </p>
              <div className="space-y-2">
                {["BNI 커넥트 프로필 즉시 연결", "개인 링크 커스터마이징 가능", "탈부착 가능한 디자인"].map((item, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <span className="text-bni-red mr-2">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Knowledge & Philosophy Section */}
      <section id="content" className="py-20 md:py-32 bg-white">
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
              지식과 철학을 담은 콘텐츠로 BNI 시스템을 깊이 이해하고 비즈니스에 적용하세요
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                category: "핵심 철학 도서",
                title: "당신은 기버입니까?",
                desc: 'BNI의 근간이 되는 "Givers Gain®" 철학을 깊이 있게 이해하고, 비즈니스 현장에서 구체적으로 실천하는 방법을 안내하는 필독서입니다.',
                img: "/assets/icon-book.svg",
              },
              {
                category: "가이드라인",
                title: "BNI 멤버 규정",
                desc: "BNI 시스템의 원칙과 규칙을 명확하게 제시하며, 모든 멤버가 공정하고 투명한 환경에서 활동할 수 있는 기반이 됩니다.",
                img: "/assets/icon-document.svg",
              },
              {
                category: "비즈니스 성장",
                title: "성장 전략 자료",
                desc: "BNI가 수십 년간 검증해 온 체계적인 성장 전략을 통해, 당신의 비즈니스를 한 단계 더 도약시킬 통찰력을 제공합니다.",
                img: "/assets/icon-growth.svg",
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
                  className="w-full h-64 object-contain bg-gray-50"
                />
                <div className="p-6">
                  <p className="text-xs text-gray-500 font-normal mb-2">{item.category}</p>
                  <h3 className="text-xl font-normal mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-xl text-gray-700 mb-2">머릿속에 성공의 청사진을 그렸다면</p>
            <p className="text-xl font-normal text-gray-900">이제 손에 날카로운 펜을 쥘 시간입니다</p>
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-normal mb-4">실행을 위한 필수 도구</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              위대한 아이디어를 기록하고, 소중한 관계를 연결하는 작은 도구들이 결정적인 차이를 만듭니다
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {[
              {
                title: "BNI 공식 펜",
                desc: "BNI 로고가 새겨진 깔끔한 흰색 펜은 주간 미팅에서의 발표 내용 기록, 1-2-1 미팅의 핵심 사항 정리, 그리고 동료 멤버에게 감사를 전하는 모든 순간에 당신의 신뢰를 더합니다.",
                features: ["깔끔한 화이트 디자인", "BNI 로고 각인", "부드러운 필기감"],
                img: "/assets/icon-pen.svg",
              },
              {
                title: "스마트 QR코드 태그",
                desc: "아날로그 첫인상을 즉각적인 디지털 관계로 전환하는 관문입니다. 단 한 번의 스캔으로 당신의 전문성을 각인시키세요.",
                features: ["BNI 커넥트 프로필 연결", "개인 포트폴리오 링크", "디지털 명함 교환"],
                img: "/assets/icon-qr.svg",
              },
            ].map((tool, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="flex items-start gap-6 mb-6">
                  <img
                    src={tool.img}
                    alt={tool.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div>
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
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <img
                src="/assets/KakaoTalk_20251213_145004065_11.jpg"
                alt="QR코드 태그와 Givers Gain 스트랩"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src="/assets/PhotoshopExtension_Image_4.png"
                  alt="QR 태그"
                  className="rounded-lg"
                />
                <div className="space-y-4">
                  <img
                    src="/assets/PhotoshopExtension_Image_5.png"
                    alt="스트랩"
                    className="rounded-lg"
                  />
                  <img
                    src="/assets/pouch_girl.png"
                    alt="파우치 활용 모습"
                    className="rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-normal mb-4">디지털과 아날로그의 완벽한 연결</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                QR코드 태그는 오거나이저에 부착하거나 분리하여 사용할 수 있습니다. 명함을 건네는 전통적인 방식과 디지털 연결을 동시에 제공하여, 어떤 상황에서도 효과적인 네트워킹이 가능합니다.
              </p>
              <div className="space-y-2">
                {["즉시 연결", "무제한 스캔"].map((item, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <span className="text-bni-red mr-2">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
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
              당신의 성공적인 시작을<br />응원합니다
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              BNI 멤버십 키트는 단순한 물품의 집합이 아닙니다. 이것은 BNI 코리아가 신규 멤버 한 분 한 분의 성공적인 비즈니스 여정을 위해 제공하는 체계적인 지원 시스템의 시작이자, 당신의 의지와 약속을 담는 그릇입니다.
            </motion.p>
            <motion.div variants={fadeInUp} className="mb-8">
              <blockquote className="text-2xl md:text-3xl font-normal italic mb-4">
                "Changing the Way the World Does Business™"
              </blockquote>
              <p className="text-lg opacity-90">세상의 비즈니스 방법을 바꿉니다</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Button
                size="lg"
                className="bg-white text-bni-red hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-normal shadow-xl"
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
