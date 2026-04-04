import { useColorStore } from '@/store/useColorStore';
import type { CellProps } from '@/types/mandalart';
import { memo, useEffect, useRef } from 'react';

const Cell = memo(({ value, onUpdate, index, isMainCenter, isCenter, placeholder, onClick }: CellProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { color, subColor } = useColorStore();

  const baseStyle = `flex justify-center items-center w-25 h-25 overflow-hidden text-center text-sm border border-border outline-none empty-placeholder transition-colors`;
  let bgStyle = `bg-white text-black`;

  if (isMainCenter) {
    if (isCenter) {
      bgStyle = `text-white font-bold`;
    } else {
      bgStyle = `font-bold`;
    }
  } else if (isCenter) {
    bgStyle = `font-bold`;
  }

  const getDynamicStyle = () => {
    if (isMainCenter && isCenter) {
      return { backgroundColor: color, color: '#fff' };
    }
    if ((isMainCenter && !isCenter) || (!isMainCenter && isCenter)) {
      return { backgroundColor: subColor };
    }
    return {};
  };

  useEffect(() => {
    if (ref.current && ref.current.textContent !== value) {
      ref.current.textContent = value ?? '';
    }
  }, [value]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.textContent ?? '';

    if (index !== undefined && typeof onUpdate === 'function') {
      (onUpdate as (i: number, v: string) => void)(index, text);
    } else {
      (onUpdate as (v: string) => void)(text);
    }
  };

  return (
    <div
      ref={ref}
      className={`${baseStyle} ${bgStyle}`}
      contentEditable
      suppressContentEditableWarning
      role="textbox"
      aria-multiline="true"
      aria-label={placeholder}
      data-placeholder={placeholder}
      onInput={handleInput}
      onClick={onClick}
      style={getDynamicStyle()}
    />
  );
});

export default Cell;
