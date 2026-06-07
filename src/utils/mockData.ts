import { Listing, Profile } from '@/types';

export const mockProfiles: Profile[] = [
  {
    id: 'p1',
    full_name: 'Arif Rahman',
    bio: 'Full-stack developer from Dhaka. Specializing in React and Node.js.',
    is_verified: true,
    wallet_balance: 5000,
    avatar_url: 'https://i.pravatar.cc/150?u=p1'
  },
  {
    id: 'p2',
    full_name: 'Sultana Kamal',
    bio: 'Mobile app specialist. Flutter & Swift expert.',
    is_verified: false,
    wallet_balance: 1200,
    avatar_url: 'https://i.pravatar.cc/150?u=p2'
  }
];

export const mockListings: Listing[] = [
  {
    id: 'l1',
    seller_id: 'p1',
    title: 'E-commerce Management System',
    description: 'A complete inventory and sales management system for small businesses.',
    category: 'code',
    price: 2500,
    created_at: new Date().toISOString(),
    seller: mockProfiles[0]
  },
  {
    id: 'l2',
    seller_id: 'p2',
    title: 'Food Delivery App Template',
    description: 'Beautifully designed Flutter UI kit for a food delivery application.',
    category: 'app',
    price: 1800,
    created_at: new Date().toISOString(),
    seller: mockProfiles[1]
  },
  {
    id: 'l3',
    seller_id: 'p1',
    title: 'Digital Marketing Dashboard',
    description: 'A React-based dashboard for tracking social media metrics.',
    category: 'code',
    price: 3500,
    created_at: new Date().toISOString(),
    seller: mockProfiles[0]
  },
  {
    id: 'l4',
    seller_id: 'p1',
    title: 'Modern Portfolio Template',
    description: 'High-performance Next.js template for developers and designers.',
    category: 'project',
    price: 1200,
    created_at: new Date().toISOString(),
    seller: mockProfiles[0]
  },
  {
    id: 'l5',
    seller_id: 'p2',
    title: 'Icon Pack for UI/UX',
    description: '500+ custom SVG icons for web and mobile apps.',
    category: 'file',
    price: 500,
    created_at: new Date().toISOString(),
    seller: mockProfiles[1]
  }
];
