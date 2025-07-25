import Image from 'next/image'
import Link from 'next/link'

export default function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("/About Us Hero Banner.jpg")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full z-10">
          <h1 className="text-6xl font-bold text-white sm:text-3xl text-center" data-aos="fade-up">
            ABOUT COMBINE MARKETINGS
          </h1>
        </div>
      </section>

      {/* What is COMBINE MARKETINGS Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <Image
              src="/About us Image1.jpg"
              alt="About Us Interior"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">What is COMBINE MARKETINGS</h2>
            <p className="text-gray-600 mb-6">
              We started Real estate Consultation and Construction in 2005 and after gaining the Experience in Relevant now fulfilling our clients need, we started advance marketing tool as Combine Marketing's. "Though many companies are working in real estate business but Combine Marketing's is known for its best services. It is Providing services to Customers and agents alike we connect buyers with sellers in a friendly Environment. Likewise, we connect Landlords with tenants. Similarly, we connect agents with Customers for the smooth running of process. Moreover, all ends of properties are available. In short, you get everything regarding Real estate at one Platform how do we make your requirement fulfilled through our Platform so easy. It comes down to tying the top Digital Real estate marketing strategies into cohesive campaigns that connect with home buyers on their Desktop Computers and mobile devices. Our main services are to provide our clients Residential and Commercial property on best prices in the market"
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to provide the best options in real estate industry to the clients who are interested in property investment is reliable projects or interested to buy commercial or residential options for their own use. Our entire staff is always courteous and accommodating. We serve as ambassadors on your behalf. We establish schedules, we meet deadlines and maintain records for every event and meeting. If a communication needs to be sent on an exact date, you can count on us.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="100">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Brilliant Ideas</span>
              </div>
              <div className="flex items-center space-x-2" data-aos="fade-up" data-aos-delay="200">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>24/7 Assistance</span>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <Image
              src="/About us Image2.jpg"
              alt="Modern Kitchen"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section 
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: 'url("/About Us Bottom Banner.jpg")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto text-center text-white px-4 z-10">
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-down">
            We Provide the Best Service in Industry
          </h2>
          <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Find All Good Projects in One Place.
          </p>
          <Link
            href="/contact"
            className="bg-blue-500 text-white px-8 py-3 rounded hover:bg-blue-600 transition inline-block"
            data-aos="fade-up" data-aos-delay="400"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
} 