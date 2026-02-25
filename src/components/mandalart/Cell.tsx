// Mandalart의 각 Cell 컴포넌트
interface CellProps {
  id: string; // cell의 고유 ID
  value: string;
  placeholder?: string;
  isMainCenter?: boolean; // 중앙 3x3 grid의 여부
  isCenter?: boolean; // 각 블록의 중앙 칸 여부
  onChange: (val: string) => void;
}

export default function Cell({ value, onChange, isMainCenter, isCenter, placeholder }: CellProps) {
  // Cell의 기본 스타일
  // const baseStyle = `resize-none w-10 h-10 md:w-25 md:h-25 text-center text-sm border-2 border-border outline-none`;
  const baseStyle = `resize-none w-full h-full w-10 h-10 md:w-25 md:h-25 overflow-hidden text-center text-sm border-2 border-border outline-none leading-tight`;

  // Cell의 배경 색상
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

  return (
    // <div
    //   contentEditable="true"
    //   className="w-10 h-10 md:w-25 md:h-25 border border-border flex items-center justify-center text-center"
    // >
    //   {value}
    // </div>
    <div className={`w-full h-full flex items-center justify-center`}>
      {/* <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${baseStyle} ${bgStyle}`}
        placeholder={placeholder}
        aria-label={placeholder}
      /> */}
      <span contentEditable="true" className={`${baseStyle} ${bgStyle}`} onChange={(e) => e.target.value}>
        {value}
      </span>
    </div>
  );
}
