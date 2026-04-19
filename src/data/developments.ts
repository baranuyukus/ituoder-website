export interface Development {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
}

export const developments: Development[] = [
  {
    slug: 'i-tü-öğrencilerine-kariyer-yolculuklarında-rehberlik-kariyer-gelişim-desteği',
    title: 'İTÜ Öğrencilerine Kariyer Yolculuklarında Rehberlik: Kariyer Gelişim Desteği',
    summary:
      'itüöder, İTÜ öğrencilerinin kariyer hedeflerine giden yolda yalnız olmadıklarını hissettirmek amacıyla Kariyer Gelişim Desteği projesini hayata geçirdi. Öğrencilerin yolculuğunda yanındayız.',
    date: '18 May 2025',
    category: 'Kariyer Gelişimi',
    image: '/home/news-career.jpg',
    imageAlt: 'İTÜ Öğrencilerine Kariyer Yolculuklarında Rehberlik: Kariyer Gelişim Desteği',
  },
  {
    slug: 'birlikte-güçlüyüz-itüöder-den-23-nisan-depreminde-dayanışma-standı',
    title: "Birlikte Güçlüyüz: itüöder'den 23 Nisan Depreminde Dayanışma Standı",
    summary:
      "itüöder, 23 Nisan'da yaşanan deprem sonrası İTÜ öğrencilerine destek olmak amacıyla MED'de bir destek standı kurdu. Stantta; kuru gıda, hijyen ürünleri ve temel ihtiyaç malzemeleri dağıtıldı.",
    date: '4 May 2025',
    category: 'Dayanışma',
    image: '/home/news-dayanisma.jpg',
    imageAlt: "Birlikte Güçlüyüz: itüöder'den 23 Nisan Depreminde Dayanışma Standı",
  },
  {
    slug: 'itüöder-den-öğrenci-dayanışmasına-destek',
    title: "itüöder'den Öğrenci Dayanışmasına Destek",
    summary:
      'itüöder, İTÜ öğrencilerinin yanında olmaya, dayanışmayı büyütmeye ve taleplerini desteklemeye devam ediyor. 26-27-28 Mart tarihlerinde kampüste öğrencilerle buluşuldu.',
    date: '21 Nis 2025',
    category: 'Öğrenci Desteği',
    image: '/home/news-support.jpg',
    imageAlt: "itüöder'den Öğrenci Dayanışmasına Destek",
  },
  {
    slug: 'itüöder-olarak-i-lk-stantımızda-i-tü-öğrencileriyle-buluştuk',
    title: 'itüöder İlk Standında İTÜ Öğrencileriyle Buluştu',
    summary:
      "5-6-7 Mart tarihlerinde SDKM'de gerçekleşen SAVTEK Zirvesi boyunca, itüöder standı İTÜ öğrencileriyle buluşma fırsatı yakaladı. Üç gün süren etkinlikte yüzlerce öğrenciye ulaşıldı.",
    date: '9 Mar 2025',
    category: 'Kampüs Buluşması',
    image: '/home/news-stand.png',
    imageAlt: 'itüöder İlk Standında İTÜ Öğrencileriyle Buluştu',
  },
  {
    slug: 'ituoder-den-mental-saglik-icin-guclu-bir-adim',
    title: "itüöder'den Mental Sağlık İçin Güçlü Bir Adım",
    summary:
      'Psikolojik destek projesi kapsamında İTÜ öğrencilerine ücretsiz ve anonim psikolojik danışmanlık hizmeti sunulmaya başlandı.',
    date: '2 Mar 2025',
    category: 'Psikolojik Destek',
    image: '/home/news-support.jpg',
    imageAlt: "itüöder'den Mental Sağlık İçin Güçlü Bir Adım",
  },
  {
    slug: 'itüöder-den-öğrencilere-kampüs-içi-ulaşım-desteği',
    title: "itüöder'den Öğrencilere Kampüs İçi Ulaşım Desteği",
    summary:
      'Kampüs içi ulaşım desteği projesiyle İTÜ öğrencilerinin günlük yaşamlarını kolaylaştıracak bir adım daha atıldı.',
    date: '18 Şub 2025',
    category: 'Ulaşım Desteği',
    image: '/home/news-stand.png',
    imageAlt: "itüöder'den Öğrencilere Kampüs İçi Ulaşım Desteği",
  },
  {
    slug: 'psikolojik-destek-projesinde-i-lk-ay',
    title: 'Psikolojik Destek Projesinde İlk Ay',
    summary:
      'Psikolojik destek projesinin ilk ayında onlarca İTÜ öğrencisine ulaşıldı ve danışmanlık süreçleri başarıyla yürütüldü.',
    date: '10 Şub 2025',
    category: 'Psikolojik Destek',
    image: '/home/news-career.jpg',
    imageAlt: 'Psikolojik Destek Projesinde İlk Ay',
  },
  {
    slug: 'itüöder-ai-asistan',
    title: 'itüöder AI Asistan',
    summary:
      'itüöder, öğrencilerin sorularını hızlıca yanıtlamak ve bilgiye erişimi kolaylaştırmak için yapay zekâ destekli bir asistan geliştirdi.',
    date: '1 Şub 2025',
    category: 'Teknoloji',
    image: '/home/news-career.jpg',
    imageAlt: 'itüöder AI Asistan',
  },
  {
    slug: 'i̇tü-öğrencilerine-destek-olun-geleceğe-umut-olun',
    title: 'İTÜ Öğrencilerine Destek Olun, Geleceğe Umut Olun',
    summary:
      'Bağışçı olma çağrısıyla İTÜ öğrencilerinin eğitim süreçlerine katkıda bulunmak için bir kampanya başlatıldı.',
    date: '20 Oca 2025',
    category: 'Bağışçı Ol',
    image: '/home/news-dayanisma.jpg',
    imageAlt: 'İTÜ Öğrencilerine Destek Olun, Geleceğe Umut Olun',
  },
  {
    slug: 'ituoder-nedir-ve-neden-kuruldu',
    title: 'itüöder Nedir ve Neden Kuruldu?',
    summary:
      "İstanbul Teknik Üniversitesi Öğrencileri Derneği'nin kuruluş hikayesi, vizyonu ve öğrencilere sunmayı hedeflediği destekler hakkında bilgiler.",
    date: '10 Oca 2025',
    category: 'Hakkında',
    image: '/home/news-stand.png',
    imageAlt: 'itüöder Nedir ve Neden Kuruldu?',
  },
  {
    slug: 'ituoder-kurulus-ilkeleri',
    title: 'itüöder Kuruluş İlkeleri',
    summary:
      "itüöder'in temelini oluşturan kuruluş ilkeleri ve derneğin öğrencilere olan taahhütleri bu yazıda detaylıca açıklanıyor.",
    date: '5 Oca 2025',
    category: 'Hakkında',
    image: '/home/news-support.jpg',
    imageAlt: 'itüöder Kuruluş İlkeleri',
  },
  {
    slug: 'ituodere-neden-uye-olmaliyim',
    title: "itüöder'e Neden Üye Olmalıyım?",
    summary:
      'itüöder üyeliğinin sunduğu avantajlar, fırsatlar ve dayanışma ağının bir parçası olmanın değeri üzerine.',
    date: '1 Oca 2025',
    category: 'Üyelik',
    image: '/home/news-dayanisma.jpg',
    imageAlt: "itüöder'e Neden Üye Olmalıyım?",
  },
  {
    slug: 'ituoderin-ogrencilere-sundugu-firsatlar-neler',
    title: "itüöder'in Öğrencilere Sunduğu Fırsatlar Neler?",
    summary:
      "Fayda havuzundan kariyer desteğine, psikolojik danışmanlıktan hukuki yardıma kadar itüöder'in öğrencilere sunduğu tüm fırsatların özeti.",
    date: '28 Ara 2024',
    category: 'Fırsatlar',
    image: '/home/news-career.jpg',
    imageAlt: "itüöder'in Öğrencilere Sunduğu Fırsatlar Neler?",
  },
];
