export interface ContactChannel {
  id: string
  name: string
  nameEn: string
  nameEs: string
  url: string
  icon: 'whatsapp' | 'email' | 'instagram'
  description: string
  descriptionEn: string
  descriptionEs: string
}

export interface ContactInfo {
  channels: ContactChannel[]
  hours: {
    weekdays: string
    weekdaysEn: string
    weekdaysEs: string
    timeStart: string
    timeEnd: string
  }
  location: {
    type: string
    typeEn: string
    typeEs: string
    description: string
    descriptionEn: string
    descriptionEs: string
  }
}

export const contactData: ContactInfo = {
  channels: [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      nameEn: 'WhatsApp',
      nameEs: 'WhatsApp',
      url: 'https://wa.me/5521972592555',
      icon: 'whatsapp',
      description: 'Resposta rápida e direta',
      descriptionEn: 'Quick and direct response',
      descriptionEs: 'Respuesta rápida y directa'
    },
    {
      id: 'email',
      name: 'E-mail',
      nameEn: 'Email',
      nameEs: 'Correo',
      url: 'mailto:vatesvesperion@proton.me',
      icon: 'email',
      description: 'vatesvesperion@proton.me',
      descriptionEn: 'vatesvesperion@proton.me',
      descriptionEs: 'vatesvesperion@proton.me'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      nameEn: 'Instagram',
      nameEs: 'Instagram',
      url: 'https://instagram.com/vatesvesperion',
      icon: 'instagram',
      description: '@vatesvesperion',
      descriptionEn: '@vatesvesperion',
      descriptionEs: '@vatesvesperion'
    }
  ],
  hours: {
    weekdays: 'Segunda a Sexta',
    weekdaysEn: 'Monday to Friday',
    weekdaysEs: 'Lunes a Viernes',
    timeStart: '13:00',
    timeEnd: '23:59'
  },
  location: {
    type: 'Atendimento 100% Online',
    typeEn: '100% Online Service',
    typeEs: 'Servicio 100% en Línea',
    description: 'Atendimento 100% Online',
    descriptionEn: '100% Online Service',
    descriptionEs: 'Servicio 100% en Línea'
  }
}
