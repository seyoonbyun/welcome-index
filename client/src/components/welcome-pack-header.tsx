import { motion } from "framer-motion";
import { Link } from "wouter";

const navItems = [
  { label: "오거나이저", href: "#organizer" },
  { label: "활용", href: "#usage" },
  { label: "콘텐츠", href: "#content" },
  { label: "브랜드 아이템", href: "#brand" },
];

export default function WelcomePackHeader() {
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

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-sm font-medium transition-colors text-gray-700 hover:text-bni-red cursor-pointer"
                  style={{
                    fontFamily: 'Inter, "Open Sans", sans-serif',
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}

            <Link href="/onboarding">
              <span
                className="text-sm font-medium text-bni-red hover:underline cursor-pointer"
                style={{
                  fontFamily: 'Inter, "Open Sans", sans-serif',
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                온보딩 →
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
