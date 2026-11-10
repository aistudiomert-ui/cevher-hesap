# Cevher Hesap Aracı

Cevher hazırlama tesisi hesapları için tek dosyalık web uygulaması: verim hesabı (verim, ürünler veya yalnızca tenörler belli iken), pülp, devreden yük, Bond enerji ve elek verimi.

- Canlı adres: https://aistudiomert-ui.github.io/cevher-hesap/
- Telefonda veya bilgisayarda "Ana ekrana ekle / Uygulamayı yükle" ile kurulur, ilk açılıştan sonra çevrimdışı çalışır.
- Tüm hesaplar cihazda yapılır; hiçbir veri sunucuya gönderilmez. Son girişler yalnızca cihazın kendi tarayıcı deposunda saklanır.

Formüller cevher hazırlama literatüründeki standart kütle ve metal dengesi bağıntılarına (Wills, Mineral Processing Technology) dayanır.

## Güncelleme

Kaynak dosya `cevher-hesap.html` bu deponun dışındaki proje klasöründe tutulur. `build-site.sh` çalıştırılınca bu klasördeki `index.html` yeniden üretilir ve `sw.js` sürüm damgası yenilenir; sonra `git commit` ve `git push` ile yayınlanır. GitHub Pages bir iki dakika içinde yeni sürümü dağıtır; açık olan uygulamalar bir sonraki açılışta güncellenir.
