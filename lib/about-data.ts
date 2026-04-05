export interface StoryParagraph {
  pt: string
  en: string
  es: string
}

export interface ValueItem {
  id: string
  icon: 'eye' | 'heart' | 'moon' | 'star'
  title: string
  titleEn: string
  titleEs: string
  desc: string
  descEn: string
  descEs: string
}

export interface AboutData {
  story: StoryParagraph[]
  mission: StoryParagraph
  valuesTitle: StoryParagraph
  values: ValueItem[]
}

export const aboutData: AboutData = {
  story: [
    {
      pt: 'Desde jovem, sempre senti uma conexão profunda com o mundo invisível. As cartas chamaram minha atenção antes mesmo de entender seu verdadeiro poder. O que começou como curiosidade se transformou em uma vocação que guia minha vida há mais de uma década.',
      en: 'From a young age, I always felt a deep connection with the invisible world. The cards called my attention even before I understood their true power. What began as curiosity became a calling that has guided my life for over a decade.',
      es: 'Desde joven, siempre sentí una conexión profunda con el mundo invisible. Las cartas llamaron mi atención incluso antes de entender su verdadero poder. Lo que comenzó como curiosidad se convirtió en una vocación que ha guiado mi vida durante más de una década.'
    },
    {
      pt: 'Formado em diferentes tradições oraculares, trabalho com Tarot, Baralho Cigano (Lenormand), Sibilla e Cleromancia. Cada sistema tem sua própria linguagem, e é meu papel traduzir essas mensagens para que você possa compreender os caminhos que se abrem à sua frente.',
      en: 'Trained in different oracle traditions, I work with Tarot, Gypsy Cards (Lenormand), Sibilla, and Cleromancy. Each system has its own language, and my role is to translate these messages so you can understand the paths that open before you.',
      es: 'Capacitado en diferentes tradiciones de oráculos, trabajo con Tarot, Baraja Gitana (Lenormand), Sibilla y Cleromancia. Cada sistema tiene su propio lenguaje, y mi función es traducir estos mensajes para que puedas entender los caminos que se abren ante ti.'
    },
    {
      pt: 'Acredito que os oráculos não determinam o futuro — eles iluminam possibilidades. Você sempre mantém o poder de escolha. Meu trabalho é oferecer clareza para que suas decisões sejam mais conscientes e alinhadas com seu verdadeiro propósito.',
      en: 'I believe that oracles do not determine the future — they illuminate possibilities. You always maintain the power of choice. My work is to offer clarity so that your decisions are more conscious and aligned with your true purpose.',
      es: 'Creo que los oráculos no determinan el futuro, sino que iluminan posibilidades. Siempre mantienes el poder de elección. Mi trabajo es ofrecer claridad para que tus decisiones sean más conscientes y alineadas con tu verdadero propósito.'
    }
  ],
  mission: {
    pt: 'Minha missão é democratizar o acesso aos oráculos, oferecendo consultas de alta qualidade com respeito às tradições ancestrais. Acredito que todos merecem ter acesso a orientação espiritual genuína, independente de onde estejam ou qual seja sua história.',
    en: 'My mission is to democratize access to oracles, providing high-quality consultations with respect for ancestral traditions. I believe everyone deserves access to genuine spiritual guidance, regardless of where they are or what their story is.',
    es: 'Mi misión es democratizar el acceso a los oráculos, ofreciendo consultas de alta calidad con respeto por las tradiciones ancestrales. Creo que todos merecen acceso a orientación espiritual genuina, independientemente de dónde estén o cuál sea su historia.'
  },
  valuesTitle: {
    pt: 'Meus Valores',
    en: 'My Values',
    es: 'Mis Valores'
  },
  values: [
    {
      id: 'clarity',
      icon: 'eye',
      title: 'Clareza',
      titleEn: 'Clarity',
      titleEs: 'Claridad',
      desc: 'Leituras honestas e transparentes, sem rodeios',
      descEn: 'Honest and transparent readings, without beating around the bush',
      descEs: 'Lecturas honestas y transparentes, sin rodeos'
    },
    {
      id: 'empathy',
      icon: 'heart',
      title: 'Empatia',
      titleEn: 'Empathy',
      titleEs: 'Empatía',
      desc: 'Cada consulta é tratada com respeito e acolhimento',
      descEn: 'Every consultation is treated with respect and warmth',
      descEs: 'Cada consulta es tratada con respeto y acogida'
    },
    {
      id: 'confidentiality',
      icon: 'moon',
      title: 'Confidencialidade',
      titleEn: 'Confidentiality',
      titleEs: 'Confidencialidad',
      desc: 'Sigilo absoluto em cada consulta, sua privacidade é sagrada',
      descEn: 'Absolute secrecy in every consultation, your privacy is sacred',
      descEs: 'Sigilo absoluto en cada consulta, su privacidad es sagrada'
    },
    {
      id: 'excellence',
      icon: 'star',
      title: 'Excelência',
      titleEn: 'Excellence',
      titleEs: 'Excelencia',
      desc: 'Compromisso com a qualidade em cada atendimento',
      descEn: 'Commitment to quality in every service',
      descEs: 'Compromiso con la calidad en cada atención'
    }
  ]
}
