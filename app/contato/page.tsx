'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MainLayout } from '@/components/main-layout'
import { useLocale } from '@/lib/locale-context'
import { contactData } from '@/lib/contact-data'
import { cn } from '@/lib/utils'
import { 
  Send, 
  MessageCircle, 
  Mail, 
  Instagram,
  MapPin,
  Clock,
  CheckCircle
} from 'lucide-react'

const iconMap = {
  whatsapp: MessageCircle,
  email: Mail,
  instagram: Instagram,
}

const colorMap = {
  whatsapp: '#25D366',
  email: 'currentColor',
  instagram: '#E4405F',
}

export default function ContatoPage() {
  const { t, locale } = useLocale()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const getChannelName = (channel: typeof contactData.channels[0]) => {
    if (locale === 'en') return channel.nameEn
    if (locale === 'es') return channel.nameEs
    return channel.name
  }

  const getChannelDescription = (channel: typeof contactData.channels[0]) => {
    if (locale === 'en') return channel.descriptionEn
    if (locale === 'es') return channel.descriptionEs
    return channel.description
  }

  const getHoursText = () => {
    if (locale === 'en') return contactData.hours.weekdaysEn
    if (locale === 'es') return contactData.hours.weekdaysEs
    return contactData.hours.weekdays
  }

  const getLocationText = () => {
    if (locale === 'en') return contactData.location.typeEn
    if (locale === 'es') return contactData.location.typeEs
    return contactData.location.type
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', phone: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <MainLayout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-linear-to-b from-background-secondary to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {t.contactPage.title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            {t.contactPage.subtitle}
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-8" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
                {t.contactPage.talkToMe}
              </h2>
              
              <div className="space-y-6">
                {contactData.channels.map((channel) => {
                  const Icon = iconMap[channel.icon]
                  const color = colorMap[channel.icon]
                  const bgColor = channel.icon === 'email' ? 'bg-primary/10' : channel.icon === 'whatsapp' ? 'bg-[#25D366]/20' : 'bg-pink-500/20'
                  const hoverBgColor = channel.icon === 'email' ? 'group-hover:bg-primary/20' : channel.icon === 'whatsapp' ? 'group-hover:bg-[#25D366]/30' : 'group-hover:bg-pink-500/30'
                  const textColor = channel.icon === 'email' ? 'text-primary' : channel.icon === 'whatsapp' ? 'text-[#25D366]' : 'text-pink-500'

                  return (
                    <a
                      key={channel.id}
                      href={channel.url}
                      {...(channel.icon !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="flex items-center gap-4 bg-card/30 border border-border/30 rounded-xl p-5 transition-all hover:border-primary/50 hover:bg-card/50 group"
                    >
                      <div className={cn('w-12 h-12 rounded-full flex items-center justify-center transition-colors', bgColor, hoverBgColor)}>
                        <Icon className={cn('w-6 h-6', textColor)} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{getChannelName(channel)}</h3>
                        <p className="text-muted-foreground text-sm">{getChannelDescription(channel)}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Additional Info */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{getHoursText()} ({contactData.hours.timeStart} às {contactData.hours.timeEnd})</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{getLocationText()}</span>
                </div>
              </div>

              {/* Logo */}
                <div className="mt-12">
                <Image
                  src="/Logos/Style-Logo.png"
                  alt="Vates Vesperion"
                  width={250}
                  height={100}
                  className="opacity-60 w-auto h-auto"
                />
                </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card/30 border border-border/30 rounded-2xl p-8">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  {t.contactPage.sendMessage}
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {t.contactPage.messageSent}
                    </h3>
                    <p className="text-muted-foreground">
                      {t.contactPage.thankYou}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t.contactPage.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder={t.contactPage.fullName}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t.contactPage.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder={t.contactPage.emailPlaceholder}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {t.contactPage.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                        placeholder={t.contactPage.phonePlaceholder}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        {t.contactPage.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-border/50 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        placeholder={t.contactPage.messagePlaceholder}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        'w-full bg-gold-gradient text-primary-foreground py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2',
                        isSubmitting 
                          ? 'opacity-70 cursor-not-allowed' 
                          : 'hover:shadow-lg hover:shadow-primary/30'
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          {t.contactPage.sending}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t.contactPage.send}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
