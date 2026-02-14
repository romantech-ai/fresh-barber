export const clinic = {
  name: "Fresh Barber",
  logo: "/images/logo.png",
  tagline: "Tu barbería de confianza en 29014 Málaga",
  description: "Fresh Barber es la barbería mejor valorada de Málaga con 4.9 estrellas y 489 reseñas. Especialistas en cortes modernos, arreglo de barba y grooming masculino con estilo. Liderados por Sansón, nuestro equipo de artistas del cabello trabaja de 9:00 a 21:00 para que siempre encuentres tu momento perfecto. Calidad profesional, ambiente fresco y precios inmejorables en pleno centro de Málaga.",
  colors: {
    primary: "#997aaf",
    secondary: "#121319",
    accent: "#121319",
    neutral: "#f7f4f9"
  },
  phone: "615 42 22 35",
  whatsapp: "+34615422235",
  whatsappMessage: "Hola, me gustaría pedir cita para peluquería.",
  email: "info@freshbarber.es",
  address: {
    street: "Pl. de Capuchinos, 13, Distrito Centro, 29014 Málaga, España",
    city: "29014 Málaga",
    province: "Madrid",
    postalCode: "29014",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=2595448733343672806&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Fresh%20Barber%20%4036.729%2C-4.42092&z=16&output=embed",
  coordinates: {
    lat: 36.729,
    lng: -4.42092
  },
  schedule: [
    {
      days: "lunes - viernes",
      hours: "9:00–13:30, 15:00–20:00"
    },
    {
      days: "sábado",
      hours: "9:00–13:00"
    },
    {
      days: "domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 4.9,
    count: 489,
    url: "https://maps.google.com/?cid=2595448733343672806&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Karol Arango",
        rating: 5,
        text: "La mejor barbería de todas! 💈✨ Sansón no solo es un barbero, ¡es un artista con las tijeras! 🎨✂️ Cada corte que hace queda impecable, moderno y con estilo. Se nota que ama su trabajo y que pone dedicación en cada detalle.\nEl ambiente es súper agradable, te atienden con una sonrisa y te hacen sentir como en casa. Además, los precios están genial 💰 y el trato es de diez. Están abiertos de 9 de la mañana a 9 de la noche, así que siempre encuentras un buen momento para pasar a arreglarte.\nEso sí, importante: solo aceptan pagos en efectivo, así que lleva billetes 😉.\nSi quieres un corte top, buena charla y salir con flow, ¡Sansón es tu barbero! 🔥💪",
        date: "Hace 3 meses"
      },
      {
        author: "Ale Martin",
        rating: 5,
        text: "La mejor barbería de Málaga. Trato profesional y de calidad lo que hace que todo el mundo quiera ir a pelarse aquí. Aun así vale la pena ya que calidad precio no tiene competencia. Se merecen estar siempre llenos por la categoría de esta barbería y de sus empleados. Gracias Fresh Barber. Nos volveremos a ver.",
        date: "Hace 6 meses"
      },
      {
        author: "Constantin Cruceru",
        rating: 5,
        text: "Queria un corte de pelo corto, tipo soldado americano y lo he conseguido en menos de cuarto de hora en un ambiente limpio y fresco, teniendo en cuenta el calor que hacía fuera. Me senti muy bien atendido y recomando el sitio.",
        date: "Hace 5 meses"
      },
      {
        author: "Marcos Antón",
        rating: 5,
        text: "Ir de vacaciones a Málaga y cortarte el pelo en una barbería con todo detalle y gente profesional, es de agradecer.\nY, además, precio competitivo. Padre e hijo por 18 €.\n\n¡Gracias, chavales!",
        date: "Hace 5 meses"
      }
    ]
  },
  services: [
    {
      id: "corte-clasico",
      name: "Corte Clásico",
      description: "Cortes tradicionales ejecutados con precisión y técnica profesional. Desde el estilo soldado americano hasta looks atemporales que nunca pasan de moda. Cada corte se adapta a la forma de tu rostro y estilo personal.",
      benefits: [
        "Acabado impecable en menos de 15 minutos",
        "Técnicas profesionales de barbería clásica",
        "Asesoramiento personalizado de estilo"
      ],
      icon: "Scissors"
    },
    {
      id: "corte-moderno",
      name: "Corte Moderno",
      description: "Los cortes más actuales y con tendencia para que salgas con flow. Degradados perfectos, texturas trabajadas y estilos urbanos que marcan la diferencia. Nuestros barberos son verdaderos artistas que dominan las últimas técnicas.",
      benefits: [
        "Estilos urbanos y con personalidad",
        "Degradados y texturas perfectas",
        "Look renovado que destaca"
      ],
      icon: "Sparkles"
    },
    {
      id: "arreglo-barba",
      name: "Arreglo de Barba",
      description: "Perfilado, recorte y diseño de barba con detalle profesional. Conseguimos el equilibrio perfecto entre tu barba y tu corte para un look completo y armonioso. Técnicas de barbería tradicional con toque contemporáneo.",
      benefits: [
        "Perfilado preciso y simétrico",
        "Diseño adaptado a tu rostro",
        "Acabado suave y cuidado"
      ],
      icon: "User"
    },
    {
      id: "pack-padre-hijo",
      name: "Pack Padre e Hijo",
      description: "La experiencia Fresh Barber para compartir en familia. Dos cortes profesionales con todo detalle a precio especial. Perfecto para crear momentos únicos mientras ambos renováis vuestro estilo.",
      benefits: [
        "Precio competitivo por 18€",
        "Atención simultánea y profesional",
        "Experiencia para compartir"
      ],
      icon: "Heart"
    },
    {
      id: "grooming-completo",
      name: "Grooming Completo",
      description: "Servicio integral que combina corte, arreglo de barba y cuidado facial. La experiencia definitiva de barbería moderna donde cada detalle cuenta. Sales renovado de pies a cabeza con un look coordinado y profesional.",
      benefits: [
        "Servicio completo con todos los detalles",
        "Look totalmente renovado",
        "Experiencia premium de barbería"
      ],
      icon: "Crown"
    },
    {
      id: "corte-express",
      name: "Corte Express",
      description: "Para cuando necesitas un corte rápido sin sacrificar calidad. Servicio ágil y profesional que respeta tu tiempo. Perfecto para retoques y mantenimiento de tu estilo habitual.",
      benefits: [
        "Listo en tiempo récord",
        "Calidad profesional garantizada",
        "Ideal para agendas apretadas"
      ],
      icon: "Layers"
    },
    {
      id: "diseno-personalizado",
      name: "Diseño Personalizado",
      description: "Cortes únicos y creativos donde la tijera se convierte en pincel. Nuestros barberos artistas crean diseños exclusivos adaptados a tu personalidad. Cada corte es una obra de arte capilar única.",
      benefits: [
        "Creatividad y técnica de alto nivel",
        "Estilo único y personalizado",
        "Atención al detalle extrema"
      ],
      icon: "Sparkles"
    },
    {
      id: "mantenimiento-estilo",
      name: "Mantenimiento de Estilo",
      description: "Retoques y ajustes para mantener tu look siempre impecable. Servicio regular para quienes buscan estar siempre a punto. Incluye consejos personalizados para el cuidado diario de tu cabello.",
      benefits: [
        "Mantén tu estilo siempre perfecto",
        "Asesoramiento continuo",
        "Relación calidad-precio imbatible"
      ],
      icon: "Scissors"
    }
  ],
  process: [
    {
      step: 1,
      title: "Reserva tu Momento",
      description: "Llámanos al 615 42 22 35 o pasa directamente. Abrimos de 9:00 a 21:00 para que siempre encuentres tu horario perfecto. Horario flexible pensado para tu comodidad."
    },
    {
      step: 2,
      title: "Consulta Personalizada",
      description: "Nuestros barberos analizan tu tipo de cabello, forma de rostro y estilo personal. Juntos definimos el corte que mejor te representa. Asesoramiento profesional basado en años de experiencia."
    },
    {
      step: 3,
      title: "Arte con las Tijeras",
      description: "Sansón y su equipo de artistas trabajan con precisión, técnica y dedicación en cada detalle. Ambiente limpio, fresco y agradable donde te sientes como en casa. Profesionalidad que se nota en cada corte."
    },
    {
      step: 4,
      title: "Sal con Flow",
      description: "Look renovado, moderno y con estilo que refleja tu personalidad. Te damos consejos para mantener tu corte impecable. Recuerda traer efectivo para el pago. ¡Y vuelve pronto!"
    }
  ],
  whyUs: [
    {
      title: "4.9 Estrellas en Google",
      description: "Con 489 reseñas verificadas, somos una de las barberías mejor valoradas de Málaga. Nuestros clientes destacan la calidad profesional, el trato excepcional y la relación calidad-precio imbatible. La confianza de cientos de clientes satisfechos nos avala.",
      icon: "Sparkles"
    },
    {
      title: "Artistas con las Tijeras",
      description: "Liderados por Sansón, nuestro equipo de barberos son verdaderos artistas que aman su trabajo. Cada corte se ejecuta con técnica, precisión y dedicación extrema al detalle. No hacemos cortes, creamos obras de arte capilares que reflejan tu personalidad.",
      icon: "Crown"
    },
    {
      title: "Ambiente Fresh y Acogedor",
      description: "Espacio limpio, fresco y con buen rollo donde te sientes como en casa desde el primer momento. Ambiente agradable con buena charla, sonrisas genuinas y la comodidad que buscas. Aquí no solo vienes a cortarte el pelo, vienes a disfrutar la experiencia.",
      icon: "Heart"
    },
    {
      title: "Horario Flexible 9:00-21:00",
      description: "Abiertos de 9 de la mañana a 9 de la noche para adaptarnos a tu agenda. Ya sea antes del trabajo, en tu pausa o después de tu jornada, siempre encuentras tu momento perfecto. Máxima flexibilidad para tu comodidad sin comprometer la calidad del servicio.",
      icon: "Layers"
    }
  ],
  team: [
    {
      name: "Equipo de Fresh Barber",
      role: "Estilistas Profesionales",
      image: "/images/team/placeholder.jpg",
      bio: "Estilistas apasionados por la belleza y las tendencias. En Fresh Barber nos dedicamos a que cada cliente salga con el look perfecto y la confianza renovada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Fresh Barber - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Fresh Barber - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Fresh Barber - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Fresh Barber - Imagen 4"
    }
  ],
  faq: [
    {
      question: "¿Qué horario tiene Fresh Barber?",
      answer: "Estamos abiertos de 9:00 de la mañana a 21:00 de la noche, de lunes a domingo. Este amplio horario está pensado para que siempre encuentres un buen momento para renovar tu look, ya sea antes del trabajo, en tu pausa del mediodía o después de tu jornada. En Fresh Barber nos adaptamos a tu agenda."
    },
    {
      question: "¿Necesito reservar cita previa?",
      answer: "Puedes llamarnos al 615 42 22 35 para reservar tu cita o pasar directamente cuando te venga bien. Aunque trabajamos con citas, también atendemos sin reserva según disponibilidad. Te recomendamos llamar en horas punta para asegurar tu hueco. Nuestro equipo siempre busca la forma de atenderte."
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer: "En Fresh Barber aceptamos únicamente pagos en efectivo, así que recuerda traer billetes cuando vengas a cortarte el pelo. Esta política nos permite mantener nuestros precios competitivos y ofrecer la mejor relación calidad-precio de Málaga. Hay cajeros cercanos por la zona si lo necesitas."
    },
    {
      question: "¿Cuánto cuesta un corte en Fresh Barber?",
      answer: "Nuestros precios son realmente competitivos sin sacrificar calidad profesional. Ofrecemos el pack padre e hijo por 18€, una de las mejores ofertas de Málaga. Los cortes individuales tienen precios ajustados que reflejan nuestra filosofía: calidad profesional accesible para todos. Llámanos para consultar tarifas específicas según el servicio que necesites."
    },
    {
      question: "¿Quién es Sansón y por qué es tan recomendado?",
      answer: "Sansón es nuestro barbero estrella y líder del equipo de Fresh Barber, reconocido por nuestros clientes como un verdadero artista con las tijeras. Su dedicación, técnica impecable y pasión por su trabajo se reflejan en cada corte que realiza. Los clientes destacan su profesionalidad, atención al detalle y capacidad para crear looks modernos y con estilo. Además, su trato cercano hace que te sientas como en casa."
    },
    {
      question: "¿Por qué Fresh Barber tiene tan buenas valoraciones?",
      answer: "Contamos con 4.9 estrellas sobre 5 y 489 reseñas en Google, lo que nos convierte en una de las barberías mejor valoradas de Málaga. Nuestros clientes destacan la calidad profesional de nuestros cortes, el ambiente agradable, los precios competitivos y el trato excepcional del equipo. La combinación de técnica profesional, dedicación y pasión por nuestro trabajo hace que la gente quiera volver una y otra vez."
    },
    {
      question: "¿Atienden a niños en Fresh Barber?",
      answer: "Sí, atendemos a toda la familia incluidos los más pequeños. De hecho, nuestro pack padre e hijo es muy popular entre familias que buscan calidad y buen precio. Nuestros barberos tienen experiencia trabajando con niños y creamos un ambiente cómodo para que la experiencia sea agradable. Es una excelente forma de compartir un momento especial mientras ambos renováis vuestro estilo."
    },
    {
      question: "¿Qué hace diferente a Fresh Barber de otras barberías?",
      answer: "En Fresh Barber combinamos técnica profesional de alto nivel con precios accesibles y un ambiente único. Nuestro equipo son verdaderos artistas que aman su trabajo y lo demuestran en cada detalle. El ambiente es limpio, fresco y acogedor, te hacen sentir como en casa mientras recibes un servicio de categoría. Con 4.9 estrellas en Google y clientes que nos recomiendan constantemente, la diferencia se nota en cada visita."
    }
  ],
  seo: {
    titleTemplate: "%s | Fresh Barber",
    defaultTitle: "Fresh Barber - Barbería Profesional en 29014 Málaga",
    defaultDescription: "Barbería mejor valorada de Málaga con 4.9★. Cortes modernos, arreglo de barba y grooming profesional. Horario 9:00-21:00. Llama al 615 42 22 35 y sal con flow.",
    keywords: [
      "barbería Málaga",
      "Fresh Barber",
      "barbería 29014 Málaga",
      "corte de pelo hombre Málaga",
      "arreglo barba Málaga",
      "barbería profesional Málaga",
      "corte moderno Málaga",
      "grooming masculino Málaga",
      "mejor barbería Málaga",
      "Sansón barbero Málaga",
      "barbería centro Málaga",
      "corte padre hijo Málaga"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Fresh Barber",
    cif: "",
    registeredAddress: "Pl. de Capuchinos, 13, Distrito Centro, 29014 Málaga, España, 29014 Málaga, Madrid"
  },
  heroHeadline: [
    "Tu Centro de",
    "Peluquería",
    "en 29014 Málaga"
  ],
  heroDescription: "En Fresh Barber transformamos tu look con cortes impecables y modernos que reflejan tu personalidad. Con 4.9 estrellas en Google y un equipo liderado por verdaderos artistas de las tijeras, ofrecemos la mejor experiencia de barbería en Málaga. Ambiente agradable, atención personalizada y resultados que hablan por sí solos.",
  specialty: "Barbería Moderna",
  ctaLabel: "Tu Nuevo Look",
  ctaHeadline: "¿Listo para un corte con flow?",
  ctaDescription: "Reserva tu cita en la barbería mejor valorada de Málaga. Horario flexible de 9:00 a 21:00 para adaptarnos a ti. Llámanos o pasa directamente.",
  statsLabel: "Clientes",
  schemaType: "HairSalon",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Técnicas avanzadas de estética y belleza para realzar tu imagen y cuidar de ti.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la belleza en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu belleza, nuestra pasión",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para realzar tu belleza natural.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestras clientas",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestro centro",
    galleryDescription: "Un espacio diseñado para tu bienestar y relajación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestras clientas.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializadas",
    teamDescription: "Experiencia y pasión al servicio de tu belleza"
  }
}

export type Clinic = typeof clinic
