import { motion } from 'motion/react';
import { MessageCircle, Clock, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">需要報價？<br/>即時 WhatsApp 聯絡我們。</h2>
            <p className="text-lg text-white/80 mb-8 max-w-md leading-relaxed">
              無論是住宅深層清潔，還是商業辦公室定期保養，我們都能提供專業的解決方案。
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">營業時間</h4>
                  <p className="text-white/70">星期一至日 09:00 - 18:00<br/><span className="text-sm">(商業客戶可預約非辦公時間)</span></p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">服務範圍</h4>
                  <p className="text-white/70">香港全區、廣州、深圳</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl text-text-primary text-center max-w-md mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">快速查詢</h3>
            <p className="text-text-secondary mb-8">
              點擊下方按鈕，直接與我們的客服對話。發送地毯相片可獲取更準確報價。
            </p>
            <a 
              href="https://wa.me/85212345678?text=你好，我想查詢地毯清洗報價。面積：，地點：，污漬情況："
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              WhatsApp 立即對話
            </a>
            <p className="text-xs text-text-secondary mt-4">
              平均回覆時間：15分鐘內
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
