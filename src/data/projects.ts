import type { AppIconName } from '../lib/icons';

export interface ProjectNavItem {
  title: string;
  href: string;
  description: string;
  label: string;
  icon: AppIconName;
}

export const projectNavItems: ProjectNavItem[] = [
  {
    title: 'Saha Projeleri',
    href: '/saha-projeleri',
    description: 'Kampüste ve kriz anında yürüyen saha dayanışması.',
    label: 'Sahada',
    icon: 'field',
  },
  {
    title: 'Psikolojik Destek',
    href: '/psikolojik-destek',
    description: 'Öğrenci iyi oluşunu odağa alan destek programı.',
    label: 'İyi oluş',
    icon: 'psychology',
  },
  {
    title: 'Hukuki Destek',
    href: '/hukuki-destek',
    description: 'İhtiyaç anında başvurulabilecek hukuki dayanışma alanı.',
    label: 'Haklar',
    icon: 'legal',
  },
  {
    title: 'Ulaşım Desteği',
    href: '/ulasim-destegi',
    description: 'Ücretsiz abonman desteği ve başvuru akışı.',
    label: 'Ulaşım',
    icon: 'transport',
  },
  {
    title: 'Kariyer Gelişim Desteği',
    href: '/kariyer-gelisim-detegi',
    description: 'Kariyer yolculuğunu somut adımlarla destekleyen alan.',
    label: 'Kariyer',
    icon: 'career',
  },
] as const;
