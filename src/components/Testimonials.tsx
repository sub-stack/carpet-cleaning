import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: '陳先生',
    type: '住宅客戶',
    quote: '清潔效果非常好，客廳的地毯煥然一新，原本的咖啡漬完全消失了。師傅很有禮貌，過程也很專業。',
    rating: 5
  },
  {
    name: '李小姐',
    type: '商業客戶 (辦公室)',
    quote: '我們公司有3000呎地毯，他們安排在週末進行清洗，完全沒有影響我們的日常運作。星期一回來時，空氣都變得清新了。',
    rating: 5
  },
  {
    name: '張太',
    type: '住宅客戶 (寵物家庭)',
    quote: '家裡有兩隻狗，地毯一直有異味。清洗後不僅味道沒了，而且他們用的環保清潔劑讓我對狗狗的安全很放心。',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">客戶真實評價</h2>
          <p className="text-lg text-text-secondary">聽聽我們的客戶怎麼說，您的滿意是我們最大的動力。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-bg rounded-2xl p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-border opacity-50" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-text-primary mb-6 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                  <p className="text-xs text-text-secondary">{testimonial.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
