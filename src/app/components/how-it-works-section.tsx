import { motion } from 'motion/react';
import { Upload, Brain, Sparkles, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Log Your Child\'s Activities',
    description: 'Simply track feedings, diaper changes, sleep, and milestones with our intuitive interface. Or let the AI auto-detect patterns.',
    color: 'var(--soft-cyan)',
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI Analyzes Patterns',
    description: 'Our machine learning algorithms study your child\'s unique rhythms, identifying trends and predicting needs before they arise.',
    color: 'var(--lavender)',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'Get Smart Predictions',
    description: 'Receive timely notifications for optimal nap times, feeding schedules, and personalized bedtime stories.',
    color: 'var(--soft-cyan)',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Watch Your Child Thrive',
    description: 'Track growth, celebrate milestones, and enjoy the confidence that comes from AI-powered insights into your child\'s wellbeing.',
    color: 'var(--lavender)',
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'var(--space-navy)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--soft-cyan) 0%, transparent 70%)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ top: '20%', right: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--lavender) 0%, transparent 70%)' }}
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          initial={{ bottom: '20%', left: '10%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ background: 'var(--cyan-glow)', border: '1px solid var(--soft-cyan)' }}>
            <Brain className="w-4 h-4" style={{ color: 'var(--soft-cyan)' }} />
            <span className="text-sm font-semibold" style={{ color: 'var(--soft-cyan)' }}>AI-Powered Insights</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white" style={{ fontWeight: 800 }}>
            How It Works
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto" style={{ color: 'var(--lavender-light)' }}>
            Pixy uses cutting-edge machine learning to transform everyday data into actionable insights for smarter parenting.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Connection line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 opacity-20" style={{ background: 'linear-gradient(90deg, ' + step.color + ' 0%, transparent 100%)' }} />
              )}

              {/* Card */}
              <div className="relative p-6 rounded-2xl h-full" style={{ 
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
              }}>
                {/* Step number */}
                <div className="text-6xl font-bold mb-4 opacity-20" style={{ color: step.color, fontWeight: 800 }}>
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: step.color, opacity: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon className="w-6 h-6" style={{ color: 'var(--space-navy)' }} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-white" style={{ fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80" style={{ color: 'var(--lavender-light)' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Example */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden" style={{ border: '2px solid rgba(255, 255, 255, 0.1)' }}>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1617560611911-85e1055544cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJlbnQlMjBzbWFydHBob25lJTIwYXBwJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzEwOTM1NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Parent using smartphone app"
              className="w-full h-auto"
            />
            {/* Overlay badge */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-md" style={{ background: 'rgba(10, 14, 39, 0.8)', border: '1px solid var(--soft-cyan)' }}>
              <span className="text-sm font-semibold" style={{ color: 'var(--soft-cyan)' }}>Real-time AI Analysis</span>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-white" style={{ fontWeight: 700 }}>
              Built on Trust & Security
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--lavender-glow)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--lavender)' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">No Data Selling</h4>
                  <p className="text-sm opacity-80" style={{ color: 'var(--lavender-light)' }}>
                    We never sell your personal information. Your privacy is our priority, always.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--cyan-glow)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--soft-cyan)' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">Transparent AI</h4>
                  <p className="text-sm opacity-80" style={{ color: 'var(--lavender-light)' }}>
                    Understand exactly how our AI makes predictions with clear, explainable insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'var(--lavender-glow)' }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--lavender)' }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-white">Secure Cloud Backup</h4>
                  <p className="text-sm opacity-80" style={{ color: 'var(--lavender-light)' }}>
                    Your child's milestones and memories are automatically backed up and protected with bank-level security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}