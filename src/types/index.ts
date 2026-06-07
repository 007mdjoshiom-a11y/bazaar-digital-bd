export interface Profile {
  id: string;
  full_name: string;
  bio?: string;
  phone_number?: string;
  is_verified: boolean;
  wallet_balance: number;
  avatar_url?: string;
}

export type Category = 'app' | 'code' | 'project' | 'file';

export interface Listing {
  id: string;
  seller_id: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  file_url?: string;
  created_at: string;
  seller?: Profile;
}
