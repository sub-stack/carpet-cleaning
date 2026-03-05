import { motion } from 'motion/react';
import { MessageCircle, FileText, Search, Droplets, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'WhatsApp 查詢',
    desc: '隨時聯絡我們'
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: '報價及預約',
    desc: '透明清晰收費'
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: '到場評估',
    desc: '了解污漬情況'
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: '專業清洗',
    desc: '深層除污殺菌'
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: '完成檢查',
    desc: '確保滿意效果'
  }
];

export default function Procedure() {
  return (
    <section id="procedure" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">簡單 5 步服務流程</h2>
          <p className="text-lg text-text-secondary">從查詢到完成，我們為您提供無縫的專業體驗。</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-4 shadow-md border-4 border-white relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-1">{step.title}</h3>
                <p className="text-sm text-text-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/85212345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-base font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            立即開始第一步
          </a>
        </div>
      </div>
    </section>
  );
}
