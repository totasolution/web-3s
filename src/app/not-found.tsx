'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function NotFound() {
  const pathname = usePathname()
  const isEnglish = pathname?.startsWith('/en')

  const text = isEnglish
    ? {
        title: 'Page Not Found',
        message: "Sorry, the page you're looking for cannot be found or may have been moved.",
        backHome: 'Back to Home',
        explore: 'Explore Services',
        contact: 'Contact Us',
        help1: 'If you believe this is a mistake, please',
        help2: 'contact our support team.',
        base: '/en'
      }
    : {
        title: 'Halaman Tidak Ditemukan',
        message: 'Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.',
        backHome: 'Kembali ke Beranda',
        explore: 'Jelajahi Layanan',
        contact: 'Hubungi Kami',
        help1: 'Jika Anda yakin ini adalah kesalahan, silakan',
        help2: 'hubungi tim dukungan kami.',
        base: '/id'
      }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <div className="text-9xl font-bold text-gray-200 mb-4">404</div>
          
          {/* Error Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {text.title}
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            {text.message}
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              href={text.base}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              <span>{text.backHome}</span>
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`${text.base}/services`}
                className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                <Search className="w-5 h-5" />
                <span>{text.explore}</span>
              </Link>
              
              <Link
                href={`${text.base}/contact`}
                className="inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>{text.contact}</span>
              </Link>
            </div>
          </div>
          
          {/* Help Text */}
          <div className="mt-8 text-sm text-gray-500">
            <p>{text.help1}</p>
            <p>{text.help2}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
