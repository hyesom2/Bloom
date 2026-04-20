import type { MenuProps } from '@/types/mandalart';
import HorseImage from '@assets/images/horse.webp';
import Menu from '@components/Menu';
import Resolution from '@components/Resolution';
import { Settings } from 'lucide-react';
import { useState } from 'react';

export default function SideSection({ exportPNG, exportJPG, exportPDF }: MenuProps) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="relative flex flex-col justify-between items-center lg:flex-col min-h-screen px-6 py-8 md:px-12 md:py-16 lg:px-6 lg:py-8">
      <div className="absolute top-4 left-4 z-50">
        <div className="cursor-pointer inline-block" onClick={() => setIsShowMenu(!isShowMenu)}>
          <span className="inline-block hover:rotate-90 transition-transform">
            <Settings size={24} color="black" strokeWidth={1} />
          </span>
        </div>
        {isShowMenu && <Menu exportPNG={exportPNG} exportJPG={exportJPG} exportPDF={exportPDF} />}
      </div>
      <h1 className="flex flex-col justify-center items-center gap-2 font-bold text-white">
        <span className="text-9xl">2026</span>
        <span className="text-4xl">만다라트 계획표</span>
      </h1>
      <img
        src={HorseImage}
        alt="붉은말의 해"
        className="block w-full h-full md:w-150 md:h-150 lg:w-full lg:h-full object-contain"
      />
      <Resolution />
    </div>
  );
}
