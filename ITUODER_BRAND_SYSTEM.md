# itüöder Marka ve Proje Sistemi

## Bu Dokümanın Amacı

Bu doküman, yeni `Astro + Tailwind + daisyUI` tabanlı itüöder sitesinde şu ana kadar alınan marka, tasarım ve içerik taşıma kararlarını tek yerde toplamak için hazırlandı.

Amaç:

- markanın anlamını ve tonunu netleştirmek
- renk, tipografi ve yüzey sistemini standardize etmek
- şu ana kadar hangi sayfaların nasıl ele alındığını belgelemek
- bundan sonraki sayfalarda aynı kalite ve tutarlılıkla ilerleyebilmek

---

## Marka Anlamı

`itüöder`, yalnızca bir öğrenci topluluğu değil; İTÜ öğrencilerinin ihtiyaçlarını duyan, bunlara hızlı refleks veren ve dayanışmayı gündelik hayatın parçası haline getiren bir yapı olarak konumlanıyor.

Marka algısı şu 4 omurga üzerine kuruluyor:

1. `Dayanışma`
   Öğrenciler yalnız kalmasın diye çalışan, ihtiyaç anında temas eden bir yapı.

2. `Erişilebilirlik`
   Destek mekanizmaları, fırsatlar ve üyelik avantajları kolay ulaşılır olmalı.

3. `Genç ama kurumsal duruş`
   Görsel dil modern, enerjik ve canlı olabilir; ancak güven veren, düzenli ve ciddi de görünmelidir.

4. `Sahicilik`
   Fazla parlak, yapay, “AI landing page” hissi veren bir görünümden kaçınılır.

Kısa marka özeti:

> İTÜ öğrencilerinin birbirine destek olduğu, sahada ve dijitalde gerçek fayda üreten modern öğrenci dayanışma ağı.

---

## Marka Tonu

Metinlerde ve arayüzde hedef ton:

- sıcak
- kapsayıcı
- güvenilir
- net
- genç ama abartısız

Kaçınılması gereken ton:

- aşırı kurumsal ve soğuk
- fazla kampanya sitesi gibi bağıran
- trend odaklı ama temelsiz
- karmaşık ve dağınık

---

## Renk Paleti

Ana marka paleti:

- `#FFFFFF`
- `#F5F5F7`
- `#FF9700`
- `#1B1B1B`
- `#000000`

Kontur ve çizgi sistemi:

- `rgba(27, 27, 27, 0.11)` kullanılıyor
- daha güçlü kontur gerektiğinde `rgba(27, 27, 27, 0.18)` kullanılıyor

Renk rolleri:

- `#FF9700`
  Ana aksan, CTA ve marka enerjisi

- `#1B1B1B`
  Ana metin rengi, koyu yüzeyler, güçlü kontrast alanları

- `#F5F5F7`
  Kırık beyaz zemin, kart içi yumuşak yüzeyler, ikinci seviye alanlar

- `#FFFFFF`
  Temiz ana yüzey, kart ön planı

- `#000000`
  Gerektiğinde maksimum kontrast ve derin vurgu

Sayfa bazlı yardımcı aksanlar:

- `Psikolojik Destek` sayfasında ek aksan olarak `#00B4D8` kullanıldı.
- Bu renk ana marka paletinin yerine geçmez; sadece ilgili programın karakterini destekler.

---

## Tipografi

Projede tüm ana tipografi `Coolvetica` ailesine taşındı.

Kullanılan dosyalar:

- `/Users/baranuyukus/Desktop/ituoder/website/public/fonts/coolvetica.woff2`
- `/Users/baranuyukus/Desktop/ituoder/website/public/fonts/coolvetica.woff`
- `/Users/baranuyukus/Desktop/ituoder/website/public/fonts/coolvetica-bold.woff2`
- `/Users/baranuyukus/Desktop/ituoder/website/public/fonts/coolvetica-bold.woff`

Tipografi yaklaşımı:

- başlıklarda güçlü, kompakt, karakterli görünüm
- gövde metninde okunabilirlik
- sıkı ama kontrollü harf aralığı
- büyük başlıklarda güçlü dikey ritim

Not:

- Sitenin genel karakteri artık font üzerinden de daha “markalı” ve daha ayırt edilebilir durumda.

---

## Tasarım Sistemi

### 1. Layout

Temel container:

- `--shell-width: 76rem`
- ortak sınıf: `.site-shell`

Amaç:

- her sayfanın aynı grid disiplininde oturması
- section’lar arasında hizalama bütünlüğü kurulması

