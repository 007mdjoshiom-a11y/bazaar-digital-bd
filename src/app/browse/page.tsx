export default function BrowsePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Browse Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-100"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-100 rounded w-3/4"></div>
              <div className="h-4 bg-gray-100 rounded w-1/2"></div>
              <div className="flex justify-between pt-4">
                <div className="h-6 bg-gray-100 rounded w-16"></div>
                <div className="h-6 bg-gray-100 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
