import type { UseGoalReturn } from '@/types/mandalart';
import Cell from '@components/Cell';
import { X } from 'lucide-react';

interface DetailProps {
  goal: UseGoalReturn;
  onClose: () => void;
}

export default function Detail({ goal, onClose }: DetailProps) {
  return (
    <dialog
      role="dialog"
      aria-modal="true"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex justify-center items-center w-full h-full bg-black/10 z-99 md:hidden"
      onClick={onClose}
    >
      <div
        className="relative flex justify-center items-center w-[90vw] h-[90vh] bg-white rounded-lg p-5"
        onClick={(e) => e.stopPropagation()}
        aria-label="목표 상세 정보"
      >
        <button
          type="button"
          className="absolute top-4 right-4 flex justify-center items-center cursor-pointer"
          aria-label="상세 모달 닫기"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>

        <div className="grid grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => {
            const isCenter = i === 4;
            const detailIndex = i < 4 ? i : i - 1;
            const value = isCenter ? goal.goal.title : goal.goal.details[detailIndex];

            return (
              <Cell
                key={i}
                value={value}
                isCenter={isCenter}
                isMainCenter={false}
                placeholder={isCenter ? '목표' : '상세목표'}
                onUpdate={isCenter ? goal.setTitle : goal.setDetail}
                index={isCenter ? undefined : detailIndex}
              />
            );
          })}
        </div>
      </div>
    </dialog>
  );
}
