"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const PaymentMethodOne: React.FC = () => {
  return (
    <section className='bg-neutral-10 py-140 z-1 overflow-hidden'>
      <div className='container'>
        <h2
          className='fw-normal text-dark-600 tw-mb-80-px h1 text-center'
          data-aos='fade-up'
          data-aos-duration={800}
        >
          Payment Method
        </h2>
        <div className=''>
          <div className='payment-mathod-marquee overflow-hidden tw-h-180-px'>
            <Marquee speed={50} gradient={false} pauseOnHover={true}>
              <div className='px-4'>
                <div className='single'>
                  <Image
                    width={161}
                    height={108}
                    src='/assets/images/companies/bca.svg'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='px-4'>
                <div className='single'>
                  <Image
                    width={161}
                    height={108}
                    src='/assets/images/companies/bri.svg'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='px-4'>
                <div className='single'>
                  <Image
                    width={161}
                    height={108}
                    src='/assets/images/companies/dana.svg'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='px-4'>
                <div className='single'>
                  <Image
                    width={161}
                    height={107}
                    src='/assets/images/companies/gopay.svg'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='px-4'>
                <div className='single'>
                  <Image
                    width={161}
                    height={108}
                    src='/assets/images/companies/jago.svg'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='px-4'>
                <div className='single'>
                  <Image
                    width={163}
                    height={108}
                    src='/assets/images/companies/ovo.svg'
                    alt='Image'
                  />
                </div>
              </div>
              <div className='px-4'>
                <div className='single'>
                  <Image
                    width={162}
                    height={108}
                    src='/assets/images/companies/seabank.svg'
                    alt='Image'
                  />
                </div>
              </div>
              {/* <div className='px-4'>
                <div className='single'>
                  <Image
                    width={162}
                    height={108}
                    src='/assets/images/companies/paypal.svg'
                    alt='Image'
                  />
                </div>
              </div> */}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodOne;
