import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-6 text-white">窩心清潔</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              專業地毯清洗服務，還原潔淨舒適空間。致力為住宅及商業客戶提供可靠、透明、有效的深層清潔方案。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">快速連結</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">首頁</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">服務特色</a></li>
              <li><a href="#procedure" className="text-gray-400 hover:text-white transition-colors">服務流程</a></li>
              <li><a href="#price" className="text-gray-400 hover:text-white transition-colors">價目表</a></li>
              <li><a href="#locations" className="text-gray-400 hover:text-white transition-colors">服務據點</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">常見問題</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">關於我們</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">我們的服務</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">住宅地毯清洗</li>
              <li className="text-gray-400">辦公室地毯清洗</li>
              <li className="text-gray-400">深層去污處理</li>
              <li className="text-gray-400">除臭殺菌服務</li>
              <li className="text-gray-400">寵物家庭專屬清潔</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">聯絡資訊</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-400">+852 1234 5678 (WhatsApp)</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-400">info@warmcleaning.com.hk</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-400">香港中環德輔道中123號</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">服務地區：</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">香港</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">廣州</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300">深圳</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} 窩心清潔 Warm Cleaning. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">私隱政策</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">服務條款</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
