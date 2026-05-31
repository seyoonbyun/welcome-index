import { motion, AnimatePresence } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "wouter";
import { Menu, X, Briefcase, LayoutGrid, BookOpen, Sparkles, QrCode } from "lucide-react";

const navItems = [
  { label: "오거나이저", labelEn: "Organizer", href: "#organizer", icon: Briefcase },
  { label: "주요 특징", labelEn: "Key Features", href: "#usage", icon: LayoutGrid },
  { label: "콘텐츠", labelEn: "Contents", href: "#content", icon: BookOpen },
  { label: "핵심툴", labelEn: "Essential Tools", href: "#brand", icon: Sparkles },
];

export default function WelcomePackHeader({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      style={{ height: "80px", padding: "0" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <motion.div
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className="text-xl md:text-2xl font-black text-gray-900 tracking-wider"
                style={{
                  fontFamily: 'Inter, "Open Sans", sans-serif',
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "rgb(23, 23, 23)",
                }}
              >
                BNI KOREA
              </span>
            </motion.div>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group relative inline-flex items-center justify-center text-base font-medium transition-colors text-gray-700 hover:text-bni-red cursor-pointer"
                  style={{
                    fontFamily: 'Inter, "Open Sans", sans-serif',
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  <span className="whitespace-nowrap transition-opacity duration-200 group-hover:opacity-0">
                    {item.label}
                  </span>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {item.labelEn}
                  </span>
                </a>
              </motion.div>
            ))}

            <Link href="/onboarding">
              <span
                className="group relative inline-flex items-center justify-center text-base font-medium text-bni-red cursor-pointer"
                style={{
                  fontFamily: 'Inter, "Open Sans", sans-serif',
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                <span className="flex items-center gap-1.5 whitespace-nowrap transition-opacity duration-200 group-hover:opacity-0">
                  온보딩 <QrCode className="w-4 h-4" />
                </span>
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  Onboarding <QrCode className="w-4 h-4" />
                </span>
              </span>
            </Link>
          </nav>

          {/* 모바일 햄버거 버튼 */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-gray-800"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 — 가로 아이콘 바 */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container mx-auto px-2 py-3 flex items-stretch justify-around">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="flex flex-1 flex-col items-center gap-1.5 py-1 text-gray-700 hover:text-bni-red cursor-pointer"
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-[11px] leading-tight text-center">{item.label}</span>
                </a>
              ))}
              <div className="flex flex-1 justify-center">
                <Link href="/onboarding">
                  <span
                    className="flex flex-col items-center gap-1.5 py-1 text-bni-red cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    <QrCode className="w-6 h-6" />
                    <span className="text-[11px] leading-tight text-center">온보딩</span>
                  </span>
                </Link>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
