import { motion } from 'motion/react';
import { Shield, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">關於窩心清潔</h2>
          <p className="text-lg text-text-secondary">致力為客戶提供可靠、專業的深層清潔服務。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
              <Shield size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">我們的理念</h3>
            <p className="text-text-secondary leading-relaxed">
              我們相信乾淨的環境能提升生活品質與工作效率。堅持使用環保產品，保護您的健康與地球環境。
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">專業團隊</h3>
            <p className="text-text-secondary leading-relaxed">
              所有技術人員均需通過我們自設訓練教室的嚴格培訓與考核，確保每項服務都達到最高標準。
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary">
              <Award size={32} />
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-4">品質承諾</h3>
            <p className="text-text-secondary leading-relaxed">
              我們重視每一位客戶的評價，提供完善的售後跟進，承諾為您帶來最滿意的清潔體驗。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
