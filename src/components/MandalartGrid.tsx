import Cell from './Cell';

// import { UseGoalReturn } from '@/hooks/useGoal';

interface MandalartGridProps {
  coreGoal: string;
  setCoreGoal: (v: string) => void;
  // goals: UseGoalReturn[];
}

export default function MandalartGrid({ coreGoal, setCoreGoal, goals }: MandalartGridProps) {
  const getGoalIndex = (i: number) => (i < 4 ? i : i - 1);
  const getDetailIndex = (i: number) => (i < 4 ? i : i - 1);

  return (
    <div className="grid grid-cols-3 border" role="grid">
      {Array.from({ length: 9 }).map((_, gridIndex) => (
        <article key={gridIndex} className="grid grid-cols-3">
          {Array.from({ length: 9 }).map((_, cellIndex) => {
            const isMainGrid = gridIndex === 4;
            const isCenter = cellIndex === 4;
            const isCoreCell = isMainGrid && isCenter;

            let value = '';
            let onChange = (_: string) => {};
            let placeholder = '상세목표';

            // 1️⃣ 핵심 목표
            if (isCoreCell) {
              value = coreGoal;
              onChange = setCoreGoal;
              placeholder = '핵심목표';
            }
            // 2️⃣ 목표 1~8
            else if ((gridIndex === 4 && cellIndex !== 4) || (cellIndex === 4 && gridIndex !== 4)) {
              const goalIndex = gridIndex === 4 ? getGoalIndex(cellIndex) : getGoalIndex(gridIndex);

              value = goals[goalIndex].goal.title;
              onChange = goals[goalIndex].setTitle;
              placeholder = `목표 ${goalIndex + 1}`;
            }
            // 3️⃣ 세부 목표
            else {
              const goalIndex = getGoalIndex(gridIndex);
              const detailIndex = getDetailIndex(cellIndex);

              value = goals[goalIndex].goal.details[detailIndex];
              onChange = (v) => goals[goalIndex].setDetail(detailIndex, v);
            }

            return (
              <Cell
                key={`${gridIndex}-${cellIndex}`}
                value={value}
                onChange={onChange}
                isMainCenter={isMainGrid}
                isCenter={isCenter}
                placeholder={placeholder}
              />
            );
          })}
        </article>
      ))}
    </div>
  );
}
