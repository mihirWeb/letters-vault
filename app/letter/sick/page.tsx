'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function SickLetterPage() {
  const router = useRouter();

  useEffect(() => {
    const authCookie = Cookies.get('auth_user');
    if (authCookie !== 'true') {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Image - Fixed */}
      <div
        className="fixed inset-0"
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
        className="fixed top-8 left-8 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 border border-white/20"
      >
        ← Back
      </button>

      {/* Hide scrollbar styles */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
          width: 0;
          height: 0;
        }
      `}</style>

      {/* Scrollable Content Container */}
      <div className="relative z-20 w-full min-h-screen flex items-center justify-center py-16">
        <div className="max-w-4xl w-full p-8 mx-4 my-26 overflow-y-auto max-h-[calc(100vh-15rem)] hide-scrollbar">
          <div className="text-black space-y-4 mx-auto" style={{ fontFamily: "'Comic Sans MS', cursive, sans-serif" }}>
            
            <p className="text-lg leading-relaxed">
              Abe hauli phirse bemar pad gai??? Oyii zyada tabiyat kharab hai toh kisiko bata zarur dena ye nhi ki akele hi decision le le saare, umm sumaiya ya sofia ko toh bta dena atleast. Aur zyada pain killers nakko lena, vaise toh tu kaafi bear kar leti hai nhi leti pain killers
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Aur haan aaj ke din zyada padhna nai, kahi syllabus aur pressure ke chakkar mai aur tabiyat kharab kar le, pehle tabiyat theek karne par focus phir padhai par. Okay???? Padhai vagera hoti rahegi pehle tu hai
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Aur deep sleep le lena, bilkul aise-
            </p>

            {/* First Image */}
            <div className="my-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762971303/photo_2025-11-12_23-44-39_j5vqvd.jpg"
                alt="Sleeping"
                className="max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: '500px' }}
              />
            </div>

            <p className="text-lg leading-relaxed">
              Tbh aise hi imagine karta hu mai tujhe sote hue🤣 aur jab tune bola tha ki walls par drawing kar deti thi, icecream khate hue puri dress aur muh kharab kar leti thi, tab bhi same ich imagine karta hu🤣🤣🤣
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Aur aise jab tu bolti hai ki laptop band karke bhaag jaungi🤣🤣-
            </p>

            {/* Second Image */}
            <div className="my-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762971303/photo_2025-11-12_23-44-42_mzk3ed.jpg"
                alt="Running away"
                className="max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: '500px' }}
              />
            </div>

            <p className="text-lg leading-relaxed">
              Aur aise jab tu bolti hai ki pakad mai nai aaungi🤣🤣-
            </p>

            {/* Third Image */}
            <div className="my-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762971303/photo_2025-11-12_23-44-32_qbwdri.jpg"
                alt="Can't catch me"
                className="max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: '500px' }}
              />
            </div>
            <br />
            
            <p className="text-lg leading-relaxed">
              Lol, you're wholesome 🤗🤣, hehe take care
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Aur hauli jaldi se theek hoja aur khayal rakha kar apna, remember your promise 😒 ki khayal rakhungi mai apna😒
            </p>
            <br />
            
            <p className="text-lg leading-relaxed text-center font-bold mt-6">
              GET WELL SOOONNNN🤗
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
