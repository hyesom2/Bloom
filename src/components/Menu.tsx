import { useColorStore } from '@/store/useColorStore';
import type { MenuProps } from '@/types/mandalart';
import { FileDown, ImageDown, Palette } from 'lucide-react';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export default function Menu({ exportPNG, exportJPG, exportPDF }: MenuProps) {
  const { color, setColor } = useColorStore();
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <ul className="absolute top-full left-0 w-55 flex flex-col justify-start items-start gap-2 bg-white p-2 rounded-lg">
      <li
        className="flex justify-start items-center w-full text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setShowColorPicker(!showColorPicker)}
      >
        <span className="flex justify-start items-center gap-1">
          <Palette />
          색상 변경
        </span>
      </li>
      {showColorPicker && (
        <div className="absolute top-0 left-full ml-2 sz-9999">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
      <li
        className="flex justify-start w-full items-center text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
        onClick={exportJPG}
      >
        <span className="flex justify-start items-center gap-1">
          <ImageDown />
          JPG 이미지로 저장
        </span>
      </li>
      <li
        className="flex justify-start w-full items-center text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
        onClick={exportPNG}
      >
        <span className="flex justify-start items-center gap-1">
          <ImageDown />
          PNG 이미지로 저장
        </span>
      </li>
      <li
        className="flex justify-start w-full items-center text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
        onClick={exportPDF}
      >
        <span className="flex justify-start items-center gap-1">
          <FileDown />
          PDF 문서로 저장
        </span>
      </li>
    </ul>
  );
}
