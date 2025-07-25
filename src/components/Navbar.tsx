'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Combine Consultants', href: '/consultants' },
  { name: 'Projects', href: '/projects' },
  { name: 'Events & Expos', href: '/events' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMenuMounted, setIsMenuMounted] = useState(false)

  // Handle mounting/unmounting of menu
  useEffect(() => {
    if (mobileMenuOpen) {
      setIsMenuMounted(true)
    } else {
      const timer = setTimeout(() => {
        setIsMenuMounted(false)
      }, 300) // Match this with the CSS transition duration
      return () => clearTimeout(timer)
    }
  }, [mobileMenuOpen])

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-4" aria-label="Global">
        <div className="flex items-center justify-between py-6">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center">
              <Image
                src="/logo.png"
                alt="Combine Marketing Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 transition-transform duration-200 hover:scale-110"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuMounted && (
          <div 
            className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-20' : 'opacity-0'
              }`} 
              aria-hidden="true" 
              onClick={() => setMobileMenuOpen(false)}
            />
            <div 
              className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transform transition-transform duration-300 ease-in-out ${
                mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <Image
                    src="/logo.png"
                    alt="Combine Marketing Logo"
                    width={150}
                    height={40}
                    className="h-10 w-auto"
                    priority
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700 transition-transform duration-200 hover:scale-110"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transform transition-all duration-300 ${
                          mobileMenuOpen 
                            ? 'translate-x-0 opacity-100' 
                            : 'translate-x-8 opacity-0'
                        }`}
                        style={{ 
                          transitionDelay: `${index * 50}ms`,
                        }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 