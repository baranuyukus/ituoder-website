import type { AppIconName } from '../lib/icons';

export const aboutIntro = {
  eyebrow: 'Hakkımızda',
  title: 'itüöder hakkında.',
  body: 'İstanbul Teknik Üniversitesi Öğrencileri Derneği (itüöder), öğrencilerin eğitim ve kariyer gelişimini adil koşullarda sürdürmelerine katkı sağlamak amacıyla gönüllü İTÜ Öğrencileri tarafından kurulmuştur. Öğrencilerin yaşam standartlarını yükseltmek ve akademik hayatları boyunca çağdaş refah şartlarına sahip olmaları adına; sosyal, kültürel, bilimsel, mesleki ve diğer alanlarda destek sağlayacak projeler geliştirmektedir.',
  boldHighlight: 'Öğrencilerin yaşam standartlarını yükseltmek ve akademik hayatları boyunca çağdaş refah şartlarına sahip olmaları adına',
} as const;

export const supportCategories: {
  icon: AppIconName;
  title: string;
  description: string;
}[] = [
  {
    icon: 'professional',
    title: 'Profesyonel Destekler',
    description:
      'Psikolojik danışmanlık, hukuki destek ve rehberlik alanlarıyla öğrencilerin yanında duruyoruz.',
  },
  {
    icon: 'academic',
    title: 'Akademik Destekler',
    description:
      'Mezunlar ve profesyonellerle öğrenciler arasında sürdürülebilir bir gelişim ağı kuruyoruz.',
  },
  {
    icon: 'social',
    title: 'Sosyal Destekler',
    description:
      'Kampüs temasını güçlendiren etkinlikler ve öğrenci ihtiyaçlarını görünür kılan alanlar kuruyoruz.',
  },
  {
    icon: 'financial',
    title: 'Maddi Destekler',
    description:
      'Ulaşım, beslenme ve benzeri alanlarda ihtiyacı olan öğrencilere destek modelleri geliştiriyoruz.',
  },
] as const;

export const coreValues = [
  {
    title: 'Beraberliğin Gücü',
    description:
      'İTÜ öğrencileri olarak bir arada olmanın ve dayanışma kültürünün her zaman korunması ve gelecek nesillere taşınması gerektiğine inanıyoruz. Biz, beraberken çok daha güçlüyüz.',
    image: '/hakkimizda/deger-beraberlik.jpg',
  },
  {
    title: 'Hayatı Kolaylaştırmak',
    description:
      'Öğrencilik hayatının gereksinimlerini daha erişilebilir bir hale getiriyoruz. İTÜ Öğrencilerinin karşılaştıkları zorlukları azaltarak başarı sahnesini onlara bırakıyoruz.',
    image: '/hakkimizda/deger-kolaylastirmak.jpg',
  },
  {
    title: 'Herkes için itüöder',
    description:
      'Karşılıklı saygı üzerine kurulu bir topluluğuz ve İTÜ Öğrencilerinin önceliklerini her zaman koruyarak güvenilir bir ağ yaratıyoruz. Ayrım gözetmeden Tüm İTÜ Öğrencileri için çalışıyoruz.',
    image: '/hakkimizda/deger-herkes.jpg',
  },
] as const;
