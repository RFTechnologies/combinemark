import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Combine Marketing, our mission, values, and commitment to helping businesses grow.',
}

const values = [
  {
    name: 'Innovation',
    description: 'We stay ahead of industry trends and continuously innovate our marketing strategies.',
  },
  {
    name: 'Excellence',
    description: 'We strive for excellence in every project and deliver measurable results.',
  },
  {
    name: 'Collaboration',
    description: 'We work closely with our clients to understand their needs and achieve their goals.',
  },
  {
    name: 'Integrity',
    description: 'We maintain the highest standards of professionalism and ethical conduct.',
  },
  {
    name: 'Growth',
    description: 'We are committed to helping our clients and our team grow and succeed.',
  },
  {
    name: 'Impact',
    description: 'We create meaningful impact through effective marketing solutions.',
  },
]

const stats = [
  { label: 'Years in Business', value: '10+' },
  { label: 'Successful Projects', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Team Members', value: '50+' },
]

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Combine Marketing is a leading marketing consultancy helping businesses achieve their growth objectives through innovative strategies and expert execution.
            </p>
          </div>
        </div>
      </div>

      {/* Mission section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our mission is to empower businesses with effective marketing strategies and solutions that drive growth, enhance brand value, and create lasting impact in their respective markets.
          </p>
        </div>
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These core values guide our work and relationships with clients.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {value.name}
              </dt>
              <dd className="inline-block ml-1"> - {value.description}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            By the Numbers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our track record of success speaks for itself.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
              <dt className="text-sm leading-6 text-gray-600">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* CTA section */}
      <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-24">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Marketing?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Let's work together to achieve your marketing goals and drive business growth.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact Us
            </Link>
            <Link href="/projects" className="text-sm font-semibold leading-6 text-white">
              View Our Work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="mt-32 sm:mt-40" />
    </div>
  )
} 