'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Meteors } from '@/components/ui/meteors';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const authCookie = Cookies.get('auth_user');
    
    if (authCookie === 'true') {
      // If authenticated, redirect to vault
      router.push('/vault');
    } else {
      // If not authenticated, redirect to login
      router.push('/login');
    }
  }, [router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Meteors background effect */}
      <Meteors number={20} />
      
      <div className="text-center z-10">
        <h1 className="text-4xl font-bold text-white mb-4">🏰</h1>
        <p className="text-white/80">Loading Letters Vault...</p>
      </div>
    </div>
  );
}