import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import SectionWrapper from '@/components/SectionWrapper'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import Footer from '@/components/Footer'
import { Trophy, Headphones, Package, ArrowUpRight, Lightbulb, Users, BarChart3, Plus, Play, CheckCircle2, TrendingUp, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Premium Corporate Solutions | Enterprise Services',
  description: 'Transform your business with innovative enterprise solutions designed for modern companies. 500+ clients trust our expertise.',
  openGraph: {
    title: 'Premium Corporate Solutions',
    description: 'Transform your business with innovative enterprise solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Corporate Solutions',
    description: 'Transform your business with innovative enterprise solutions',
  },
}

export default function Home() {
  const services = [
    {
      iconName: 'Zap',
      title: 'Digital Transformation',
      description:
        'Modernize your operations with cutting-edge technology and streamlined processes to enhance efficiency.',
    },
    {
      iconName: 'BarChart3',
      title: 'Business Analytics',
      description:
        'Gain actionable insights from your data to make informed decisions and drive strategic growth.',
    },
    {
      iconName: 'Users',
      title: 'Team Collaboration',
      description:
        'Foster innovation with integrated tools that bring your teams together, regardless of location.',
    },
    {
      iconName: 'Shield',
      title: 'Enterprise Security',
      description:
        'Protect your business with advanced security protocols and compliance frameworks.',
    },
    {
      iconName: 'Lightbulb',
      title: 'Strategic Consulting',
      description:
        'Partner with our experts to develop customized strategies aligned with your business goals.',
    },
    {
      iconName: 'TrendingUp',
      title: 'Growth Acceleration',
      description:
        'Scale your business efficiently with proven methodologies and industry best practices.',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Tech Innovations Inc.',
      content:
        'The transformation they delivered exceeded our expectations. Their team understood our vision perfectly.',
      rating: 5,
    },
    {
      name: 'James Chen',
      company: 'Global Finance Corp.',
      content:
        'Professional, reliable, and results-driven. They became an integral part of our growth strategy.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      company: 'Enterprise Solutions Ltd.',
      content:
        'Outstanding support and innovative solutions. Highly recommend for any enterprise looking to scale.',
      rating: 5,
    },
  ]

  const timeline = [
    {
      year: '2010',
      title: 'Founded',
      description: 'Starting our journey with a vision to transform enterprises',
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanding across 25 countries with dedicated teams',
    },
    {
      year: '2018',
      title: 'Industry Recognition',
      description: 'Awarded Best Enterprise Solutions Provider',
    },
    {
      year: '2024',
      title: 'Industry Leading',
      description: 'Serving 500+ clients with 99% satisfaction rate',
    },
  ]

  const faqItems = [
    {
      question: 'How do you ensure data security?',
      answer:
        'We implement industry-leading encryption, multi-factor authentication, and regular security audits to ensure your data remains protected.',
    },
    {
      question: 'What is your implementation timeline?',
      answer:
        'Implementation timelines vary based on your specific needs. Typically, projects are completed within 3-6 months.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer:
        'Yes, we provide comprehensive 24/7 support, regular updates, and continuous optimization for all our clients.',
    },
    {
      question: 'Can you customize solutions for our business?',
      answer:
        'Absolutely. All our solutions are customizable to meet your unique business requirements and objectives.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Company Overview */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6">
          {/* Card 1 */}
          <div className="group bg-card hover:bg-primary transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 rounded-[2rem] p-8 lg:p-10 border border-border cursor-pointer">
            <Trophy className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-8 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-4">Award-Winning Expertise</h3>
            <p className="text-muted-foreground group-hover:text-gray-100 transition-colors duration-500 ease-out leading-relaxed">
              Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.
            </p>
          </div>

          {/* Text Block */}
          <div className="flex flex-col justify-center p-4 lg:p-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-dashed border-primary/30 text-primary font-bold text-xs tracking-[0.2em] uppercase mb-6 self-start">
              <Package className="w-4 h-4" />
              Choose the best
            </div>
            <h2 className="text-4xl lg:text-5xl leading-[1.1] font-bold text-foreground mb-8">
              Solutions Built for<br />Business.
            </h2>
            <button className="self-start inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
              Learn More
              <span className="bg-primary-foreground/20 rounded-full p-1">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="group bg-card hover:bg-primary transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 rounded-[2rem] p-8 lg:p-10 border border-border cursor-pointer">
            <Users className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-8 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-4">Expert Team</h3>
            <p className="text-muted-foreground group-hover:text-gray-100 transition-colors duration-500 ease-out leading-relaxed">
              Our team is always available to address your concerns, providing quick and solution to keep you competitive in marketplace.
            </p>
          </div>

          {/* Card 4 */}
          <div className="group bg-card hover:bg-primary transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 rounded-[2rem] p-8 lg:p-10 border border-border cursor-pointer">
            <Headphones className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-8 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-4">Dedicated Support</h3>
            <p className="text-muted-foreground group-hover:text-gray-100 transition-colors duration-500 ease-out leading-relaxed">
              Our team is always available to address your concerns, providing quick and effective solution to keep your business.
            </p>
          </div>

          {/* Card 5 */}
          <div className="group bg-card hover:bg-primary transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 rounded-[2rem] p-8 lg:p-10 border border-border cursor-pointer">
            <Lightbulb className="w-12 h-12 text-primary group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-8 stroke-[1.5]" />
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground transition-colors duration-500 ease-out mb-4">Innovative Solutions</h3>
            <p className="text-muted-foreground group-hover:text-gray-100 transition-colors duration-500 ease-out leading-relaxed">
              We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.
            </p>
          </div>

          {/* Card 6 (Image) */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[320px] flex flex-col justify-between p-8 lg:p-10 bg-foreground group">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Business Growth"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
            </div>
            <div className="relative z-10 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <BarChart3 className="w-7 h-7 text-primary-foreground stroke-[1.5]" />
            </div>
            <div className="relative z-10 mt-auto">
              <p className="text-primary-foreground/80 font-medium mb-1">Faster Growth</p>
              <h3 className="text-6xl font-bold text-primary-foreground tracking-tight">8.5X</h3>
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* About Company */}
      <SectionWrapper className="bg-background pt-12 pb-24">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Top Left: Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-md shadow-sm border border-border uppercase tracking-widest text-[0.7rem] font-bold text-foreground self-start">
              <Package className="w-4 h-4 text-primary" />
              About our company
            </div> */}

            {/* Bottom Left: Image Block */}
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/4.5] bg-foreground group shadow-xl">
              <img
                src="/corporate_leader.png"
                alt="Company Leadership"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-foreground/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex items-center -space-x-3 mb-4">
                  {['photo-1534528741775-53994a69daeb', 'photo-1506794778202-cad84cf45f1d', 'photo-1494790108377-be9c29b29330'].map((id, i) => (
                    <img key={i} src={`https://images.unsplash.com/${id}?q=80&w=100&auto=format&fit=crop`} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-[3px] border-[#223938] object-cover" alt="Customer avatar" />
                  ))}
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground border-[3px] border-[#223938] z-10 relative">
                    <Plus className="w-4 h-4 lg:w-5 lg:h-5 stroke-[3]" />
                  </div>
                </div>
                <p className="text-white font-bold text-lg lg:text-xl leading-snug">We have 100+ happy<br />customer.</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Top Right: Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-foreground leading-[1.55] tracking-tight">
              Driven by Purpose, and Fueled by a Relentless Pursuit of Results and Client Real Success.
            </h2>

            {/* Middle Right: Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
              <div className="bg-card rounded-3xl p-6 lg:p-8 border border-border shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-primary mb-5 stroke-[1.5]" />
                <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight">20M</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Reach Worldwide empower dreams everywhere.</p>
              </div>
              <div className="bg-card rounded-3xl p-6 lg:p-8 border border-border shadow-sm hover:-translate-y-1 transition-transform duration-300">
                <CheckCircle2 className="w-8 h-8 text-primary mb-5 stroke-[1.5]" />
                <h3 className="text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight">8.5X</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Faster Growth starts smart solutions today.</p>
              </div>
            </div>

            {/* Bottom Right: Text & Buttons */}
            <div className="mt-2">
              <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer Experience Solutions are crafted to help you transform every interaction.
              </p>

              <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 lg:px-7 rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
                  Know more us
                  <span className="bg-primary-foreground/20 rounded-full p-1 ml-1">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>

                <button className="group inline-flex items-center gap-2 border-2 border-primary/20 text-foreground px-6 py-3 lg:py-3.5 lg:px-7 rounded-full font-semibold hover:bg-primary/5 hover:border-primary/40 transition-all">
                  Contact Us
                  <span className="bg-primary/10 text-primary rounded-full p-1 ml-1 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
      {/* Services */}
      <SectionWrapper
        title="Our Services"
        subtitle="Comprehensive solutions designed for modern enterprises"
        className="bg-background"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              iconName={service.iconName}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Business Process Timeline */}
      <SectionWrapper
        title="Company Timeline"
        subtitle="Our journey of innovation and growth"
        className="bg-secondary"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative p-6 bg-card rounded-lg border border-border"
            >
              <div className="text-accent font-bold text-2xl mb-2">
                {item.year}
              </div>
              <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper
        title="Client Testimonials"
        subtitle="What leading enterprises say about us"
        className="bg-background"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              company={testimonial.company}
              content={testimonial.content}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions"
        className="bg-secondary"
        centered={true}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <details
              key={index}
              className="group p-6 bg-card rounded-lg border border-border cursor-pointer hover:border-accent transition-colors"
            >
              <summary className="flex items-center justify-between font-semibold text-primary cursor-pointer">
                {item.question}
                <span className="text-accent group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-primary text-primary-foreground text-center py-24">
        <h2 className="text-5xl font-bold mb-6">Ready to Transform?</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Join leading enterprises that have already transformed their business
          with our solutions.
        </p>
        <button className="px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors inline-block">
          Get Started Today
        </button>
      </SectionWrapper>

      <Footer />
    </main>
  )
}
