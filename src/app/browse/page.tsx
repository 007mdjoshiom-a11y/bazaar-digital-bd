"use client";

import { useState } from 'react';
import { mockListings } from '@/utils/mockData';
import ProductCard from '@/components/ProductCard';
import { Search, Filter, AppWindow, Code, Layout, FileCode } from 'lucide-react';
import { Category } from '@/types';

export default function BrowsePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Assets', icon: <Filter className="h-4 w-4" /> },
    { id: 'app', name: 'Apps', icon: <AppWindow className="h-4 w-4" /> },
    { id: 'code', name: 'Source Code', icon: <Code className="h-4 w-4" /> },
    { id: 'project', name: 'Templates', icon: <Layout className="h-4 w-4" /> },
    { id: 'file', name: 'Design Files', icon: <FileCode className="h-4 w-4" /> },
  ];

  const filteredListings = mockListings.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Explore Marketplace</h1>
          <p className="text-gray-500">Discover premium digital assets from BD&apos;s top developers</p>
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search apps, scripts, templates..."
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id as Category | 'all')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
              selectedCategory === cat.id
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-100'
                : 'bg-white text-gray-600 border-gray-100 hover:border-blue-200 hover:bg-blue-50'
            }`}
          >
            {cat.icon}
            {cat.name}
          </button>
        ))}
      </div>

      {/* Results */}
      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredListings.map((listing) => (
            <ProductCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50 rounded-[2rem] border border-dashed border-gray-200">
          <div className="bg-white p-4 rounded-2xl shadow-sm w-fit mx-auto mb-4">
            <Search className="h-8 w-8 text-gray-300" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters or search keywords</p>
        </div>
      )}
    </div>
  );
}
