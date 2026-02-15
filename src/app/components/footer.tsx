import { motion } from 'motion/react';
import { Mail, Shield, FileText, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden" style={{ background: 'var(--space-navy)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 text-white" style={{ fontWeight: 800 }}>
                Pixy
              </h3>
              <p className="mb-6 leading-relaxed opacity-80" style={{ color: 'var(--lavender-light)' }}>
                AI-powered parenting companion designed to make tracking your child's routine effortless and intelligent. 
                Experience the future of childcare with smart predictions and personalized insights.
              </p>
              <div className="flex items-center gap-2 text-sm opacity-70" style={{ color: 'var(--lavender-light)' }}>
                <Heart className="w-4 h-4" style={{ color: 'var(--soft-cyan)' }} />
                <span>Made with care for parents everywhere</span>
              </div>
            </motion.div>
          </div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-white" style={{ fontWeight: 700 }}>
              Legal
            </h4>
           <ul className="space-y-3">
              <li>
                <a 
                  href="/privacy"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  <Shield className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a 
                  href="/terms"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  <FileText className="w-4 h-4" />
                  <span>Terms of Service</span>
                </a>
              </li>
          </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-white" style={{ fontWeight: 700 }}>
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:support@pixykid.com"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  <Mail className="w-4 h-4" />
                  <span>support@pixykid.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Security Badges */}
        <motion.div
          className="py-8 mb-8"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: 'var(--soft-cyan)' }} />
              <span className="text-sm font-semibold text-white">256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: 'var(--lavender)' }} />
              <span className="text-sm font-semibold text-white">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: 'var(--soft-cyan)' }} />
              <span className="text-sm font-semibold text-white">GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: 'var(--lavender)' }} />
              <span className="text-sm font-semibold text-white">SOC 2 Certified</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-sm opacity-70" style={{ color: 'var(--lavender-light)' }}>
            © {currentYear} Pixy AI. All rights reserved. • Empowering parents with intelligent technology.
          </p>
          <p className="text-xs mt-2 opacity-50" style={{ color: 'var(--lavender-light)' }}>
            Pixy is not a medical device and should not replace professional medical advice.
          </p>
        </motion.div>
      </div>

      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, var(--soft-cyan) 0%, var(--lavender) 50%, var(--soft-cyan) 100%)', opacity: 0.5 }} />
    </footer>
  );
}
