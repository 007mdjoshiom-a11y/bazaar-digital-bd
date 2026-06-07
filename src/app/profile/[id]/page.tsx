import { mockProfiles, mockListings } from '@/utils/mockData';
import ProductCard from '@/components/ProductCard';
import { BadgeCheck, Calendar, MapPin, Globe } from 'lucide-react';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return mockProfiles.map((profile) => ({
    id: profile.id,
  }));
}

export default async function ProfileDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const profile = mockProfiles.find(p => p.id === id);

  if (!profile) {
    notFound();
  }

  const userListings = mockListings.filter(l => l.seller_id === id);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Header Banner */}
      <div className="h-64 bg-gradient-to-r from-blue-600 to-indigo-700 w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                {profile.is_verified && (
                  <div className="bg-green-50 p-2 rounded-xl border border-green-100">
                    <BadgeCheck className="h-6 w-6 text-green-600" />
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="h-32 w-32 rounded-3xl bg-blue-50 border-4 border-white shadow-lg mb-6 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.avatar_url || `https://ui-avatars.com/api/?name=${profile.full_name}`}
                    alt={profile.full_name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h1 className="text-2xl font-black text-gray-900 mb-1">{profile.full_name}</h1>
                <p className="text-blue-600 font-bold text-sm mb-6 uppercase tracking-widest">Developer</p>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {profile.bio || 'No bio available yet.'}
                </p>

                <div className="w-full space-y-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium">Dhaka, Bangladesh</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm font-medium">Joined June 2024</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mt-8">
                  <button className="bg-blue-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                    Follow
                  </button>
                  <button className="bg-gray-50 text-gray-900 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all border border-gray-200">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Listings Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm min-h-[600px]">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Products for Sale</h2>
                  <p className="text-gray-500 font-medium">{userListings.length} premium items available</p>
                </div>
                <div className="flex gap-2">
                  <div className="bg-gray-50 px-4 py-2 rounded-lg text-sm font-bold text-gray-500 border border-gray-100 uppercase tracking-tighter">
                    Active Listings
                  </div>
                </div>
              </div>

              {userListings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {userListings.map((listing) => (
                    <ProductCard key={listing.id} listing={listing} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="bg-gray-50 p-6 rounded-full mb-4">
                    <Globe className="h-10 w-10 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">No active listings</h3>
                  <p className="text-gray-500">This user hasn&apos;t posted any products for sale yet.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
