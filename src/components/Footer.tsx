import { ShoppingBag, Globe, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-1 rounded-md">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gray-900">Bazaar Digital</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The premier marketplace for digital assets in Bangladesh. Apps, code, scripts, and digital files.
            </p>
            <div className="flex space-x-4 mt-6">
              <Globe className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-gray-900 cursor-pointer transition-colors" />
              <Phone className="h-5 w-5 text-gray-400 hover:text-blue-700 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Marketplace</h3>
            <ul className="space-y-3">
              <li><Link href="/browse" className="text-sm text-gray-500 hover:text-blue-600">Browse All</Link></li>
              <li><Link href="/browse?category=apps" className="text-sm text-gray-500 hover:text-blue-600">Mobile Apps</Link></li>
              <li><Link href="/browse?category=code" className="text-sm text-gray-500 hover:text-blue-600">Source Code</Link></li>
              <li><Link href="/browse?category=files" className="text-sm text-gray-500 hover:text-blue-600">Digital Files</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Sell</h3>
            <ul className="space-y-3">
              <li><Link href="/sell" className="text-sm text-gray-500 hover:text-blue-600">Start Selling</Link></li>
              <li><Link href="/seller-guide" className="text-sm text-gray-500 hover:text-blue-600">Seller Guide</Link></li>
              <li><Link href="/fees" className="text-sm text-gray-500 hover:text-blue-600">Platform Fees</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-sm text-gray-500 hover:text-blue-600">Help Center</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-blue-600">Contact Us</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Bazaar Digital BD. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-xs text-gray-400">Made with ❤️ for the BD Dev Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
