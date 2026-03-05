import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/85212345678"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#128C7E] transition-colors flex items-center justify-center group"
      animate={{ y: [0, -10, 0] }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      aria-label="WhatsApp 聯絡我們"
    >
      <MessageCircle className="w-8 h-8" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-text-primary text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        需要幫忙？聯絡我們
        {/* Arrow */}
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-text-primary"></span>
      </span>
    </motion.a>
  );
}
