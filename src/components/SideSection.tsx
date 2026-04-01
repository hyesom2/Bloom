import { useColorStore } from '@/store/useColorStore';
import HorseImage from '@assets/images/horse.webp';
import Resolution from '@components/Resolution';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export default function SideSection() {
  const { color, setColor } = useColorStore();
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center lg:flex-col min-h-screen px-6 py-8 md:px-12 md:py-16 lg:px-6 lg:py-8">
      <h1 className="flex flex-col justify-center items-center gap-2 font-bold text-white">
        <span className="text-9xl">2026</span>
        <span className="text-4xl">만다라트 계획표</span>
      </h1>
      <button
        type="button"
        className="bg-white text-md text-black font-bold p-2 rounded-lg cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setShowColorPicker(!showColorPicker)}
      >
        색상 변경
      </button>
      {showColorPicker && (
        <div className="absolute z-10">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
      <img
        src={HorseImage}
        alt="붉은말의 해"
        className="block w-full h-full md:w-150 md:h-150 lg:w-full lg:h-full object-contain"
      />
      <Resolution />
    </div>
  );
}
