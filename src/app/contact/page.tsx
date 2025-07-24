import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'you can Get in Touch with us for any kind of Query you can call and visit our branch office on specific working hours or email us anytime. We will reply you back and follow us for new and latest updates.',
}

const offices = [
  {
    city: 'Head Office Lahore',
    address: ['123 Marketing Street', 'New York, NY 10001'],
    phone: '+92 300 1115722',
    email: 'info@combinemarketings.com',
  },
  {
    city: 'Rawalpindi Office',
    address: ['Taha Mall, Office #10, 3rd Floor, Khawaja Corporation Chowk, Defence Rd, Rawalpindi, 46000'],
    phone: '+92 300 8472205' , 
    email: 'info@combinemarketings.com',
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