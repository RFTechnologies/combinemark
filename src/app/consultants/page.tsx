import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Combine Consultants',
  description: 'Meet our team of experienced marketing consultants who are dedicated to helping your business succeed.',
}

const consultants = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Marketing Strategist',
    image: '/placeholder.jpg',
    bio: 'Over 15 years of experience in digital marketing and brand strategy.',
    expertise: ['Brand Development', 'Digital Strategy', 'Market Analysis'],
  },
  {
    name: 'Michael Chen',
    role: 'Growth Marketing Consultant',
    image: '/placeholder.jpg',
    bio: 'Specializes in growth hacking and performance marketing strategies.',
    expertise: ['Growth Marketing', 'PPC Advertising', 'Analytics'],
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Strategy Expert',
    image: '/placeholder.jpg',
    bio: 'Expert in content marketing and social media strategy.',
    expertise: ['Content Strategy', 'Social Media', 'Brand Voice'],
  },
  // Add more consultants as needed
]

export default function Consultants() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Consultants</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet our team of experienced marketing consultants who are dedicated to helping your business succeed.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {consultants.map((consultant) => (
            <li key={consultant.name}>
              <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Photo Placeholder
                </div>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{consultant.name}</h3>
              <p className="text-base leading-7 text-primary">{consultant.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{consultant.bio}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {consultant.expertise.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Expertise Areas */}
        <div className="mx-auto mt-32 max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Expertise</h2>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {expertiseAreas.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl bg-gray-50 p-10 ring-1 ring-inset ring-gray-900/5"
              >
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{area.name}</h3>
                <p className="mt-4 text-base leading-7 text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const expertiseAreas = [
  {
    name: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including SEO, PPC, social media, and email marketing.',
  },
  {
    name: 'Brand Strategy',
    description: 'Development and implementation of brand strategies that resonate with your target audience.',
  },
  {
    name: 'Market Research',
    description: 'In-depth market analysis and consumer research to inform strategic decisions.',
  },
  {
    name: 'Content Marketing',
    description: 'Strategic content creation and distribution to engage and convert your target audience.',
  },
  {
    name: 'Performance Marketing',
    description: 'Data-driven marketing approaches focused on measurable business results.',
  },
  {
    name: 'Marketing Analytics',
    description: 'Advanced analytics and reporting to track and optimize marketing performance.',
  },
] 