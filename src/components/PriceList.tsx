import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const pricing = [
  {
    service: '住宅地毯清洗',
    price: '$3',
    unit: '平方呎',
    features: ['基本去污', '高溫蒸氣殺菌', '環保清潔劑', '最少消費 $800']
  },
  {
    service: '辦公室地毯清洗',
    price: '$2.5',
    unit: '平方呎',
    features: ['大面積深層清潔', '除臭處理', '非辦公時間服務', '最少消費 $1500'],
    popular: true
  },
  {
    service: '深層去污處理',
    price: '+$1',
    unit: '平方呎',
    features: ['頑固污漬處理', '寵物尿漬/異味', '紅酒/咖啡漬', '針對性藥水']
  }
];

export default function PriceList() {
  return (
    <section id="price" className="py-20 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">透明價目，安心選擇</h2>
          <p className="text-lg text-text-secondary">我們提供清晰的收費標準，絕無隱藏收費。實際報價視乎面積、污漬及材質而定。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-card rounded-2xl p-8 shadow-sm border ${plan.popular ? 'border-primary shadow-md relative' : 'border-border'} hover:shadow-md transition-all hover:-translate-y-1 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">
                  最受歡迎
                </div>
              )}
              <h3 className="text-xl font-bold text-text-primary mb-2">{plan.service}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-text-secondary ml-2">/ {plan.unit}起</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-text-secondary">
                    <Check className="w-5 h-5 text-accent mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/85212345678"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-full text-center font-medium transition-colors ${plan.popular ? 'bg-primary hover:bg-primary/90 text-white' : 'bg-bg hover:bg-border text-text-primary'}`}
              >
                獲取報價
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-text-secondary mb-4">發送地毯相片，即時初步報價</p>
          <a 
            href="https://wa.me/85212345678?text=你好，我想查詢地毯清洗報價。"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-full text-base font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            WhatsApp 傳送相片
          </a>
        </div>
      </div>
    </section>
  );
}
