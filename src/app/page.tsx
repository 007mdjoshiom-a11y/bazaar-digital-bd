import Link from 'next/link';
import { ArrowRight, Code, Layout, FileCode, Package, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block">Bangladesh's Largest</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Digital Marketplace
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
            Buy and sell high-quality source code, mobile apps, web templates, and digital assets.
            Join the community of Bangladeshi developers today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/browse"
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
            >
              Start Exploring <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/sell"
              className="w-full sm:w-auto bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-100 hover:bg-blue-50 transition-all flex items-center justify-center"
            >
              Become a Seller
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-500">Find exactly what you need for your next project</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Mobile Apps', icon: <Package className="h-6 w-6 text-blue-600" />, desc: 'Ready-to-publish iOS & Android apps' },
            { name: 'Source Code', icon: <Code className="h-6 w-6 text-indigo-600" />, desc: 'Reusable components and scripts' },
            { name: 'Web Templates', icon: <Layout className="h-6 w-6 text-blue-500" />, desc: 'Modern landing pages and themes' },
            { name: 'Digital Files', icon: <FileCode className="h-6 w-6 text-indigo-500" />, desc: 'E-books, icons, and graphic assets' },
          ].map((cat, i) => (
            <Link key={i} href="/browse" className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all">
              <div className="mb-4 p-3 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors w-fit">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
              <p className="text-gray-500 text-sm">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-900 text-white py-24 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div className="bg-blue-600/20 p-4 rounded-2xl w-fit">
              <ShieldCheck className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold">Secure Transactions</h3>
            <p className="text-gray-400">Escrow-style payments ensure both buyer and seller are protected throughout the process.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-indigo-600/20 p-4 rounded-2xl w-fit">
              <Zap className="h-8 w-8 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold">Instant Delivery</h3>
            <p className="text-gray-400">Get access to your digital files immediately after purchase. No waiting around.</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-blue-600/20 p-4 rounded-2xl w-fit">
              <Globe className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold">Local Support</h3>
            <p className="text-gray-400">Support team based right here in Bangladesh to help you with any platform issues.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
