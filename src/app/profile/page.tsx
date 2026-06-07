import { User, Wallet, ShoppingBag, Settings } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-xl font-medium">
            <User className="h-5 w-5" /> Profile info
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <Wallet className="h-5 w-5" /> Wallet
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <ShoppingBag className="h-5 w-5" /> My Purchases
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium transition-colors">
            <Settings className="h-5 w-5" /> Settings
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
            <div className="flex items-center gap-6 mb-8">
              <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="h-12 w-12 text-gray-400" />
              </div>
              <div>
                <button className="bg-white border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                  Change Photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="User Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="+880 1XXX-XXXXXX" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-24" placeholder="Tell us about yourself..."></textarea>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex justify-end">
              <button className="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
