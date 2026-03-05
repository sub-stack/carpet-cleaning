import { motion } from 'motion/react';
import { ShieldCheck, AlertCircle, Clock, CreditCard } from 'lucide-react';

const terms = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
    title: '服務保證',
    content: '我們承諾提供專業的清潔服務。如客戶對清潔效果有任何不滿，請於完成後 24 小時內聯絡我們，我們將安排跟進。'
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-primary" />,
    title: '責任限制',
    content: '對於因地毯本身材質老化、纖維受損或已滲透之永久性污漬，我們無法保證 100% 清除。清洗前師傅會進行專業評估。'
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: '預約與取消',
    content: '如需更改或取消預約，請至少提前 24 小時通知。如當天取消，可能需收取行政費用。'
  },
  {
    icon: <CreditCard className="w-6 h-6 text-primary" />,
    title: '付款方式',
    content: '我們接受現金、轉數快 (FPS)、PayMe 或銀行轉帳。商業客戶可根據合約條款進行結算。'
  }
];

export default function Terms() {
  return (
    <section id="terms" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">服務條款與細則</h2>
          <p className="text-lg text-text-secondary">為了保障雙方權益，請在預約前細閱以下條款。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {terms.map((term, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex p-6 bg-bg rounded-2xl border border-border"
            >
              <div className="mr-4 shrink-0">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  {term.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{term.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{term.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10 max-w-4xl mx-auto">
          <p className="text-xs text-text-secondary text-center">
            * 以上條款僅供參考，最終解釋權歸 窩心清潔 Warm Cleaning 所有。如有任何爭議，本公司保留最終決定權。
          </p>
        </div>
      </div>
    </section>
  );
}
