import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--space-navy) 0%, var(--deep-navy) 100%)' }}>
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--soft-cyan) 0%, transparent 70%)' }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ top: '10%', left: '20%' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--lavender) 0%, transparent 70%)' }}
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ bottom: '10%', right: '20%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ border: '2px solid rgba(255, 255, 255, 0.1)' }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1769673310921-8facf846b441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBjaGlsZCUyMHBsYXlpbmclMjB0b2dldGhlciUyMGhhcHB5fGVufDF8fHx8MTc3MTA5NDM3Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Parent and child bonding together"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Right Column - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'var(--cyan-glow)', border: '1px solid var(--soft-cyan)' }}>
              <Sparkles className="w-4 h-4" style={{ color: 'var(--soft-cyan)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--soft-cyan)' }}>Start Your Journey Today</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight" style={{ fontWeight: 800 }}>
              Ready to Experience Smarter Parenting?
            </h2>

            <p className="text-lg mb-8 leading-relaxed opacity-90" style={{ color: 'var(--lavender-light)' }}>
              Join hundreds of thousands of parents who are already using AI to simplify their parenting journey. Download Pixy today and get your first week of premium features free.
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-10">
              {[
                'AI-powered sleep predictions from day one',
                'Unlimited routine logging and tracking',
                'Personalized bedtime stories for your child',
                'Secure, private, and always improving',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--soft-cyan)' }}>
                    <ArrowRight className="w-4 h-4" style={{ color: 'var(--space-navy)' }} />
                  </div>
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.pixykid.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, var(--soft-cyan) 0%, #3b82f6 100%)',
                  color: 'var(--space-navy)',
                  fontWeight: 700,
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(103, 232, 249, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Download on Google Play
              </motion.a>

              <motion.a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  fontWeight: 700,
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{ 
                  scale: 1.05, 
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'var(--soft-cyan)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                Download on App Store
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
