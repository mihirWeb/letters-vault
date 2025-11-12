'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

export default function BirthdayLetterPage() {
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
        {/* <h1 className="text-4xl font-bold mb-6 text-center">Bday</h1> */}

        <p className="text-lg leading-relaxed">
          Heyyyy!! It's your birthday 😁😁😁
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Happy Birthday Afifa, umm kya bolu.... jo iss time soch raha hu wahi bolta hu, pta hai jab mai leta hota hu aur sochta hu toh itta sab yaad aata hai bolne ko but jab likhna hota hai tab smjh ich nhi aata. Maine socha tha birthday wale din real ke letters dunga but vo wale possible hi nhi hai dena, vo kitne mast lagte hai na, classic types😁 but tere pass kaafi saare hai hehe, meku kisine nhi diye🥲
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Afifa afifa stars milenge aaj??😁 Oyi ek ek karke open karna kya kya likha hai unme sniskansisixkx
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Kaafi saare questions puchne hai like umm kaisa hai sab, tu theek hai ya nhi but jab ye website dunga toh puch lunga, aur idk afifa mere jaane se help hori hai? Shit ye sab baat nhi karte hai aaj bday hai, party ka din🕺🥳
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Mee iss veryyy happy that you exist (tune likha tha na ki tu happy hai mai exist karta hu, mai terese zyada happy hu). You're the bestttt bestt person I ever met. Sacchi😁
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Aur iss website par jo bhi likha hai na cutouts mai, vo sab random nhi hai, kahi soche aise hi likh diya😒 vo sab sach hai😒
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Aur haaan letter aise hi nakko padhna, jab vo condition met ho tabhi padhna😁 but kash kabhi vo met hi na ho aur tu hamesha happy ich rahe😁
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Bachpan mai kitti cute thi na tu😁, abhi toh chudail hai chudail-
        </p>

        {/* Image after the dash */}
        <div className="my-8 flex justify-center">
          <img
            src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762968751/photo_2025-11-12_23-02-13_clasoy.jpg"
            alt="Birthday memory"
            className="max-w-full rounded-lg shadow-2xl"
            style={{ maxHeight: '500px' }}
          />
        </div>

        <p className="text-lg leading-relaxed">
          Always be happyyyyy and thanks for making me a good person 😁
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Cutie pie, chocopie, kitkat, cupcakeee, CHUDAIL Take careee and be happy, paani peena mat bhulna aur khayal rakhnaa😁
        </p>
        <br />
        <p className="text-lg leading-relaxed">
          Missing your (Mihir, Mihir, Mihir, Mihir, Mihir, Mihir) really, but idhar kuch bhi sad nhi aaj happi day h😁
        </p>
        <br />
        <p className="text-lg leading-relaxed text-center font-bold mt-6">
          Byeeeeeeeeeeeeeeeeeeeee
        </p>
        </div>
      </div>
    </div>
    </div>
  );
}
