import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team to discuss how we can help your business grow.',
}

const offices = [
  {
    city: 'New York',
    address: ['123 Marketing Street', 'New York, NY 10001'],
    phone: '+1 (555) 123-4567',
    email: 'nyc@combinemarketing.com',
  },
  {
    city: 'London',
    address: ['456 Agency Lane', 'London, UK SW1A 1AA'],
    phone: '+44 20 7123 4567',
    email: 'london@combinemarketing.com',
  },
  {
    city: 'Singapore',
    address: ['789 Business Avenue', 'Singapore 018989'],
    phone: '+65 6789 0123',
    email: 'singapore@combinemarketing.com',
  },
]

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate bg-gradient-to-b from-primary/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get in touch with our team to discuss how we can help your business grow.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Office Locations */}
          <div>
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">Our Offices</h3>
            <div className="mt-6 space-y-10">
              {offices.map((office) => (
                <div key={office.city} className="relative pl-9">
                  <div className="inline font-semibold text-gray-900">{office.city}</div>
                  <div className="mt-2 space-y-4">
                    <div className="flex gap-x-2.5 text-sm leading-6 text-gray-600">
                      <MapPinIcon className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                      <div>
                        {office.address.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-x-2.5 text-sm leading-6 text-gray-600">
                      <PhoneIcon className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {office.phone}
                    </div>
                    <div className="flex gap-x-2.5 text-sm leading-6 text-gray-600">
                      <EnvelopeIcon className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {office.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="mt-32 sm:mt-40" />
    </div>
  )
} 