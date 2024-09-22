import { PT_Serif } from 'next/font/google';
import { MdCheck } from 'react-icons/md';
import { LuLoader } from 'react-icons/lu';
import { Metadata } from 'next';

const roboto = PT_Serif({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Eczanecim',
  description: 'Eczanecim',
};

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-70px)]">
      <>
        <nav className="w-full bg-white py-5 transition-all duration-500 lg:fixed">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex w-full flex-col lg:flex-row">
              <div className="flex justify-between lg:flex-row">
                <h1 className={`${roboto.className} text-3xl text-gray-700`}>Eczanem</h1>
              </div>
              <div className="hidden w-full max-lg:py-4 lg:flex lg:pl-11" id="navbar"></div>
            </div>
          </div>
        </nav>
        <section className="h-full pt-0 lg:pl-8 lg:pt-20">
          <div className="m-5 overflow-hidden rounded-2xl bg-indigo-50 py-10 lg:m-0 lg:rounded-bl-2xl lg:rounded-tl-2xl xl:py-8 2xl:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="lg:gap32 grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
                <div className="w-full lg:col-span-6 xl:col-span-5 xl:-mx-0 2xl:-mx-5">
                  <div className="flex items-center justify-center text-sm font-medium text-gray-500 lg:justify-start">
                    <span className="mr-3 rounded-2xl bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                      #1
                    </span>
                    Olmak için tasarlandı...
                  </div>
                  <h1 className="font-manrope py-8 text-center text-5xl font-bold leading-[70px] text-gray-900 lg:text-left">
                    <span className="text-indigo-600">Sağlık Sektöründe</span> Yeni Standart
                  </h1>
                  <p className="text-center text-lg text-gray-500 lg:text-left">
                    Eczanem, kullanıcıların ilaçlarını kolayca sipariş edebileceği, reçetelerini
                    yönetebileceği ve evlerine teslim alabilecekleri yenilikçi platformdur.
                  </p>
                </div>
                <div className="block w-full lg:col-span-6 xl:col-span-7">
                  <div className="w-full rounded-3xl sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                    <img src="/banner.png" alt="Dashboard image" className="rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* text - end */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
            {/* feature - start */}
            <div className="flex divide-x rounded-lg border bg-gray-50">
              <div className="flex items-center p-2 text-indigo-500 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Erişim Kolaylığı</h3>
                <p className="text-gray-500">
                  Uygulama, reçeteleri doğrudan müşterilerin kapısına teslim ederek fiziksel bir
                  eczaneyi ziyaret etme ve sıra bekleme ihtiyacını ortadan kaldırır
                </p>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex divide-x rounded-lg border bg-gray-50">
              <div className="flex items-center p-2 text-indigo-500 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Fiyat Şeffaflığı</h3>
                <p className="text-gray-500">
                  Uygulama, satın almadan önce ilaç fiyatları hakkında net bilgiler sunarak
                  müşterilerin beklenmedik maliyetlerden kaçınmasına yardımcı olur. Şirket ayrıca
                  fiyatları daha da düşürmek için mevcut indirimleri otomatik olarak uygular
                </p>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex divide-x rounded-lg border bg-gray-50">
              <div className="flex items-center p-2 text-indigo-500 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Bütünleşik Ekosistem</h3>
                <p className="text-gray-500">
                  Uygulama, reçetelerin verimli bir şekilde yönetilmesini sağlamak için doktorları,
                  hastaları ve ilaç şirketlerini senkronize tutar. Bu, yeniden doldurmaların
                  takibini yapmaya ve ilaçların her zaman stokta olmasını sağlamaya yardımcı olur
                </p>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex divide-x rounded-lg border bg-gray-50">
              <div className="flex items-center p-2 text-indigo-500 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Müşteri Kolaylığı</h3>
                <p className="text-gray-500">
                  Müşteriler, eczacılarla kısa mesajlar aracılığıyla iletişim kurabilir ve bunun
                  müşterilerin ilaçları hakkında soru sorma olasılığını artırdığı kesin bir şekilde
                  tahmin ediliyor
                </p>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex divide-x rounded-lg border bg-gray-50">
              <div className="flex items-center p-2 text-indigo-500 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  {' '}
                  İlaç Bilgilendirmesi ve Yan Etkiler
                </h3>
                <p className="text-gray-500">
                  Kullanıcıların ilaçlarla ilgili detaylı bilgi almasını sağlar ve yan etkiler
                  hakkında bilgilendirir. Ayrıca, kullanıcılar doğrudan uygulama üzerinden
                  eczacılara danışabilirler.
                </p>
              </div>
            </div>
            {/* feature - end */}
            {/* feature - start */}
            <div className="flex divide-x rounded-lg border bg-gray-50">
              <div className="flex items-center p-2 text-indigo-500 md:p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Gizlilik ve Güvenlik</h3>
                <p className="text-gray-500">
                  Uygulama,kullanıcıların sağlık bilgilerini güvenli bir şekilde saklar ve ödeme
                  yöntemleri ve veri şifreleme gibi önlemlerle kullanıcı bilgilerinin bilgilerinin
                  korunmasını sağlar.
                </p>
              </div>
            </div>
            {/* feature - end */}
          </div>
        </div>
      </div>
      <>
        {/* Features */}
        <div className="overflow-hidden">
          <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            {/* Title */}
            <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-14">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-neutral-200 lg:text-4xl">
                Senin için buradayız. Dene, birlikte gelişelim
              </h2>
            </div>
            {/* End Title */}
            <div className="relative xl:mx-auto xl:w-10/12">
              {/* Grid */}
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-8">
                <div className="md:px-6">
                  {/* Card */}
                  {/* End Card */}
                </div>
              </div>
              {/* End Grid */}
              {/* SVG Element */}
              {/* End SVG Element */}
              {/* SVG Element */}
              <div className="absolute bottom-0 start-0 hidden -translate-x-16 translate-y-16 md:block">
                <svg
                  className="h-auto w-56 text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* End SVG Element */}
            </div>
            <div className="mt-7 text-center">
              <p className="text-xs text-gray-400"></p>
            </div>
          </div>
        </div>
        {/* End Features */}
      </>

      <>
        {/* FAQ */}
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          {/* Title */}
          <div className="mx-auto mb-10 max-w-5xl lg:mb-14">
            <h2 className="text-2xl font-bold dark:text-white md:text-4xl md:leading-tight">
              Sık Sorulan Sorular
            </h2>
          </div>
          {/* End Title */}
          <div className="mx-auto max-w-5xl divide-y divide-gray-200 dark:divide-neutral-700">
            <div className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 size-6 shrink-0 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200 md:text-lg">
                    Eczanem nedir?
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-neutral-500">
                    Eczanem,ilaçların stok durumunu anlık olarak gösterir, fiyat sunar ve sağlık
                    sunar ve sağlık hizmetlerine erişimi kolaylaştırarak zaman tasarrufu sağlar.
                    tasarrufu sağlar. Kullanıcılar ayrıca, eczacılara danışabilir ve ilaç
                    hatırlatmaları gibi ek hizmetlerden faydalanabilirler.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 size-6 shrink-0 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200 md:text-lg">
                    Beta süreci nedir ?
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-neutral-500">
                    Şu anda Uzmanrandevum uygulaması beta sürecindedir. Bu süreçte, uygulamamızı
                    kullanıcılarımızla buluşturuyor ve onların geri bildirimleri doğrultusunda
                    geliştirmeler yapıyoruz. Beta süreci boyunca tüm özelliklerimiz ücretsiz olarak
                    sunulmaktadır. Amacımız, sizlerden gelen geri dönüşlerle uygulamamızı daha da
                    iyileştirerek, tam sürümde en iyi deneyimi sunmaktır. Uygulamayı test ettiğiniz
                    ve geri bildirimde bulunduğunuz için teşekkür ederiz!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-8 first:pt-0 last:pb-0">
              <div className="flex gap-x-5">
                <svg
                  className="mt-1 size-6 shrink-0 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                <div className="grow">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200 md:text-lg">
                    Veri güvenliğini nasıl sağlıyoruz ?
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-neutral-500">
                    Uzmanrandevum uygulamasında veri güvenliğini en üst düzeyde tutmak için modern
                    teknolojiler ve güvenlik standartları kullanıyoruz. Tüm kullanıcı verileri,
                    güvenilir bir bulut veritabanı çözümü olan MongoDB Atlas üzerinde saklanmakta ve
                    verileriniz, güçlü şifreleme yöntemleriyle korunmaktadır. Ayrıca, uygulama
                    içerisindeki resim ve dosya gibi medya içerikleri, Amazon S3 üzerinde güvenli
                    bir şekilde depolanır. Amazon S3, dünya çapında kabul görmüş veri güvenliği ve
                    erişim kontrol önlemleri ile bilinir.
                  </p>
                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    Tüm bu güvenlik önlemleri, verilerinizin yetkisiz erişimlere karşı korunmasını
                    ve yalnızca yetkili kişilerin bu verilere erişebilmesini sağlamaktadır.
                    Verilerinizin güvende olduğundan emin olabilirsiniz, çünkü güvenlik bizim için
                    en öncelikli konulardan biridir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End FAQ */}
      </>
    </div>
  );
}
