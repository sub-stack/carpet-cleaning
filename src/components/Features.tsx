import { motion } from 'motion/react';
import { GraduationCap, Leaf, Sparkles } from 'lucide-react';

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 text-primary" />,
    title: '自設訓練教室',
    description: '確保每位技術人員經專業訓練，服務流程一致，品質可靠。',
    points: ['標準化清潔流程', '嚴格品質監控', '專業技術認證']
  },
  {
    icon: <Leaf className="w-8 h-8 text-accent" />,
    title: '重視環保',
    description: '採用環保清潔產品，安全無害，適合家庭及辦公室。',
    points: ['無毒無害配方', '保護兒童及寵物', '減少環境負擔']
  },
  {
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
    title: '設備頂尖',
    description: '使用專業級清潔設備，深層清潔地毯纖維。',
    points: ['工業級吸力', '高溫殺菌去污', '快速抽乾技術']
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">專業服務特色</h2>
          <p className="text-lg text-text-secondary">我們致力提供最高標準的地毯清潔服務，讓您的空間煥然一新。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-bg rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">{feature.description}</p>
              <ul className="space-y-2">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-center text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
