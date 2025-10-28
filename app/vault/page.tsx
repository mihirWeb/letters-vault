'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Meteors } from '@/components/ui/meteors';

export default function VaultPage() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('auth_user');
    router.push('/login');
  };

  useEffect(() => {
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

    return () => {
      clearInterval(fireworksInterval);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const bgImage =
    'https://res.cloudinary.com/dbsqtk1r7/image/upload/v1761488982/photo_2025-10-26_19-56-38_jvlvza.jpg';

  return (
    <div className="relative h-[500px] w-screen overflow-hidden">
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
      <Meteors />
    </div>
  );
}
