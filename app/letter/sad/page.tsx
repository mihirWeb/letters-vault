'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function SadLetterPage() {
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
              Oyiiii kya hua teku??? Agar mai touch mai hu toh sabse pehle fatak se message kar, akele sad nhi hote mai bhi sath mai sad honge 😼 dono milke sad hote hai
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Kisine kuch kaha? Pakka kuch jyada overthinking kar rahi hogi (real mai likhta toh correct karti ki "zyada" hota hai😂 chahe kitta bhi serious topic ho) cute toh hai
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Buttttt tu sad kyu hai??? Oyii kisike sath share zarur kar dena umm sabse pehle mujhse but agar nhi kar sakti toh Sofia, Sumaiya ya apni personal diary but zarur karna usse overthinking kam ho jaegi
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Usse yaad ayaa maine bola tha mujhe personal diary bana ke rakhle😅 hehe kitte mast din the
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Bessttt bessttt din the jab mai raat raat bhar baat karte the😁 pta hai pehle mai sochta tha log ghanto baat kaise kar lete hai aur mujhe uss time ghanto bhi kam lagte hai😂 Sacchi mai best days the vo mere, pura din happy happy sa rehta tha, mai har waqt khush aur aise hi randomly blush karta rehta tha, even text nhi kar raha hu tab bhi🤣🤣🤣 dost pagal smjhte the🤣🤣🤣
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              But din toh mast the pagalo ki tarah sadko par, sab kuch worth it lagta tha😂 man karta tha tere liye kaafi kuch karu but nai kar paaya🥲
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Thankssss sab chiz ke liaaa, I'm really grateful, Mai utna zyada happy shayad saalo se nhi hua honga😅😅 YOU MATTERS AFIFA FATIMA
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Aur hauli sad nakko ho, ye le ye pics dekh le😁😁
            </p>
            <br />
            
            <p className="text-lg leading-relaxed">
              Ye uske hath aur per ki mehendi 🤣🤣-
            </p>

            {/* First Image - Two images in a row */}
            <div className="my-8 flex justify-center gap-4">
              <img
                src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762968752/photo_2025-11-12_23-01-52_rl78lh.jpg"
                alt="Mehendi hand"
                className="max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: '500px', maxWidth: '48%' }}
              />
              <img
                src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762968752/photo_2025-11-12_23-01-50_arybqr.jpg"
                alt="Mehendi feet"
                className="max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: '500px', maxWidth: '48%' }}
              />
            </div>

            <p className="text-lg leading-relaxed">
              Ye le tere liye heart🤣🤣🤣-
            </p>

            {/* Second Image */}
            <div className="my-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762968752/photo_2025-11-12_23-01-46_ysn6id.jpg"
                alt="Heart"
                className="max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: '500px' }}
              />
            </div>

            <p className="text-lg leading-relaxed">
              Ye le flying kiss🤣🤣🤣-
            </p>

            {/* Third Image */}
            <div className="my-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762968752/photo_2025-11-12_23-01-56_bd7vuc.jpg"
                alt="Flying kiss"
                className="max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: '500px' }}
              />
            </div>

            <p className="text-lg leading-relaxed">
              Aur ab soja bina kuch overthink kare, bilkul aise aur cuddle karke😁😁-
            </p>

            {/* Fourth Image */}
            <div className="my-8 flex justify-center">
              <img
                src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762968751/photo_2025-11-12_23-02-07_hlroos.jpg"
                alt="Cuddle"
                className="max-w-full rounded-lg shadow-2xl"
                style={{ maxHeight: '500px' }}
              />
            </div>

            <p className="text-lg leading-relaxed">
              Apna khayal rakh aurrr please share kardo kisise aur overthink nakko karo, agar nhi control hora toh annu se baat karlo 😁
            </p>
            <br />
            
            <p className="text-lg leading-relaxed text-center font-bold mt-6">
              TAKE CAREEEEEE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
