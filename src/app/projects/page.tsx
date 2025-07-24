
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Discover how we\'ve helped businesses achieve their marketing goals through innovative strategies and execution.',
}

const projects = [
  {
    title: 'E-commerce Growth Strategy',
    client: 'Fashion Retailer',
    description: 'Developed and implemented a comprehensive digital marketing strategy that increased online sales by 150% in 6 months.',
    results: ['150% increase in sales', '200% ROI', '45% reduction in CAC'],
    category: 'Digital Marketing',
    image: '/placeholder.jpg',
  },
  {
    title: 'Brand Transformation',
    client: 'Tech Startup',
    description: 'Complete brand overhaul including visual identity, messaging, and positioning, resulting in successful Series A funding.',
    results: ['Successful funding round', '300% increase in brand awareness', '85% positive feedback'],
    category: 'Brand Strategy',
    image: '/placeholder.jpg',
  },
  {
    title: 'Market Expansion Campaign',
    client: 'Food & Beverage Company',
    description: 'Launched successful market entry campaign in 3 new regions with localized marketing strategies.',
    results: ['35% market share in new regions', '400% increase in distribution', '28% revenue growth'],
    category: 'Market Expansion',
    image: '/placeholder.jpg',
  },
]

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how we've helped businesses achieve their marketing goals through innovative strategies and execution.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900/40" />
              <div className="absolute inset-0 -z-10 bg-primary/20" />

              <div className="absolute inset-0 -z-10 flex items-center justify-center text-white/60 text-lg font-semibold">
                Project Image Placeholder
              </div>

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <div className="mr-4">
                  <span className="font-semibold text-white">{project.client}</span>
                </div>
                <div className="flex gap-x-2.5">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span className="absolute inset-0" />
                {project.title}
              </h3>
              <div className="mt-4">
                <p className="text-sm leading-6 text-gray-300">{project.description}</p>
                <ul className="mt-4 space-y-2">
                  {project.results.map((result, index) => (
                    <li key={index} className="text-sm text-gray-300 flex items-center">
                      <span className="mr-2">•</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 rounded-2xl bg-gray-50 py-16 sm:mt-32 sm:py-24 lg:mt-40">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Let's work together to achieve your marketing goals and drive business growth.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 