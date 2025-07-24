import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events & Expos',
  description: 'Join us at our upcoming events and expos to learn, network, and grow your business.',
}

const upcomingEvents = [
  {
    name: 'Digital Marketing Summit 2024',
    description: 'Join industry leaders for insights on the latest digital marketing trends and strategies.',
    date: 'March 15-16, 2024',
    location: 'Tech Convention Center, Silicon Valley',
    image: '/placeholder.jpg',
    category: 'Conference',
  },
  {
    name: 'Marketing Innovation Expo',
    description: 'Explore cutting-edge marketing technologies and network with industry professionals.',
    date: 'April 5-7, 2024',
    location: 'Marketing Hub, New York',
    image: '/placeholder.jpg',
    category: 'Expo',
  },
  {
    name: 'Brand Strategy Workshop',
    description: 'Hands-on workshop focused on developing effective brand strategies.',
    date: 'May 20, 2024',
    location: 'Business Center, Chicago',
    image: '/placeholder.jpg',
    category: 'Workshop',
  },
]

const pastEvents = [
  {
    name: 'Content Marketing Masterclass',
    description: 'Expert-led sessions on content strategy and creation.',
    date: 'January 10, 2024',
    location: 'Online',
    image: '/placeholder.jpg',
    category: 'Webinar',
  },
  {
    name: 'Social Media Marketing Conference',
    description: 'Insights and strategies for effective social media marketing.',
    date: 'December 5-6, 2023',
    location: 'Marketing Center, Los Angeles',
    image: '/placeholder.jpg',
    category: 'Conference',
  },
]

export default function Events() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Upcoming Events */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join us at our upcoming events and expos to learn, network, and grow your business.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <article
              key={event.name}
              className="flex flex-col items-start rounded-2xl bg-white shadow-lg overflow-hidden"
            >
              <div className="relative w-full h-48">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
                  Event Image Placeholder
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={event.date} className="text-gray-500">
                    {event.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {event.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {event.name}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{event.description}</p>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Location:</span> {event.location}
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-primary hover:text-secondary"
                  >
                    Register Now <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Past Events */}
        <div className="mx-auto mt-32 max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Past Events</h2>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {pastEvents.map((event) => (
              <article key={event.name} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500">
                    Event Image Placeholder
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={event.date} className="text-gray-500">
                      {event.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                      {event.category}
                    </span>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                      {event.name}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{event.description}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Location:</span> {event.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mx-auto mt-32 max-w-7xl">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get notified about upcoming events
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
              Subscribe to our newsletter to stay updated on our latest events and marketing insights.
            </p>
            <form className="mx-auto mt-10 max-w-md">
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 