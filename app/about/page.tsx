import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SectionWrapper from '@/components/SectionWrapper'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Award, Users, Globe, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Premium | Our Story & Values',
  description: 'Learn about Premium Solutions - a leading enterprise solutions provider with 15+ years of experience transforming businesses globally.',
  openGraph: {
    title: 'About Premium Solutions',
    description: 'Our story, mission, and commitment to excellence',
    type: 'website',
  },
}

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description:
        'To empower enterprises with innovative solutions that drive sustainable growth and competitive advantage in the digital economy.',
    },
    {
      icon: Globe,
      title: 'Vision',
      description:
        'To be the most trusted partner for digital transformation, recognized for excellence and impact across industries.',
    },
    {
      icon: Users,
      title: 'Our Commitment',
      description:
        'We are committed to delivering exceptional value, building lasting partnerships, and exceeding expectations every day.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Quality is non-negotiable. We maintain the highest standards in everything we do, from strategy to execution.',
    },
  ]

  const coreValues = [
    { value: 'Innovation', description: 'Constantly pushing boundaries' },
    { value: 'Integrity', description: 'Always honest and transparent' },
    { value: 'Excellence', description: 'Delivering superior quality' },
    { value: 'Partnership', description: 'Growing together with clients' },
  ]

  const leadership = [
    {
      name: 'Michael Thompson',
      role: 'Chief Executive Officer',
      bio: '25+ years in enterprise solutions and digital transformation leadership',
    },
    {
      name: 'Jennifer Wu',
      role: 'Chief Technology Officer',
      bio: '20+ years driving innovation in cloud and enterprise architecture',
    },
    {
      name: 'David Martinez',
      role: 'Chief Commercial Officer',
      bio: '18+ years building global enterprise relationships and partnerships',
    },
    {
      name: 'Lisa Anderson',
      role: 'Chief Operations Officer',
      bio: '22+ years optimizing operations and driving organizational excellence',
    },
  ]

  const achievements = [
    { year: '2010', title: 'Founded Premium Solutions' },
    { year: '2012', title: 'Opened first international office' },
    { year: '2015', title: 'Reached 100 enterprise clients' },
    { year: '2017', title: 'ISO 27001 Certification' },
    { year: '2019', title: 'Named Top Enterprise Solutions Provider' },
    { year: '2021', title: 'Expanded to 25+ countries' },
    { year: '2023', title: 'Surpassed 500 clients milestone' },
    { year: '2024', title: '99% Client Satisfaction Rate' },
  ]

  const certifications = [
    'ISO 27001 - Information Security',
    'SOC 2 Type II Compliance',
    'GDPR Compliant',
    'ISO 9001 - Quality Management',
    'HIPAA Compliant',
    'PCI DSS Certified',
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* About Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded in 2010, Premium Solutions has grown to become a trusted
            partner for enterprise transformation. With a passion for innovation
            and a commitment to excellence, we help businesses unlock their full
            potential through strategic technology solutions.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <SectionWrapper
        title="Who We Are"
        subtitle="Our guiding principles and purpose"
        className="bg-background"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-6 bg-secondary rounded-lg text-center hover:border-accent border border-border transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <Icon size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper
        title="Core Values"
        subtitle="The principles that guide us"
        className="bg-secondary"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-card rounded-lg text-center border border-border"
            >
              <p className="text-2xl font-bold text-accent mb-2">
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Leadership Team */}
      <SectionWrapper
        title="Leadership Team"
        subtitle="Experienced leaders driving our vision"
        className="bg-background"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border text-center hover:border-accent transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold text-primary mb-1">{leader.name}</h3>
              <p className="text-sm text-accent font-medium mb-3">{leader.role}</p>
              <p className="text-xs text-muted-foreground">{leader.bio}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper
        title="Our Journey"
        subtitle="Key milestones in our history"
        className="bg-secondary"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border border-border text-center"
            >
              <p className="text-2xl font-bold text-accent mb-2">{item.year}</p>
              <p className="text-sm font-medium text-primary">{item.title}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Certifications */}
      <SectionWrapper
        title="Certifications & Compliance"
        subtitle="Maintaining the highest standards"
        className="bg-background"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-secondary rounded-lg border border-border"
            >
              <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0"></div>
              <p className="font-medium text-primary">{cert}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Company Stats */}
      <SectionWrapper className="bg-primary text-primary-foreground text-center py-24">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: '500+', label: 'Enterprise Clients' },
            { number: '25+', label: 'Countries' },
            { number: '99%', label: 'Satisfaction' },
            { number: '15+', label: 'Years Experience' },
          ].map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold mb-2">{stat.number}</p>
              <p className="text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="bg-secondary text-center py-16">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Let&apos;s Build the Future Together
        </h2>
        <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Start Your Transformation
        </button>
      </SectionWrapper>

      <Footer />
    </main>
  )
}
