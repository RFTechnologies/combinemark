import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/hero-banner.jpg"
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-6xl font-bold mb-6" data-aos="fade-down">COMBINE MARKETING</h1>
          <div className="bg-blue-600 text-white px-8 py-3 rounded-full mb-4" data-aos="fade-up" data-aos-delay="200">
            FIND ALL GOOD PROJECTS IN ONE PLACE
          </div>
          <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="400">Our goal then and now is to provide quality on time projects.</p>
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition"
            data-aos="fade-up" data-aos-delay="600"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-4">WELCOME TO THE COMBINE MARKETING</h2>
          <h3 className="text-xl mb-6">Where We Build Your Visions</h3>
          <p className="text-gray-600 mb-6">
            Search for Property in Pakistan right here. If you are looking to buy, sell and Rent Properties Specifically researched information in Pakistan then Combine Marketing's is the ideal Platform that will help you make the right choice by giving you valuable options from reliable sources. Find properties in Pakistan that will match your property requirements. The property that you have been Dreaming of is now just a click away.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <Image
            src="/image-1.jpg"
            alt="Welcome Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Buy and Sell Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <Image
              src="/image-2.jpg"
              alt="Buy and Sell"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl font-bold mb-6">BUY AND SELL</h2>
            <p className="text-gray-600">
              Combine Marketing is Pakistan's most comprehensive property website portal finder focused on improving the visual property viewing experience of users to help them make better-informed decisions regarding capital investment in the real estate sector.
            </p>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold mb-6">OUR COMBINE MARKETING MOTTO</h2>
          <p className="text-gray-600">
            Our Combine Marketing motto is simple "Keep clients happy, always be sincere & provide quality service as clients trust is our top priority".
          </p>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <Image
            src="/image-3.jpg"
            alt="Motto Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Consultation Section */}
      <section className="relative py-24">
        <Image
          src="/image-4.jpg"
          alt="Consultation Background"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative max-w-7xl mx-auto text-center text-white px-4">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-down">GET YOUR FREE CONSULTATION</h2>
          <p className="mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Combine Marketing is a Property Portal in Pakistan. We have a unique portal for Real-estate agents in Pakistan. Our focus is land selling and buying. We give platform to all real-estate agents or Real-estate agency in Pakistan.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition inline-block"
            data-aos="fade-up" data-aos-delay="400"
          >
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Image
              src="/ceo.jpeg"
              alt="CEO"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl font-bold mb-2">MESSAGE FROM CEO</h2>
            <h3 className="text-2xl font-bold mb-6">COMBINE MARKETING'S</h3>
            <h4 className="text-xl text-blue-600 mb-4">TAYYAB ANWAR RAO</h4>
            <p className="text-gray-600 mb-6">
              We started real estate consultation and construction in 2005 and after gaining the experience is relevant now fulfilling our clients need, we started advance marketing tool as combine marketing's.
            </p>
            <p className="text-gray-600">
              "Though many companies are working in real estate business but combine marketing's is known for its best services. It is providing services to customers and agents alike we connect buyers with sellers in a friendly environment."
            </p>
            <div className="mt-6">
              <p className="text-gray-600">📧 Email: info@combinemarketing.com</p>
              <p className="text-gray-600">📱 Phone: +923000111122</p>
              <div className="flex gap-4 mt-4">
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 