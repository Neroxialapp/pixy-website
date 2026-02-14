import { motion } from 'motion/react';
import { Mail, Shield, FileText, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section class="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
    <div class="container mx-auto px-6 max-w-5xl grid md:grid-cols-2 gap-12">
        
        <div id="privacy" class="scroll-mt-20">
            <h2 class="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
            <p class="text-sm mb-4">Last Updated: February 14, 2026</p>
            <div class="space-y-4 text-sm leading-relaxed">
                <p>Pixy is designed for parents to track their baby's growth. We prioritize the security of your family's data.</p>
                <h3 class="text-white font-semibold">1. Data Controller</h3>
                <p>Managed by Pixy Development Team. Contact: support@pixykid.com</p>
                <h3 class="text-white font-semibold">2. Data We Collect</h3>
                <p>Account info, baby's growth data (name, birth date), logs (sleep, feeding), and usage analytics.</p>
                <h3 class="text-white font-semibold">3. Third-Party Services</h3>
                <p>We use Google Firebase, Google Gemini AI, and RevenueCat for secure infrastructure.</p>
                <h3 class="text-white font-semibold">4. Account Deletion</h3>
                <p>Users can delete all data via 'Settings > Delete Account' within the app.</p>
            </div>
        </div>

        <div id="terms" class="scroll-mt-20 border-t md:border-t-0 md:border-l border-slate-800 pt-8 md:pt-0 md:pl-12">
            <h2 class="text-2xl font-bold text-white mb-4">Terms of Use (EULA)</h2>
            <p class="text-sm mb-4">Last Updated: February 14, 2026</p>
            <div class="space-y-4 text-sm leading-relaxed">
                <div class="p-3 bg-red-900/20 border border-red-900/30 rounded text-red-200">
                    <h3 class="font-bold">MEDICAL DISCLAIMER</h3>
                    <p>PIXY IS NOT A MEDICAL DEVICE. Suggestions are for informational purposes only. Consult a pediatrician for health concerns.</p>
                </div>
                <h3 class="text-white font-semibold">1. Subscriptions</h3>
                <p>Payments are managed via Google Play Store. Subscriptions auto-renew unless cancelled in settings.</p>
                <h3 class="text-white font-semibold">2. AI Generated Content</h3>
                <p>AI stories and recipes are generated for entertainment. Use discretion regarding food allergies.</p>
            </div>
        </div>

    </div>
</section>
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
                  href="#privacy"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  <Shield className="w-4 h-4" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a 
                  href="#terms"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  <FileText className="w-4 h-4" />
                  <span>Terms of Service</span>
                </a>
              </li>
              <li>
                <a 
                  href="#security"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  <Shield className="w-4 h-4" />
                  <span>Data Security</span>
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
              <li>
                <a 
                  href="#help"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a 
                  href="#faq"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--lavender-light)' }}
                >
                  Contact Us
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