### 2. Dikey Boşluk Sistemi

Standart section aralıkları:

- `.section-space`
- `.section-space-tight`

Bu sayede:

- her blok kendi içinde düzenli nefes alıyor
- sayfalar arasında ritim korunuyor

### 3. Kart Sistemi

Temel kart sınıfı:

- `.surface-card`

Özellikler:

- büyük ve tutarlı radius
- kırık siyah kontur
- hafif ama premium gölge
- temiz beyaz/kırık beyaz yüzey

### 4. Etiket Sistemi

Küçük bölüm etiketi:

- `.eyebrow`

Kullanım amacı:

- bölüm tipini göstermek
- başlıktan önce görsel hiyerarşi kurmak

### 5. Başlık Sistemi

Ana başlık sınıfı:

- `.section-title`

Özellikler:

- clamp tabanlı ölçek
- sıkı satır yüksekliği
- güçlü negatif tracking

### 6. Buton Sistemi

Ana CTA:

- `.btn-primary`

İkincil CTA:

- beyaz/kırık beyaz yüzey
- konturlu yapı
- hover anında ters kontrast veya koyu yüzeye geçiş

---

## Görsel Dil

Temel yaklaşım:

- modern
- temiz
- premium restraint
- güvenilir
- yapılandırılmış

Kaçınılan şeyler:

- fazla glow
- anlamsız gradient kalabalığı
- rastgele kart dili
- her section’da farklı tasarım sistemi varmış hissi

Kullanılan görsel prensipler:

- büyük ama kontrollü radius
- düşük dozda blur/glow
- beyaz yerine çoğu yerde `#F5F5F7` ile daha yumuşak yüzey
- turuncunun sadece gerçekten vurgu gereken yerde kullanılması

---

## Teknik Stack

Frontend:

- `Astro`
- `Tailwind CSS`
- `daisyUI`

İçerik yaklaşımı:

- sayfa bileşenleri mümkün olduğunca sade tutuluyor
- tekrar eden içerik/veri yapıları `src/data` altında tutuluyor
- görseller proje içinde lokal olarak saklanıyor

Bu yaklaşımın avantajları:

- sayfa düzeni ile içerik birbirinden ayrılıyor
- sonraki sayfalarda hız ve tutarlılık sağlanıyor
- içerik güncellemesi daha kolay hale geliyor

---

## SEO ve Mevcut Siteyi Taşıma Yaklaşımı

Bu projede en kritik kararlardan biri mevcut URL yapısını korumak oldu.

Bu nedenle önce eski siteyi envanterleyen bir crawler hazırlandı:

- `/Users/baranuyukus/Desktop/ituoder/site_url_inventory.py`

Crawler’ın amacı:

- tüm URL’leri çıkarmak
- canonical path’leri görmek
- HTML kopyalarını almak
- sayfa metinlerini dışa aktarmak
- tüm görselleri indirmek
- görsellerin hangi sayfada kullanıldığını kaydetmek

Üretilen kaynak yapı:

- `output/page_htmls`
- `output/page_texts`
- `output/images`
- `output/image_occurrences.csv`

Bu sayede yeni siteyi “sıfırdan tahmin ederek” değil, mevcut sitenin gerçek içeriklerini ve görsellerini kullanarak yeniden kurma yaklaşımı benimsendi.

---

## İzlenen Yol

Projede şu yöntem izlendi:

1. `URL envanteri çıkarıldı`
   SEO açısından korunması gereken rotalar netleştirildi.

2. `Eski içerik arşivlendi`
   HTML, metin, görsel ve görsel yerleşim bilgileri toplandı.

3. `Önce global tasarım dili kuruldu`
   Navbar, footer, renk, font, card sistemi ve spacing sistemi oturtuldu.

4. `Ana sayfa yeniden kurgulandı`
   Marka hissi ve tüm sistem ilk önce ana sayfada test edildi.

5. `Sonra önemli içerik sayfaları sırayla taşındı`
   Her sayfa eski içerikten beslendi ama yeni temaya göre yeniden düzenlendi.

6. `Sayfa bazlı veri dosyaları oluşturuldu`
   İçerik yapıları sürdürülebilir hale getirildi.

7. `Her büyük değişiklikte build kontrolü alındı`
   Production’a uygun kalmak için `npm run build` ile doğrulama yapıldı.

---

## Şu Ana Kadar Yapılanlar

### Global Düzeyde

