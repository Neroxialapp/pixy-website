import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Mother of 2',
    rating: 5,
    text: 'Pixy predicted my daughter\'s nap time to the minute! The AI sleep predictions have been a total game-changer for our family.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
  {
    name: 'Michael Chen',
    role: 'First-time Dad',
    rating: 5,
    text: 'The bedtime stories feature is magical. My son looks forward to his personalized tales every night. Worth every penny!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Mom of Twins',
    rating: 5,
    text: 'Managing two babies was overwhelming until Pixy. The automated logging saves me hours every week. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--space-navy)', fontWeight: 800 }}>
            Loved by Parents Everywhere
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto" style={{ color: 'var(--deep-navy)' }}>
            Join thousands of families who trust Pixy to make parenting smarter and more joyful.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative p-8 rounded-3xl"
              style={{ 
                background: 'white',
                border: '2px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 8px 30px rgba(103, 232, 249, 0.2)' }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 mb-4 opacity-20" style={{ color: 'var(--soft-cyan)' }} />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'var(--soft-cyan)' }} />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--deep-navy)' }}>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden" style={{ border: '2px solid var(--lavender)' }}>
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--space-navy)' }}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm opacity-70" style={{ color: 'var(--deep-navy)' }}>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid md:grid-cols-4 gap-8 mt-16 pt-16"
          style={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--soft-cyan)', fontWeight: 800 }}>
              500K+
            </div>
            <div className="text-sm opacity-70" style={{ color: 'var(--deep-navy)' }}>
              Active Families
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--lavender)', fontWeight: 800 }}>
              4.9/5
            </div>
            <div className="text-sm opacity-70" style={{ color: 'var(--deep-navy)' }}>
              App Store Rating
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--soft-cyan)', fontWeight: 800 }}>
              150+
            </div>
            <div className="text-sm opacity-70" style={{ color: 'var(--deep-navy)' }}>
              Countries
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--lavender)', fontWeight: 800 }}>
              24/7
            </div>
            <div className="text-sm opacity-70" style={{ color: 'var(--deep-navy)' }}>
              Support Available
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
