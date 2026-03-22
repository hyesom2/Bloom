export type CellType = {
  id?: string; // cell의 고유 ID
  value?: string;
  placeholder?: string;
  isMainCenter?: boolean; // 중앙 3x3 grid의 여부
  isCenter?: boolean; // 각 블록의 중앙 칸 여부
  onChange: (val: string) => void;
};
