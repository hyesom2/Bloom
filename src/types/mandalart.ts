export interface GoalData {
  title: string;
  details: string[];
}

export interface UseGoalReturn {
  goal: GoalData;
  setTitle: (title: string) => void;
  setDetail: (detailIndex: number, value: string) => void;
}

export interface CellProps {
  value: string;
  onUpdate: ((val: string) => void) | ((index: number, val: string) => void);
  index?: number;
  placeholder?: string;
  isMainCenter?: boolean;
  isCenter?: boolean;
}
