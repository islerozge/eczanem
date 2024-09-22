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
                    Uzmanrandevum, doktorlar için randevu yönetimi, özelleştirilebilir web sitesi
                    oluşturma ve AI destekli blog yazma özellikleri sunan bir platformdur. Hem
                    doktorlar hem de hastalar için pratik çözümler sunar.
                  </p>
                  <div className="flex flex-col items-center lg:flex-row">
                    <div className="flex items-center">
                      <img
                        src="https://pagedone.io/asset/uploads/1694846673.png"
                        alt="Rounded image"
                        className="relative z-50 rounded-full border-2 border-solid border-indigo-50"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1694846691.png"
                        alt="Rounded image"
                        className="relative z-30 -ml-3 rounded-full border-2 border-solid border-indigo-50"
                      />
                      <img
                        src="https://pagedone.io/asset/uploads/1694846704.png"
                        alt="Rounded image"
                        className="relative z-20 -ml-3 rounded-full border-2 border-solid border-indigo-50"
                      />
                    </div>
                    <span className="mt-3 text-base font-medium text-gray-600 lg:ml-3">
                      Bekleme listesine katıl
                    </span>
                  </div>
                </div>
                <div className="block w-full lg:col-span-6 xl:col-span-7">
                  <div className="w-full rounded-3xl sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                    <img src="/2.png" alt="Dashboard image" className="rounded-2xl" />
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
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Kolay Randevu Oluşturma</h3>
                <p className="text-gray-500">
                  Kullanıcılar, doktorlarının uygun saatlerini kolayca görüntüleyip, birkaç tıklama
                  ile randevularını oluşturabilirler. Bu özellik, zaman kaybetmeden hızlı bir
                  şekilde randevu almayı sağlar.
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
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Esnek Randevu Yönetimi</h3>
                <p className="text-gray-500">
                  Randevularınızı iptal etmek veya başka bir güne taşımak artık çok kolay. Bu
                  özellik sayesinde, kullanıcılar ve doktorlar planlarını hızlıca
                  güncelleyebilirler.
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
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Kullanıcı Dostu Arayüz</h3>
                <p className="text-gray-500">
                  Basit ve modern tasarımı ile uygulamamız, her yaş grubundan kullanıcı için kolay
                  kullanım sunar. Bu özellik, uygulamanın hızlı ve pratik bir şekilde kullanılmasını
                  sağlar.
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
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Anlık Bildirimler</h3>
                <p className="text-gray-500">
                  Randevu onayları, iptaller ve hatırlatmalar için anlık bildirimler alarak hiçbir
                  önemli gelişmeyi kaçırmazsınız. Bu özellik, kullanıcıların her zaman güncel
                  kalmasını sağlar.
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
                <h3 className="mb-2 text-lg font-semibold md:text-xl">Web Sitesi Yönetimi</h3>
                <p className="text-gray-500">
                  Doktorlar, kendi profesyonel web sitelerini oluşturup, özelleştirebilir ve
                  yönetebilirler. Bu özellik, doktorların dijital varlıklarını güçlendirmelerine
                  yardımcı olur.
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
                <h3 className="mb-2 text-lg font-semibold md:text-xl">AI Destekli Blog Yazma</h3>
                <p className="text-gray-500">
                  Doktorlar, uygulama içindeki blog yazıları için AI destekli içerik oluşturma
                  araçlarını kullanabilirler. Bu özellik, zaman kazandırırken, yaratıcı ve
                  bilgilendirici içerikler üretmeyi kolaylaştırır.
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
                  <div className="relative z-10 rounded-xl border bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 md:p-10">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                      Uzman Profili
                    </h3>
                    <div className="text-sm text-gray-500 dark:text-neutral-500">
                      Randevularını, websiteni yönet. Görünürlüğünü artır.
                    </div>
                    <div className="mt-5">
                      <span className="text-6xl font-bold text-gray-800 dark:text-neutral-200">
                        0
                      </span>
                      <span className="ms-3 text-gray-500 dark:text-neutral-500">₺ / aylık</span>
                    </div>
                    <div className="mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0">
                      {/* List */}
                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <MdCheck className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Online randevu yönetimi
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <MdCheck className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Randevu hatırlatma
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <MdCheck className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Detaylı profil ile tanınırlılığını artır
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <MdCheck className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Tamamlanmayan randevu sayısını azalt
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <MdCheck className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Gerçek değerlendirmelerini gör
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <MdCheck className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Daha fazlası...
                          </span>
                        </li>
                      </ul>
                      {/* End List */}
                      {/* List */}
                      <ul className="space-y-2 text-sm sm:text-base">
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <LuLoader className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Profesyonel websitesi
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <LuLoader className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">Video yükleme</span>
                        </li>
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <LuLoader className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Blog sayfası. AI destekli içerik üretme uygulaması
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <LuLoader className="size-3.5" />
                          </span>
                          <span className="text-gray-800 dark:text-neutral-200">
                            Daha fazlası...
                          </span>
                        </li>
                      </ul>
                      {/* End List */}
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                      <div>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                          Beta süreci tamamen ÜCRETSİZDİR.
                        </p>
                        <p className="text-sm text-gray-500 dark:text-neutral-500">
                          Beta sürecine dahil olmanız için kart bilgileriniz gerekmez.
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="inline-flex hidden items-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-transparent dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Bekleme Listesine Gir
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
              </div>
              {/* End Grid */}
              {/* SVG Element */}
              <div className="absolute end-0 top-0 hidden translate-x-16 translate-y-16 md:block">
                <svg
                  className="h-auto w-16 text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
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
                    Uzmanrandevum nedir ?
                  </h3>
                  <p className="mt-1 text-gray-500 dark:text-neutral-500">
                    Uzmanrandevum, bir doktorun günlük, haftalık veya aylık çalışma saatlerini,
                    mevcut randevularını ve müsaitlik durumlarını gösteren bir planlayıcıdır.
                    Uzmanrandevum uygulaması aracılığıyla doktorlar kendi takvimlerini kolayca
                    yönetebilir ve hastalar, doktorların uygun olduğu saat dilimlerine göre randevu
                    alabilir. Bu takvim sayesinde hem doktorlar hem de hastalar, randevuların
                    düzenli ve planlı bir şekilde ilerlemesini sağlar.
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
