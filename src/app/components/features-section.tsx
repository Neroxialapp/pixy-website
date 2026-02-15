import { motion } from 'motion/react';
import { Brain, Clock, BookOpen, Zap } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'AI Sleep Predictions',
    description: 'Our advanced AI analyzes your child\'s patterns to predict the perfect time for the next nap, helping you stay ahead of fussiness and ensuring optimal rest.',
    gradient: 'linear-gradient(135deg, #67E8F9 0%, #3b82f6 100%)',
    glowColor: 'var(--cyan-glow)',
    borderColor: 'var(--soft-cyan)',
  },
  {
    icon: Zap,
    title: 'Intelligent Routine Logging',
    description: 'Automated tracking for breastfeeding, bottle feeding, diapers, and growth milestones. The AI learns your patterns and makes logging effortless.',
    gradient: 'linear-gradient(135deg, #C4B5FD 0%, #8b5cf6 100%)',
    glowColor: 'var(--lavender-glow)',
    borderColor: 'var(--lavender)',
  },
  {
    icon: BookOpen,
    title: 'AI-Generated Bedtime Stories',
    description: 'Personalized, magical tales created just for your child. Every story is unique, engaging, and designed to create wonderful bedtime memories.',
    gradient: 'linear-gradient(135deg, #67E8F9 0%, #C4B5FD 100%)',
    glowColor: 'rgba(103, 232, 249, 0.2)',
    borderColor: 'var(--soft-cyan)',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(90deg, var(--soft-cyan) 0%, var(--lavender) 100%)', opacity: 0.3 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'var(--cyan-glow)', border: '1px solid var(--soft-cyan)' }}>
            <Brain className="w-4 h-4" style={{ color: 'var(--soft-cyan)' }} />
            <span className="text-sm font-semibold" style={{ color: 'var(--space-navy)' }}>Powered by Advanced AI</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--space-navy)', fontWeight: 800 }}>
            Features That Make Parenting Smarter
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto" style={{ color: 'var(--deep-navy)' }}>
            Cutting-edge artificial intelligence designed to support you through every moment of your parenting journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-3xl transition-all duration-300" style={{ 
                background: 'white',
                border: '2px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}>
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
                  style={{ background: feature.glowColor }}
                />

                {/* Icon */}
                <motion.div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: feature.gradient }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--space-navy)', fontWeight: 700 }}>
                  {feature.title}
                </h3>
                <p className="leading-relaxed opacity-80" style={{ color: 'var(--deep-navy)' }}>
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div 
                  className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10"
                  style={{ background: feature.gradient }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl" style={{ background: 'var(--lavender-glow)', border: '1px solid var(--lavender)' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: 'var(--soft-cyan)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--space-navy)' }}>Bank-Level Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: 'var(--lavender)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--space-navy)' }}>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: 'var(--soft-cyan)' }} />
              <span className="text-sm font-semibold" style={{ color: 'var(--space-navy)' }}>Privacy First</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
