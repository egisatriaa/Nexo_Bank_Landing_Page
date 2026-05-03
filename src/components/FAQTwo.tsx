import Image from "next/image";

const FAQTwo: React.FC = () => {
  return (
    <section className='bg-neutral-10 py-140 z-1 overflow-hidden'>
      <div className='container'>
        <div className='justify-content-center mx-auto'>
          <div className='tw-mb-80-px'>
            <div
              className='d-flex align-items-center justify-content-center text-center tw-mb-3'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <span>
                <Image
                  width={27}
                  height={27}
                  src='/assets/images/icon/star-icon3.png'
                  alt='Image'
                />
              </span>
              <h5 className='text-base-two-600 fw-normal cursor-big'>Faq</h5>
            </div>
            <div className='max-w-560 text-center justify-content-center align-items-center mx-auto'>
              <h2
                className='fw-normal text-dark-600 cursor-big'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                Frequently Asked Questions
              </h2>
            </div>
          </div>
          <div className=''>
            <div
              className='accordion d-flex justify-content-center tw-gap-6 flex-wrap'
              id='accordionExample'
            >
              <div className='max-w-636 w-100'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button bg-white rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Kami menawarkan berbagai layanan perbankan digital termasuk transfer uang instan, pembukaan rekening tabungan secara online, pembayaran tagihan, serta sistem manajemen keuangan pribadi yang aman dan efisien.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      How do I access online and mobile banking?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Anda dapat mengakses layanan kami melalui website resmi Nexo Bank atau mengunduh aplikasi mobile kami di Google Play Store dan Apple App Store. Cukup daftar menggunakan KTP dan email aktif Anda.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      What fees should I expect?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Nexo Bank berkomitmen pada transparansi. Biaya administrasi bulanan kami sangat rendah, dan banyak layanan seperti transfer antar bank tertentu atau pembayaran QRIS tidak dikenakan biaya tambahan.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      What security measures protect my information?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Kami menggunakan enkripsi tingkat tinggi, autentikasi dua faktor (2FA), dan sistem pemantauan transaksi real-time untuk memastikan data dan dana Anda selalu terlindungi dari akses yang tidak sah.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='max-w-636 w-100'>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      How do I update my personal information?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Anda dapat memperbarui informasi pribadi seperti alamat atau nomor telepon melalui menu Pengaturan Akun di aplikasi Nexo Bank, atau dengan menghubungi layanan pelanggan kami.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSix'
                      aria-expanded='false'
                      aria-controls='collapseSix'
                    >
                      How do I apply for a loan?
                    </button>
                  </h2>
                  <div
                    id='collapseSix'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Pengajuan pinjaman dapat dilakukan langsung melalui aplikasi kami pada menu 'Pinjaman'. Cukup lengkapi data pendukung dan tim kami akan melakukan verifikasi dalam waktu singkat.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSeven'
                      aria-expanded='false'
                      aria-controls='collapseSeven'
                    >
                      Who do I contact for further assistance?
                    </button>
                  </h2>
                  <div
                    id='collapseSeven'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Tim dukungan pelanggan kami siap membantu 24/7. Anda dapat menghubungi kami melalui fitur Chat di aplikasi, email ke support@nexobank.com, atau melalui nomor call center resmi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid'
                  data-aos='fade-up'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header cursor-big'>
                    <button
                      className='accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseEight'
                      aria-expanded='false'
                      aria-controls='collapseEight'
                    >
                      How can I reset my password?
                    </button>
                  </h2>
                  <div
                    id='collapseEight'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='fw-normal tw-text-lg text-dark-600'>
                        Jika Anda lupa password, klik 'Lupa Password' di halaman login. Kami akan mengirimkan kode verifikasi ke email atau nomor telepon yang terdaftar untuk mereset password Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQTwo;
