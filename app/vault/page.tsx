'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Meteors } from '@/components/ui/meteors';
import { ComicText } from '@/components/ui/comic-text';

export default function VaultPage() {
  const router = useRouter();
  const [currentText, setCurrentText] = useState('Hey!!');
  const [showText, setShowText] = useState(true);
  const [showCurvedText, setShowCurvedText] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);

  const handleLogout = () => {
    Cookies.remove('auth_user');
    router.push('/login');
  };

  useEffect(() => {
    // Fireworks effect
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const fireworksInterval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(fireworksInterval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    const sideCannonsDuration = 3 * 1000;
    const sideCannonsEnd = Date.now() + sideCannonsDuration;
    const colors = ['#CD2C58', '#E06B80'];
    let rafId: number | null = null;

    const sideCannonsFrame = () => {
      if (Date.now() > sideCannonsEnd) return;
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      });
      rafId = requestAnimationFrame(sideCannonsFrame);
    };

    sideCannonsFrame();

    // Text animation sequence
    const textSequence = () => {
      // Show "Hey!!" for 2 seconds
      setTimeout(() => {
        setShowText(false);
        
        // After a brief pause, show "it's your birthday" in curved path
        setTimeout(() => {
          setCurrentText("it's your birthday");
          setShowCurvedText(true);
          
          // After 3 seconds, hide curved text and show "Happy Birthday!! :)"
          setTimeout(() => {
            setShowCurvedText(false);
            
            setTimeout(() => {
              setCurrentText("Happy Birthday!! :)");
              setShowFinalText(true);
            }, 500);
          }, 3000);
        }, 500);
      }, 2000);
    };

    textSequence();

    return () => {
      clearInterval(fireworksInterval);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const bgImage =
    'https://res.cloudinary.com/dbsqtk1r7/image/upload/v1761488982/photo_2025-10-26_19-56-38_jvlvza.jpg';
  const bgImage2 =
    'https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762960978/photo_2025-11-12_20-51-44_hte12x.jpg';

  return (
    <div className="relative w-screen overflow-y-scroll overflow-x-hidden" style={{ height: '100vh', scrollSnapType: 'y mandatory' }}>
      {/* First Section - Birthday Animation */}
      <section className="relative h-screen w-screen" style={{ scrollSnapAlign: 'start' }}>
        {/* Background layer (fills full viewport) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
            height: '100vh',
            width: '100vw',
          }}
        />
        
        {/* Meteors layer */}
        <div className="relative z-10">
          <Meteors />
        </div>
        
        {/* Comic Text layer for "Hey!!" */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {showText && currentText === 'Hey!!' && (
            <ComicText 
              fontSize={8}
              className="text-white font-bold"
            >
              {currentText}
            </ComicText>
          )}
        </div>

        {/* Curved Comic Text for "it's your birthday" */}
        {showCurvedText && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="relative w-full max-w-4xl h-64">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 800 200"
                className="comic-curved-text"
              >
                {/* Define the curved path */}
                <defs>
                  <path
                    id="curvePath"
                    d="M 100,150 C 200,50 600,50 700,150"
                    fill="transparent"
                  />
                  {/* Comic-style filter for the text */}
                  <filter id="comicEffect" x="-20%" y="-20%" width="140%" height="140%">
                    <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
                    <feFlood floodColor="black" result="blackColor" />
                    <feComposite in="blackColor" in2="thicken" operator="in" result="outline" />
                    <feMerge>
                      <feMergeNode in="outline" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Text following the curved path with comic effect */}
                <text 
                  fill="white" 
                  fontFamily="'Comic Sans MS', 'Comic Neue', cursive, sans-serif"
                  fontSize="52"
                  fontWeight="bold"
                  textAnchor="middle"
                  filter="url(#comicEffect)"
                  style={{
                    paintOrder: 'stroke fill',
                    stroke: 'black',
                    strokeWidth: '4px',
                    strokeLinejoin: 'round'
                  }}
                >
                  <textPath 
                    href="#curvePath" 
                    startOffset="50%"
                    className="drop-shadow-2xl"
                  >
                    it's your birthday!!!
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        )}

        {/* Comic Text layer for "Happy Birthday!! :)" */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          {showFinalText && (
            <ComicText 
              fontSize={8}
              className="text-white font-bold"
            >
              {currentText}
            </ComicText>
          )}
        </div>
      </section>

      {/* Second Section - New Background */}
      <section className="relative h-screen w-screen" style={{ scrollSnapAlign: 'start' }}>
        {/* Background layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
            height: '100vh',
            width: '100vw',
          }}
        />
        
        {/* Image Grid */}
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="grid grid-rows-2 gap-8 max-w-5xl">
            {/* First Row - 3 images */}
            <div className="grid grid-cols-3 gap-6">
              <div 
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => router.push('/letter/sad')}
              >
                <img
                  src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762963313/sad_qub1fs.png"
                  alt="sad"
                  className="w-full h-full object-cover drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div 
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => router.push('/letter/birthday')}
              >
                <img
                  src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762963312/bday_fn2rla.png"
                  alt="birthday"
                  className="w-full h-full object-cover drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div 
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => router.push('/letter/talk')}
              >
                <img
                  src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762963312/talk_rn5xsj.png"
                  alt="talk"
                  className="w-full h-full object-cover drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
            </div>
            
            {/* Second Row - 2 images */}
            <div className="grid grid-cols-2 gap-6 justify-items-center">
              <div 
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => router.push('/letter/sick')}
              >
                <img
                  src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762963312/sick_amiodn.png"
                  alt="sick"
                  className="w-full h-full object-cover drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
              <div 
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => router.push('/letter/low')}
              >
                <img
                  src="https://res.cloudinary.com/dbsqtk1r7/image/upload/v1762963312/lowtired_vya0v4.png"
                  alt="low"
                  className="w-full h-full object-cover drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                  style={{ width: '250px', height: '250px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}