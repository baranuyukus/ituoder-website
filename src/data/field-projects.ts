export const fieldImpactStats = [
  { value: '200', label: 'öğrenciye destek kolisi' },
  { value: '2500', label: 'fincan filtre kahve' },
  { value: '1300', label: 'ücretsiz sandviç' },
  { value: '350+', label: 'ITU 25 tişörtü' },
] as const;

export const fieldPrinciples = [
  {
    title: 'Gerçek ihtiyaca göre kurgu',
    description:
      'Öğrenci evinde kalanlar ve yurtta kalanlar için farklı içerikler hazırlayarak desteği aynılaştırmak yerine kişiselleştiriyoruz.',
  },
  {
    title: 'Gönüllü operasyon gücü',
    description:
      'Hazırlık, lojistik, dağıtım ve saha koordinasyonu tamamen itüöder gönüllülerinin emeğiyle ilerliyor.',
  },
  {
    title: 'Hızlı refleks, doğrudan temas',
    description:
      'Kriz anlarında aynı gün dayanışma noktası kurup öğrencinin karşısına gerçekten işe yarayan çözümlerle çıkıyoruz.',
  },
] as const;

export const fieldProjects = [
  {
    id: 'destek-kolisi',
    eyebrow: 'Öğrenci Destek Kolisi',
    title: 'Kapıya kadar ulaşan temel ihtiyaç desteği',
    lead: 'Talepte bulunan toplam 200 İTÜ öğrencisi için gıda ve hijyen ürünlerinden oluşan koliler hazırladık.',
    body: [
      'Bu destek modeli, öğrencilerin yaşam koşullarındaki farklılıkları gözeterek kurgulandı. Öğrenci evinde kalanlar ve yurtta kalanlar için içerikleri farklılaştırılmış iki ayrı koli tipi oluşturduk.',
      'Amacımız tek tip yardım dağıtmak değil, her öğrencinin gerçek ihtiyacına uygun ve doğrudan hayatı kolaylaştıran bir destek sunmaktı.',
    ],
    metric: '200 öğrenciye doğrudan teslimat',
    image: '/saha-projeleri/destek-kolisi.jpg',
    imageAlt: 'itüöder gönüllülerinin öğrenci destek kolileriyle toplu fotoğrafı',
    tone: 'light',
  },
  {
    id: 'kahve',
    eyebrow: 'Kampüste Kahve Dağıtımı',
    title: 'Sabah temposuna küçük ama güçlü bir mola',
    lead: 'Ayazağa Kampüsü’nde üç gün boyunca 2500 fincan filtre kahveyi öğrencilerle buluşturduk.',
    body: [
      'Hazırlık, lojistik ve dağıtım süreçlerinin tamamı itüöder gönüllüleri tarafından yürütüldü.',
      'Sıcak bir kahveyle başlayan bu temas, kampüste aidiyet ve dayanışma duygusunu pekiştiren görünür bir saha temasına dönüştü.',
    ],
    metric: '3 gün, 2500 fincan, tam gönüllü koordinasyon',
    image: '/saha-projeleri/kahve-dagitimi.jpg',
    imageAlt: 'kampüste kahve dağıtımı yapan itüöder gönüllüleri',
    tone: 'warm',
  },
  {
    id: 'sandvic',
    eyebrow: 'Sandviç Dayanışması',
    title: 'Sınav ve proje dönemlerinde bir öğünü dert etmemek için',
    lead: 'İki gün boyunca yaklaşık 1300 sandviçi Ayazağa Kampüsü’nde öğrencilere ücretsiz olarak dağıttık.',
    body: [
      'Bu süreç hem fiziksel emek hem de etkin koordinasyon gerektirdi; saha dağıtımı tamamen gönüllü ekiplerimizin özverisiyle yürütüldü.',
      'Küçük dokunuşlarla büyük farklar yaratabileceğimize inanıyoruz. Öğrencilerin yoğun dönemlerinde görünür, hızlı ve somut bir destek hattı kurduk.',
    ],
    metric: '2 günde 1300 sandviç',
    image: '/saha-projeleri/sandvic-dayanismasi.jpg',
    imageAlt: 'sandviç dayanışması etkinliğinden küçük bir kare',
    tone: 'dark',
  },
  {
    id: 'deprem',
    eyebrow: '23 Nisan Depremi Yardımı',
    title: 'Kriz anında aynı gece kurulan dayanışma noktası',
    lead: 'İstanbul’daki deprem sonrası yurda giremeyen öğrenciler için aynı gece içinde bir destek noktası kurduk.',
    body: [
      'Hijyenik ped, içme suyu, kuru gıda ve içecek gibi temel ihtiyaç malzemelerini hızla kampüse ulaştırdık.',
      'Gönüllülerimizin koordineli refleksi sayesinde ihtiyaçlar beklemeden karşılandı; bu saha pratiği itüöder’in kriz anlarında güvenilir bir destek kaynağı olduğunu gösterdi.',
    ],
    metric: 'Aynı gece sahaya çıkan kriz desteği',
    image: '/saha-projeleri/deprem-yardimi.jpg',
    imageAlt: '23 Nisan depremi sonrası kurulan öğrenci destek standı',
    tone: 'charcoal',
  },
  {
    id: 'itu25',
    eyebrow: 'ITU 25: THE GENESIS',
    title: 'Üniversite ruhunu taşıyan, psikolojik desteğe kaynak yaratan özel seri',
    lead: 'İki hafta içinde 350’den fazla İTÜ öğrencisiyle buluşan bu proje, tasarımdan üretime kadar tamamen gönüllü emeğiyle hayata geçti.',
    body: [
      'ITU 25 ile kampüs ruhunu yaşatacak küçük ama anlamlı bir simge üretmek istedik.',
      'Aynı zamanda bu özel seri, Psikolojik Destek Projesi için kaynak yaratan ve saha üretimini dayanışmaya bağlayan bir model oldu.',
    ],
    metric: '350+ öğrenciyle buluşan dayanışma ürünü',
    frontImage: '/saha-projeleri/itu25-front.png',
    backImage: '/saha-projeleri/itu25-back.png',
    tone: 'product',
  },
] as const;
