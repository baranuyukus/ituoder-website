import type { AppIconName } from '../lib/icons';

export const boardIntro = {
  eyebrow: 'Kurumsal Yapı',
  title: 'Yönetim, ekip liderleri ve ekip',
  body: "itüöder'in organizasyon yapısı, öğrenciler için çalışan gönüllü bir çekirdek ekipten oluşuyor. Aşağıda mevcut yönetim kurulumuzu ve güncellenecek ekip yapısını görebilirsin.",
} as const;

export const boardSections: {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: AppIconName;
  emptyTitle?: string;
  emptyBody?: string;
}[] = [
  {
    id: 'yonetim-kurulumuz',
    label: '01',
    title: 'Yönetim Kurulumuz',
    description: 'Derneğin karar ve koordinasyon yapısını yürüten ekip.',
    icon: 'board',
  },
  {
    id: 'ekip-liderleri',
    label: '02',
    title: 'Ekip Liderleri',
    description: 'Program ve ekip akışlarını yöneten yapı burada yayınlanacak.',
    icon: 'leadership',
    emptyTitle: 'Ekip liderleri bölümü güncelleniyor',
    emptyBody: 'Yeni organizasyon yapısı netleştikçe bu alan gerçek verilerle yayınlanacak.',
  },
  {
    id: 'ekip',
    label: '03',
    title: 'Ekip',
    description: 'Derneğin üretim ve operasyon tarafında birlikte çalışan gönüllü ekipler.',
    icon: 'team',
    emptyTitle: 'Ekip listesi güncelleniyor',
    emptyBody: 'Ekip yapısı bu sayfada görünür hale getirilecek. Şu an kurumsal düzenleme aşamasında.',
  },
] as const;

export interface BoardMember {
  name: string;
  role: string;
  image: string;
  isChair?: boolean;
}

export const boardMembers: BoardMember[] = [
  {
    name: 'Etkin Celep',
    role: 'Yönetim Kurulu Başkanı',
    image: '/yonetim/etkin-celep.jpg',
    isChair: true,
  },
  {
    name: 'Efecan Yıldırım',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/efecan-yildirim.jpg',
  },
  {
    name: 'Ece Ercan',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/ece-ercan.jpg',
  },
  {
    name: 'Muhammet Banzaroğlu',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/muhammet-banzaroglu.jpg',
  },
  {
    name: 'Sudenaz Arslan',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/sudenaz-arslan.jpg',
  },
  {
    name: 'Mert Kaan Yıldız',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/mert-kaan-yildiz.jpg',
  },
  {
    name: 'Damla Irmak Çinko',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/damla-irmak-cinko.jpg',
  },
  {
    name: 'Buğra Şahin',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/bugra-sahin.jpg',
  },
  {
    name: 'Duru Göktepe',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/duru-goktepe.jpg',
  },
  {
    name: 'Emre Avcıoğlu',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/emre-avcioglu.jpg',
  },
  {
    name: 'Yiğitalp Ulukaya',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/yigitalp-ulukaya.jpg',
  },
  {
    name: 'Hasan Çakır Bal',
    role: 'Yönetim Kurulu Üyesi',
    image: '/yonetim/hasan-cakir-bal.jpg',
  },
];
