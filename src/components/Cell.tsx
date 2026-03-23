import type { CellProps } from '@/types/mandalart';
import { memo, useEffect, useRef } from 'react';

const Cell = memo(({ value, onUpdate, index, isMainCenter, isCenter, placeholder }: CellProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const baseStyle = `flex justify-center items-center w-10 h-10 md:w-25 md:h-25 overflow-hidden text-center text-sm border border-border outline-none empty-placeholder transition-colors`;
  let bgStyle = `bg-white text-black`;

  if (isMainCenter) {
    if (isCenter) {
      bgStyle = `bg-primary text-white font-bold`;
    } else {
      bgStyle = `bg-secondary font-bold`;
    }
  } else if (isCenter) {
    bgStyle = `bg-secondary font-bold`;
  }

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
    />
  );
});

export default Cell;
