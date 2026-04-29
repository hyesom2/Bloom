import { useColorStore } from '@/store/useColorStore';
import { useMenuStore } from '@/store/useMenuStore';
import type { MenuProps } from '@/types/mandalart';
import { FileDown, ImageDown, Palette } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

export default function Menu({ exportPNG, exportJPG, exportPDF, buttonRef }: MenuProps) {
  const menuRef = useRef<HTMLUListElement>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { color, setColor } = useColorStore();
  const { setIsMenuOpen } = useMenuStore();

  const handleExportJPG = () => {
    exportJPG();
    setIsMenuOpen(false);
  };
  const handleExportPNG = () => {
    exportPNG();
    setIsMenuOpen(false);
  };
  const handleExportPDF = () => {
    exportPDF();
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!menuRef.current) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (buttonRef.current?.contains(e.target as Node)) return;

      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
        setShowColorPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsMenuOpen, buttonRef]);

  return (
    <ul
      ref={menuRef}
      role="menu"
      className="absolute top-full left-0 w-55 flex flex-col justify-start items-start gap-2 bg-white p-2 rounded-lg"
      aria-label="설정 메뉴"
    >
      <li role="none" className="w-full">
        <button
          type="button"
          role="menuitem"
          className="flex justify-start items-center gap-1 w-full text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          <Palette size={20} color="black" aria-hidden="true" />
          색상 변경
        </button>
      </li>
      {showColorPicker && (
        <div className="absolute top-full left-0 md:top-0 md:left-full mt-2 md:ml-2 sz-9999">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
      <li role="none" className="w-full">
        <button
          type="button"
          role="menuitem"
          className="flex justify-start items-center gap-1 w-full text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
          onClick={handleExportJPG}
        >
          <ImageDown size={20} color="black" aria-hidden="true" />
          JPG 이미지로 저장
        </button>
      </li>
      <li role="none" className="w-full">
        <button
          type="button"
          role="menuitem"
          className="flex justify-start items-center gap-1 w-full text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
          onClick={handleExportPNG}
        >
          <ImageDown size={20} color="black" aria-hidden="true" />
          PNG 이미지로 저장
        </button>
      </li>
      <li role="none" className="w-full">
        <button
          type="button"
          role="menuitem"
          className="flex justify-start items-center gap-1 w-full text-md text-black font-bold p-2 cursor-pointer hover:bg-gray-50 transition"
          onClick={handleExportPDF}
        >
          <FileDown size={20} color="black" aria-hidden="true" />
          PDF 문서로 저장
        </button>
      </li>
    </ul>
  );
}
