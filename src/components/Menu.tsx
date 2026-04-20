import { useColorStore } from '@/store/useColorStore';
import type { MenuProps } from '@/types/mandalart';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export default function Menu({ exportPNG, exportJPG, exportPDF }: MenuProps) {
  const { color, setColor } = useColorStore();
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <ul className="absolute top-full left-0 w-50 flex flex-col justify-start items-start gap-2 bg-white p-2 rounded-lg">
      <button
        type="button"
        className="flex justify-start items-center w-full text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setShowColorPicker(!showColorPicker)}
      >
        색상 변경
      </button>
      {showColorPicker && (
        <div className="absolute top-0 left-full ml-2 sz-9999">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
      <li
        className="flex justify-start w-full items-center text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
        onClick={exportJPG}
      >
        JPG 이미지로 저장
      </li>
      <li
        className="flex justify-start w-full items-center text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
        onClick={exportPNG}
      >
        PNG 이미지로 저장
      </li>
      <li
        className="flex justify-start w-full items-center text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
        onClick={exportPDF}
      >
        PDF 문서로 저장
      </li>
    </ul>
  );
}
