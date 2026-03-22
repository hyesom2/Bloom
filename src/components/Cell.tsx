import type { CellType } from '@/types/cellType';
import { useEffect, useRef } from 'react';

export default function Cell({ value, onChange, isMainCenter, isCenter, placeholder }: CellType) {
  const ref = useRef<HTMLDivElement>(null);

  const baseStyle = `flex justify-center items-center w-full h-full w-10 h-10 md:w-25 md:h-25 overflow-hidden text-center text-sm border border-border outline-none empty-placeholder`;
  let bgStyle = `bg-white`;

  if (isMainCenter) {
    // 중앙 3x3 Grid 내부
    if (isCenter) {
      bgStyle = `bg-primary text-white font-bold`; // 핵심목표
    } else {
      bgStyle = `bg-secondary font-bold`; // 중앙 Grid 내의 목표1~8
    }
  } else if (isCenter) {
    // SubGrid의 중앙칸
    bgStyle = `bg-secondary font-bold`; // 서브 Grid의 목표1~8
  }

  // ✅ 초기값만 설정 (입력 중 re-render로 커서 튀는 현상 방지)
  useEffect(() => {
    if (ref.current && ref.current.textContent !== value) {
      ref.current.textContent = value ?? '';
    }
  }, [value]);

  return (
    <div
      ref={ref}
      className={`${baseStyle} ${bgStyle}`}
      contentEditable
      suppressContentEditableWarning
      data-placeholder={placeholder}
      onInput={(e) => onChange((e.currentTarget as HTMLDivElement).textContent ?? '')}
    />
  );
}
