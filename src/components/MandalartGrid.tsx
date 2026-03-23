import Cell from '@/components/Cell';
import type { UseGoalReturn } from '@/types/mandalart';

interface MandalartGridProps {
  coreGoal: string;
  setCoreGoal: (v: string) => void;
  goals: UseGoalReturn[]; // any 대신 정확한 타입 지정
}

export default function MandalartGrid({ coreGoal, setCoreGoal, goals }: MandalartGridProps) {
  const getIndex = (i: number) => (i < 4 ? i : i - 1);

  return (
    <div className="grid grid-cols-3 border" role="grid" aria-label="만다라트 목표 격자">
      {Array.from({ length: 9 }).map((_, gridIndex) => (
        <div key={`group-${gridIndex}`} className="grid grid-cols-3">
          {Array.from({ length: 9 }).map((_, cellIndex) => {
            const isMainGrid = gridIndex === 4;
            const isCenter = cellIndex === 4;
            const isCoreCell = isMainGrid && isCenter;

            let value = '';
            let onUpdate = null;
            let index: number | undefined = undefined;
            let placeholder = '상세목표';

            if (isCoreCell) {
              value = coreGoal;
              onUpdate = setCoreGoal;
              placeholder = '핵심목표';
            } else if ((gridIndex === 4 && !isCenter) || (cellIndex === 4 && !isMainGrid)) {
              const goalIndex = gridIndex === 4 ? getIndex(cellIndex) : getIndex(gridIndex);
              value = goals[goalIndex].goal.title;
              onUpdate = goals[goalIndex].setTitle;
              placeholder = `목표 ${goalIndex + 1}`;
            } else {
              const goalIndex = getIndex(gridIndex);
              const detailIndex = getIndex(cellIndex);
              value = goals[goalIndex].goal.details[detailIndex];
              onUpdate = goals[goalIndex].setDetail;
              index = detailIndex;
            }
            return (
              <Cell
                key={`${gridIndex}-${cellIndex}`}
                value={value}
                onUpdate={onUpdate}
                index={index}
                isMainCenter={isMainGrid}
                isCenter={isCenter}
                placeholder={placeholder}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
