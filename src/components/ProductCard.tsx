import { Listing } from '@/types';
import { BadgeCheck, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  listing: Listing;
}

const ProductCard = ({ listing }: ProductCardProps) => {
  const { seller } = listing;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
      <div className="h-48 bg-gray-50 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:opacity-100 transition-opacity" />
        <span className="text-4xl">📦</span>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm border border-blue-50">
          {listing.category.toUpperCase()}
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Link href={`/profile/${seller?.id}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="h-6 w-6 rounded-full bg-gray-200 overflow-hidden">
               {seller?.avatar_url ? (
                 /* eslint-disable-next-line @next/next/no-img-element */
                 <img src={seller.avatar_url} alt={seller.full_name} className="h-full w-full object-cover" />
               ) : (
                 <div className="h-full w-full flex items-center justify-center text-[10px] bg-blue-100 text-blue-600 font-bold">
                   {seller?.full_name.charAt(0)}
                 </div>
               )}
            </div>
            <span className="text-xs font-medium text-gray-600 truncate max-w-[100px]">
              {seller?.full_name}
            </span>
          </Link>
          {seller?.is_verified && (
            <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold border border-green-100">
              <BadgeCheck className="h-3 w-3" />
              Verified Seller
            </div>
          )}
        </div>

        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-1">
          {listing.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 h-10">
          {listing.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-xs text-gray-400 block mb-0.5 uppercase tracking-wider font-bold">Price</span>
            <span className="text-lg font-extrabold text-gray-900">৳{listing.price.toLocaleString()}</span>
          </div>
          <button className="bg-gray-900 text-white p-2.5 rounded-xl hover:bg-blue-600 transition-all shadow-sm hover:shadow-md">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