- yerel `Coolvetica` font sistemi eklendi
- ortak renk paleti netleştirildi
- kontur ve yüzey sistemi kuruldu
- header / footer yapısı modernize edildi
- mobil/masaüstü ortak grid mantığı kuruldu

### Yeniden Tasarlanan veya Güçlü Şekilde Ele Alınan Alanlar

- ana sayfa
- `Sıkça Sorulan Sorular`
- `Psikolojik Destek`
- `Saha Projeleri`
- `Hakkımızda`
- `İletişim`
- `Üye Ol`
- `Yönetim Kurulumuz`

### Sayfa Bazlı Veri Yapıları

- `src/data/homepage.ts`
- `src/data/faq.ts`
- `src/data/psychological-support.ts`
- `src/data/field-projects.ts`

Bu dosyalar, sayfa içeriklerinin bileşenlerden ayrılmasını sağlıyor.

---

## Psikolojik Destek Sayfası İçin Alınan Ek Karar

Bu sayfa marka sisteminin altına yerleşen program odaklı bir aksan diline sahip.

Ek renk:

- `#00B4D8`

Kullanım amacı:

- mental sağlık desteğini diğer içeriklerden ayırmak
- daha sakin, daha güven veren ve daha “iyi olma hali” odaklı bir ton kurmak

Kural:

- bu mavi, global marka renginin yerine geçmez
- sadece ilgili programın yardımcı rengi olarak kullanılır

---

## Saha Projeleri Sayfası İçin Alınan Karar

Bu sayfada öncelik:

- doğrudan saha etkisini görünür kılmak
- öğrencinin hayatına değen somut işleri öne çıkarmak
- görselleri “kanıt” gibi kullanmak

Bu nedenle tasarım yaklaşımı:

- büyük editoryal bloklar
- güçlü görsel + net başlık + ölçülebilir etki metrikleri
- proje bazlı ayrışan ama aynı sisteme bağlı kartlar

---

## Bundan Sonraki Sayfalarda Uygulanacak Kurallar

Yeni tasarlanacak her sayfada:

1. önce eski içerik `output` klasöründen okunacak
2. mevcut URL aynen korunacak
3. gerekiyorsa sayfa için ayrı `src/data/*.ts` dosyası açılacak
4. görseller lokal `public/...` altına taşınacak
5. global sistem bozulmadan sayfa özelinde aksanlar eklenecek
6. her sayfa sonunda `npm run build` ile doğrulama yapılacak

---

## Tasarımda Korunması Gereken Ana İlkeler

- beyaz yerine gerektiğinde kırık beyaz kullan
- turuncuyu her yerde değil, vurgu gereken yerde kullan
- kart radius ve kontur sistemini bozma
- farklı sayfalarda farklı site hissi verme
- içerik yapısını koru ama düzenini iyileştir
- “modern” olmak için gereksiz efekt ekleme
- gerçek kurum hissini koru

---

## Mevcut Önemli Dosyalar

Tema ve global sistem:

- `/Users/baranuyukus/Desktop/ituoder/website/src/styles/global.css`

Ana sayfa:

- `/Users/baranuyukus/Desktop/ituoder/website/src/pages/index.astro`
- `/Users/baranuyukus/Desktop/ituoder/website/src/data/homepage.ts`

FAQ:

- `/Users/baranuyukus/Desktop/ituoder/website/src/pages/sikca-sorulan-sorular.astro`
- `/Users/baranuyukus/Desktop/ituoder/website/src/data/faq.ts`

Psikolojik destek:

- `/Users/baranuyukus/Desktop/ituoder/website/src/pages/psikolojik-destek.astro`
- `/Users/baranuyukus/Desktop/ituoder/website/src/data/psychological-support.ts`

Saha projeleri:

- `/Users/baranuyukus/Desktop/ituoder/website/src/pages/saha-projeleri.astro`
- `/Users/baranuyukus/Desktop/ituoder/website/src/data/field-projects.ts`

Crawler ve içerik arşivi:

- `/Users/baranuyukus/Desktop/ituoder/site_url_inventory.py`
- `/Users/baranuyukus/Desktop/ituoder/output`

---

## Kısa Sonuç

Bu proje bir “tema giydirme” işi değil; mevcut itüöder sitesinin içerik, rota ve marka değerlerini koruyarak daha güçlü, daha modern, daha düzenli ve daha sürdürülebilir bir frontend sisteme taşınmasıdır.

Ana hedef:

> itüöder’i öğrenci işi bir heyecanla ama profesyonel ürün kalitesinde göstermek.
