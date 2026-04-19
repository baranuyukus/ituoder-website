import type { AppIconName } from '../lib/icons';

interface HomeCardItem {
  label: string;
  title: string;
  description: string;
  href: string;
  icon: AppIconName;
  logoSrc?: string;
  logoAlt?: string;
  logoClassName?: string;
}

export const heroHighlights: HomeCardItem[] = [
  {
    label: 'Projeler',
    title: 'Saha projeleri',
    description: 'Kampüste doğrudan temas eden saha çalışmalarını incele.',
    href: '/saha-projeleri',
    icon: 'field',
  },
  {
    label: 'Destek',
    title: 'Psikolojik destek',
    description: 'İyi oluşu odağa alan destek programına ulaş.',
    href: '/psikolojik-destek',
    icon: 'psychology',
  },
  {
    label: 'Destek',
    title: 'Ulaşım desteği',
    description: 'Ücretsiz abonman desteğinin işleyişini gör.',
    href: '/ulasim-destegi',
    icon: 'transport',
  },
] as const;

export const supportAreas: HomeCardItem[] = [
  {
    label: 'Psikolojik',
    title: 'Psikolojik Destek',
    description: 'İyi oluşu odağa alan ücretsiz danışmanlık ve yönlendirme desteği.',
    href: '/psikolojik-destek',
    icon: 'psychology',
    logoSrc: '/kimlikler/psikolojikdestek.png',
    logoAlt: 'Psikolojik Destek logosu',
    logoClassName: 'h-12 sm:h-14',
  },
  {
    label: 'Hukuki',
    title: 'Hukuki Destek',
    description: 'Öğrenci hakları ve gündelik anlaşmazlıklar için hukuki yönlendirme alanı.',
    href: '/hukuki-destek',
    icon: 'legal',
    logoSrc: '/kimlikler/hukukidestek.png',
    logoAlt: 'Hukuki Destek logosu',
    logoClassName: 'h-12 sm:h-14',
  },
  {
    label: 'Kariyer',
    title: 'Kariyer Gelişim Desteği',
    description: 'Mentorluk, CV desteği ve profesyonel gelişim odaklı proje alanı.',
    href: '/kariyer-gelisim-detegi',
    icon: 'career',
    logoSrc: '/kimlikler/kariyergelisimdestegi.png',
    logoAlt: 'Kariyer Gelişim Desteği logosu',
    logoClassName: 'h-[3.25rem] sm:h-14',
  },
  {
    label: 'Ulaşım',
    title: 'Ulaşım Desteği',
    description: 'Kampüs içi hareketi kolaylaştıran öğrenci odaklı ulaşım desteği.',
    href: '/ulasim-destegi',
    icon: 'transport',
    logoSrc: '/kimlikler/ulasimdestegi.png',
    logoAlt: 'Ulaşım Desteği logosu',
    logoClassName: 'h-12 sm:h-14',
  },
] as const;

export const impactPillars = [
  {
    title: 'Öğrencilerin yanında',
    description: 'Günlük ihtiyaçlara ve uzun vadeli gelişime aynı anda odaklanıyoruz.',
    icon: 'team' as const,
  },
  {
    title: 'Erişilebilir fırsatlar',
    description: 'Destek programlarını ve iş birliklerini sade biçimde erişilebilir kılıyoruz.',
    icon: 'projects' as const,
  },
  {
    title: 'Saha ve dayanışma',
    description: 'Kampüste temas eden ve ihtiyaç anında organize olabilen bir yapı kuruyoruz.',
    icon: 'field' as const,
  },
] as const;

export const contactPoints = [
  'İTÜ öğrencileri için etkili olacağını düşündüğün fikri paylaş.',
  'Sahadan gelen ihtiyacı birlikte tarif edelim.',
  'Uygulanabilir fikri birlikte görünür hale getirelim.',
] as const;

export const newsItems = [
  {
    title: 'İTÜ Öğrencilerine Kariyer Yolculuklarında Rehberlik: Kariyer Gelişim Desteği',
    summary:
      'İTÜ öğrencilerinin kariyer yolculuğunda yalnız olmadığını hissettiren destek modelinin çerçevesi.',
    date: '18 May 2025',
    category: 'Kariyer Gelişimi',
    link: '/post/i-tü-öğrencilerine-kariyer-yolculuklarında-rehberlik-kariyer-gelişim-desteği',
    image: '/home/news-career.jpg',
    imageAlt: 'İTÜ Öğrencilerine Kariyer Yolculuklarında Rehberlik: Kariyer Gelişim Desteği',
  },
  {
    title: "Birlikte Güçlüyüz: itüöder'den 23 Nisan Depreminde Dayanışma Standı",
    summary:
      "Deprem sonrası kurulan dayanışma standının kampüsteki doğrudan destek etkisi.",
    date: '4 May 2025',
    category: 'Dayanışma',
    link: '/post/birlikte-güçlüyüz-itüöder-den-23-nisan-depreminde-dayanışma-standı',
    image: '/home/news-dayanisma.jpg',
    imageAlt: "Birlikte Güçlüyüz: itüöder'den 23 Nisan Depreminde Dayanışma Standı",
  },
  {
    title: "itüöder'den Öğrenci Dayanışmasına Destek",
    summary:
      "Kampüste büyüyen öğrenci dayanışmasının son saha temaslarına kısa bir bakış.",
    date: '21 Nis 2025',
    category: 'Öğrenci Desteği',
    link: '/post/itüöder-den-öğrenci-dayanışmasına-destek',
    image: '/home/news-support.jpg',
    imageAlt: "itüöder'den Öğrenci Dayanışmasına Destek",
  },
  {
    title: 'itüöder İlk Standında İTÜ Öğrencileriyle Buluştu',
    summary:
      'İlk stant deneyiminin kampüsteki görünürlük ve temas açısından nasıl başladığı.',
    date: '9 Mar 2025',
    category: 'Kampüs Buluşması',
    link: '/post/itüöder-olarak-i-lk-stantımızda-i-tü-öğrencileriyle-buluştuk',
    image: '/home/news-stand.png',
    imageAlt: 'itüöder İlk Standında İTÜ Öğrencileriyle Buluştu',
  },
] as const;
