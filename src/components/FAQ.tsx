import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '地毯多久清洗一次？',
    a: '一般建議每 6 至 12 個月進行一次深層清洗。如果是有寵物的家庭或人流較多的辦公室，建議每 3 至 6 個月清洗一次，以保持衛生。'
  },
  {
    q: '清洗需要多久時間？',
    a: '視乎面積而定，一般家庭地毯約需 1 至 3 小時。商業辦公室則視乎實際呎數，我們會在報價時提供準確的時間評估。'
  },
  {
    q: '清潔產品是否安全？會影響寵物或小孩嗎？',
    a: '絕對安全。我們採用環保、無毒的專業清潔劑，對人體、兒童及寵物均無害。清洗後空間會留下清新氣味，不會有刺鼻化學味。'
  },
  {
    q: '地毯清洗後需要多久才會乾？',
    a: '我們使用專業的強力抽水設備，清洗後地毯只會微濕。在保持良好通風或開啟冷氣的情況下，一般 2 至 4 小時內即可完全乾透。'
  },
  {
    q: '所有污漬都能完全清除嗎？',
    a: '我們能清除大部分常見污漬（如咖啡、茶、酒、食物殘渣等）。但如果污漬已經滲透纖維過久並造成染色，可能無法 100% 復原。師傅會在清洗前進行評估並如實告知。'
  },
  {
    q: '辦公室清洗可以安排在週末或夜間嗎？',
    a: '可以的。我們明白商業客戶的需要，提供彈性的服務時間，包括週末、公眾假期及夜間服務，確保不影響貴公司的日常運作。'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">常見問題</h2>
          <p className="text-lg text-text-secondary">為您解答關於地毯清洗的常見疑問。</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-xl overflow-hidden bg-bg/50"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-text-primary pr-8">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-text-secondary leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">還有其他問題？</p>
          <a 
            href="https://wa.me/85212345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold hover:underline inline-flex items-center"
          >
            WhatsApp 聯絡客服解答
          </a>
        </div>
      </div>
    </section>
  );
}
