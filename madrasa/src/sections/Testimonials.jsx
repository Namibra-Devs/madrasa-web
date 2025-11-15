import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aisha Rahman',
      role: 'Quran Student',
      image: '👩‍🎓',
      content: 'Digital Madrasah made it possible for me to complete my Hifz while balancing university studies. The flexible schedule and qualified teachers are amazing!',
      rating: 5
    },
    {
      name: 'Mohammed Ali',
      role: 'Parent',
      image: '👨‍👧‍👦',
      content: 'My children love their Arabic classes! The interactive lessons and patient teachers have made learning enjoyable for them.',
      rating: 5
    },
    {
      name: 'Fatima Khan',
      role: 'Islamic Studies Student',
      image: '👩‍💼',
      content: 'The depth of knowledge and modern teaching approach is incredible. I\'ve grown spiritually and academically through this platform.',
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-islamic-green to-islamic-green/90 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-islamic-gold">Students</span> Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of satisfied students who have transformed their Islamic learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-islamic-gold mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-islamic-gold fill-current" />
                ))}
              </div>
              
              <p className="text-white/90 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-white/70 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials