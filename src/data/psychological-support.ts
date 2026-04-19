export const psychologicalSupportStats = [
  { value: '320+', label: 'Başvuru' },
  { value: '1200+', label: 'Seans' },
  { value: '290+', label: 'Öğrenci' },
] as const;

export const supportJourney = [
  {
    step: '01',
    title: 'Formu doldur',
    description:
      'Psikolojik destek almak istiyorsan başvuru formunu doldur. Paylaştığın bilgiler yalnızca terapi merkezine ulaştırılır.',
    actionLabel: 'Başvuru Formu',
    actionHref:
      'https://docs.google.com/forms/d/e/1FAIpQLSc8zIgga3--k3UT1nFN8Wph2bFD33j5Cvx22UuywYM60xZBXg/viewform',
  },
  {
    step: '02',
    title: 'Uygun psikoloğa yönlendirme',
    description:
      'Formdaki bilgiler doğrultusunda seni en uygun terapi merkezi ve uzmanla eşleştiriyoruz.',
  },
  {
    step: '03',
    title: 'Süreç seninle başlar',
    description:
      'Seçtiğin terapi merkezi en kısa sürede seninle iletişime geçiyor ve seans süreci doğrudan başlıyor.',
  },
  {
    step: '04',
    title: 'Online terapiyi uygulamadan başlat',
    description:
      'itüöder uygulamasındaki “Psikolojik Destek” alanından Heltia ile online terapi sürecini beklemeden başlatabilirsin.',
    actionLabel: 'itüöder App',
    actionHref: '/simdi-indir',
  },
] as const;

export const supportModelCards = [
  {
    eyebrow: 'Yüz Yüze Destek',
    title: 'Anlaşmalı terapi merkezleriyle eşleşme',
    description:
      'İTÜ öğrencileri için uygun fiyatlı yüz yüze seans modeli sunuyoruz. Başvuru sonrası doğru uzmanla hızlıca buluşman hedefleniyor.',
    points: [
      'Terapi merkezine güvenli yönlendirme',
      'Öğrenci koşullarına uygun fiyatlandırma',
      'Daha ulaşılabilir mental sağlık desteği',
    ],
    actionLabel: 'Şimdi Talep Et',
    actionHref:
      'https://docs.google.com/forms/d/e/1FAIpQLSc8zIgga3--k3UT1nFN8Wph2bFD33j5Cvx22UuywYM60xZBXg/viewform',
    theme: 'light',
  },
  {
    eyebrow: 'Online Terapi',
    title: 'Heltia partnerliğinde beklemeden erişim',
    description:
      'itüöder üyelerine özel online terapi modeliyle, uygulama içinden doğrudan süreci başlatabilir ve destek alma eşiğini aşağı çekebilirsin.',
    points: [
      'Heltia entegrasyonu',
      'Uygulama içinden hızlı başlangıç',
      'Üyelere özel dijital erişim',
    ],
    actionLabel: 'Uygulamayı İncele',
    actionHref: '/simdi-indir',
    theme: 'dark',
  },
] as const;

export const mentalHealthNeeds = [
  'Her dört öğrenciden biri mental sağlık sorunlarıyla karşılaşıyor.',
  '%75 oranında öğrenci eğitim hayatı boyunca en az bir kez tükenmişlik yaşıyor.',
  '%40 oranında öğrenci mental sağlık sorunlarının akademik performansını düşürdüğünü söylüyor.',
] as const;

export const projectGoals = [
  {
    title: 'Uygun fiyatlı destek',
    description:
      'Destek almanın önündeki ekonomik bariyerleri azaltarak öğrenciler için daha ulaşılabilir bir model kuruyoruz.',
  },
  {
    title: 'Kısmi destek hedefi',
    description:
      'Yakın gelecekte terapi seanslarının bir kısmının ücretini doğrudan itüöder olarak karşılamayı hedefliyoruz.',
  },
  {
    title: 'Uzun vadeli sürdürülebilirlik',
    description:
      'Bağışlar ve dayanışma ağlarıyla daha fazla öğrenciye ulaşan, kalıcı bir destek fonu oluşturmak istiyoruz.',
  },
] as const;

export const firstMonthMetrics = [
  { value: '105', label: 'öğrenci başvurdu' },
  { value: '42', label: 'öğrenci terapiye başladı' },
  { value: '78', label: 'seans gerçekleştirildi' },
  { value: '6', label: 'klinik destek ağına katıldı' },
] as const;

export const testimonial = {
  quote:
    'Arkadaş ortamında dertleşmek keyifliydi ama bir noktadan sonra çözüm bulmayı bırakıp dertlerimizde kayboluyorduk. Terapiye gitmek istiyorduk ama hep pahalı diyerek erteliyorduk. Bu projede uygun fiyatları görünce hepimiz terapiye başladık. Şimdilik herkesin keyfi yerinde!',
  author: 'Bilgisayar Mühendisliği - 4. Sınıf Öğrencisi',
} as const;
