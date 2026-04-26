import { X } from 'lucide-react';

export default function Detail({ value, onClose }: { value: string; onClose: () => void }) {
  return (
    <dialog
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex justify-center items-center w-full h-full bg-black/10 z-99 md:hidden"
      onClick={onClose}
    >
      <div className="relative flex justify-center items-center w-[90vw] h-[90vh] bg-white rounded-lg p-5">
        <button
          type="button"
          className="absolute top-4 right-4 flex justify-center items-center cursor-pointer"
          aria-label="상세 모달 닫기"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>
        {value} 상세 모달 입니다.
      </div>
    </dialog>
  );
}
