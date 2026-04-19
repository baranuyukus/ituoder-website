export interface FaqAction {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string[];
  action?: FaqAction;
}

export interface FaqSection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
}

export const faqHighlights = [
  {
    value: "%100",
    label: "Gönüllü yapı",
    description: "itüöder tamamen gönüllü İTÜ öğrencileri tarafından yürütülür.",
  },
  {
    value: "85 TL",
    label: "Aylık aidat",
    description: "Üyelik katkısı bir kahve fiyatı gibi düşünülerek erişilebilir tutulur.",
  },
  {
    value: "5 iş günü",
    label: "Onay süresi",
    description: "Aidat ödemesi sonrası başvurular en geç 5 iş günü içinde sonuçlanır.",
  },
] as const;

export const faqSections: FaqSection[] = [
  {
    id: "dernek",
    eyebrow: "Dernek Hakkında",
    title: "itüöder nasıl bir yapı?",
    description:
      "Topluluğun ne yaptığı, nasıl organize olduğu ve hangi ilkelerle hareket ettiğiyle ilgili temel sorular burada.",
    items: [
      {
        question: "itüöder nedir?",
        answer: [
          "itüöder, İTÜ öğrencilerinin birbirine destek olduğu ve ihtiyaçlarını karşılayabilmesi için çeşitli projeler geliştiren bir dernektir.",
          "Amaç, öğrencilerin hem akademik hem de sosyal yaşamlarını daha kolay ve keyifli hale getirmek, onlara yardımcı olmaktır. Biz de hep birlikte büyüyen bir aileyiz.",
        ],
      },
      {
        question: "itüöder kimlerden oluşuyor?",
        answer: [
          "itüöder'de tamamen gönüllü İTÜ öğrencileri faaliyet gösteriyor.",
          "Biz, İTÜ’lülerin ihtiyaçlarını en iyi yine İTÜ’lülerin anlayacağına inanıyoruz.",
        ],
      },
      {
        question: "itüöder faaliyetlerini nasıl finanse eder?",
        answer: [
          "Aidatlar ve bağışlar sayesinde projelerimizi hayata geçiriyoruz.",
          "Bu desteklerle İTÜ öğrencilerine daha fazla imkan sunuyoruz.",
        ],
      },
      {
        question: "itüöder'in işleyişinde hangi ilkeler ön plandadır?",
        answer: [
          "Bizim karakterimizi oluşturan 8 kuruluş ilkemiz var.",
          "Derneğin yaklaşımını ve karar alma biçimini şekillendiren bu ilkelere ayrıca göz atmayı unutma.",
        ],
        action: {
          label: "Kuruluş İlkeleri",
          href: "/post/ituoder-kurulus-ilkeleri",
        },
      },
    ],
  },
  {
    id: "uyelik",
    eyebrow: "Üyelik",
    title: "Üyelik süreci ve koşulları",
    description:
      "Kimlerin üye olabileceği, aidat, başvuru süreci ve üyelik sonrası bekleyebileceğin detaylar burada yer alıyor.",
    items: [
      {
        question: "Kimler itüöder üyesi olabilir?",
        answer: [
          "İTÜ’de okuyan ya da mezun olmuş herkes üye olabilir.",
          "İTÜ’lüysen aramıza katılabilirsin.",
        ],
      },
      {
        question: "itüöder'e nasıl üye olurum?",
        answer: [
          "Web sitemizdeki üyelik formunu doldur ve aidatını öde, başvurun tamam.",
          "Süreç oldukça kısa ve tamamen online ilerliyor.",
        ],
        action: {
          label: "itüöder'li ol",
          href: "/uye-ol",
        },
      },
      {
        question: "Üyelik için gereken aidat ne kadar ve nasıl ödenir?",
        answer: [
          "Aylık üyelik aidatı sadece 85 TL.",
          "Bir kahve parası gibi düşünebilirsin; her ay bir kahve de başka bir İTÜ’lü arkadaşına ısmarlıyormuşsun gibi. Ödemeni online olarak, başvuru sırasında yönlendirilen ödeme sistemimiz üzerinden kolayca yapabilirsin.",
        ],
      },
      {
        question: "Aidat ödemesi yapmazsam ne olur?",
        answer: [
          "Aidatını ödemezsen başvurun tamamlanmış sayılmıyor ve 5 gün içinde geçerliliğini yitiriyor.",
          "Başvurunun aktif kalması için ödeme adımını tamamlamayı unutma.",
        ],
      },
      {
        question: "Üyelik avantajları nelerdir?",
        answer: [
          "Özel indirimlerden, etkinliklerden, kariyer desteklerinden ve daha birçok fırsattan faydalanabilirsin.",
          "Kısacası her şey, İTÜ öğrencilerinin tek derdi öğrenmek olsun diye tasarlanıyor.",
        ],
      },
      {
        question: "Üyeliğim ne kadar sürede onaylanıyor?",
        answer: [
          "Aidatını ödedikten sonra başvurun en geç 5 iş günü içinde onaylanıyor.",
          "Eğer 5 gün geçtiyse spam kutunu kontrol etmeyi unutma. Hala onay mailini bulamadıysan dernek@ituogrenci.org.tr adresinden bizimle iletişime geçebilirsin.",
        ],
        action: {
          label: "İletişime Geç",
          href: "/iletisim",
        },
      },
      {
        question: "Üyelik iptali nasıl yapılır? Aidat iadesi mümkün mü?",
        answer: [
          "Üyeliğini iptal etmek istersen dernek@ituogrenci.org.tr adresinden bizimle iletişime geçebilirsin.",
          "Ancak ödenen aidatlar iade edilmiyor; bunu başvuru öncesinde göz önünde bulundurmanı öneririz.",
        ],
      },
    ],
  },
  {
    id: "destek",
    eyebrow: "Katkı & Destek",
    title: "Topluluğa nasıl destek olabilirsin?",
    description:
      "Gönüllülükten bağışa, kurumsal iş birliklerinden günlük desteğe kadar topluluğa katkı sunmanın yolları burada.",
    items: [
      {
        question: "Bir İTÜ öğrencisi olarak nasıl destek olabilirim?",
        answer: [
          "Öncelikle itüöder üyesi olman en büyük destek.",
          "Bununla beraber bizi arkadaşlarına anlatabilir, sosyal medya paylaşımlarımızı yayabilir veya topluluk hakkında farkındalık yaratabilirsin.",
        ],
      },
      {
        question: "Nasıl itüöder'de gönüllü olarak faaliyet gösterebilirim?",
        answer: [
          "itüöder’de gönüllü olmak istersen dernek@ituogrenci.org.tr adresine e-posta göndererek bizimle iletişime geçebilirsin.",
          "Seni aramızda görmekten mutluluk duyarız.",
        ],
      },
      {
        question: "Gönüllü desteği sağlamak için özel beceri veya bilgiye ihtiyacım var mı?",
        answer: [
          "Eğer “Ben itüöder'e X konusunda katkı sağlayabilirim.” cümlesindeki X'in yerine bir şey koyabiliyorsan bu iş tamamdır.",
          "Bizimle iletişime geçmen yeterli; katkını birlikte doğru yerde değerlendirebiliriz.",
        ],
      },
      {
        question: "Bağış yaparak itüöder'e destek olabilir miyim?",
        answer: [
          "Evet, bağış yaparak itüöder projelerine destek olabilirsin.",
          "Tüm kaynaklarımız öğrencilerin ihtiyaçları doğrultusunda değerlendiriliyor.",
        ],
        action: {
          label: "Bağışçı Ol",
          href: "/bagisci-ol",
        },
      },
      {
        question: "Bağışlarım nereye harcanır?",
        answer: [
          "Yaptığın düzenli bağışlar; İTÜ öğrencilerinin eğitimden barınmaya, kariyerden sosyal yaşama kadar pek çok alandaki ihtiyaçlarını gidermek için kullanılır.",
        ],
      },
      {
        question: "Şirketim veya kurumum nasıl destek olabilir?",
        answer: [
          "Destekçimiz veya sponsorumuz olmak için dernek@ituogrenci.org.tr adresine e-posta gönderebilirsin.",
          "Tanışmak ve olası iş birliklerini konuşmak için bir araya gelebiliriz. Dönüş yapmak ve fikirleri hayata geçirmekte oldukça hızlıyızdır.",
        ],
      },
    ],
  },
] as const;
