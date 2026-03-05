import { motion } from "motion/react";

export default function Hero() {
  const heroVideoSrc = `${import.meta.env.BASE_URL}video/hero.mp4`;

  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={heroVideoSrc} type="video/mp4" />
        </video>

        {/* Growth Logic: Dark overlay to protect text readability (CAC preservation) */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
            專業地毯清洗｜還原潔淨舒適空間
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 font-medium max-w-2xl mx-auto drop-shadow-md">
            清潔業的先驅創新者
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/85212345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center"
            >
              立即 WhatsApp 查詢
            </a>
            <a
              href="#features"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-medium transition-all w-full sm:w-auto"
            >
              了解更多
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
