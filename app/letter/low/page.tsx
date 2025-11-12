'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function LowLetterPage() {
  const router = useRouter();

  useEffect(() => {
    const authCookie = Cookies.get('auth_user');
    if (authCookie !== 'true') {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="relative min-h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762966580/photo_2025-11-12_22-25-51_ynph3b.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          height: '100vh',
          width: '100vw',
        }}
      />

      <button
        onClick={() => router.back()}
        className="absolute top-8 left-8 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 border border-white/20"
      >
        ← Back
      </button>
      
    </div>
  );
}
