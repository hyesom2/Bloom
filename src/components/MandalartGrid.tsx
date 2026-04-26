import Cell from '@/components/Cell';
import type { UseGoalReturn } from '@/types/mandalart';
import Detail from '@components/Detail';
import { useState } from 'react';

interface MandalartGridProps {
  coreGoal: string;
  setCoreGoal: (v: string) => void;
  goals: UseGoalReturn[];
}

export default function MandalartGrid({ coreGoal, setCoreGoal, goals }: MandalartGridProps) {
  const getIndex = (i: number) => (i < 4 ? i : i - 1);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [selectedGoalIndex, setSelectedGoalIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border" role="grid" aria-label="만다라트 목표 격자">
        {Array.from({ length: 9 }).map((_, gridIndex) => {
          const isMainGrid = gridIndex === 4;

          return (
            <div key={`group-${gridIndex}`} className={`grid-cols-3 ${isMainGrid ? 'grid' : 'hidden md:grid'}`}>
              {Array.from({ length: 9 }).map((_, cellIndex) => {
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
                    onClick={() => {
                      if (isMainGrid && !isCenter) {
                        const goalIndex = getIndex(cellIndex);

                        setSelectedGoal(value);
                        setSelectedGoalIndex(goalIndex);
                      }
                    }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
      {selectedGoal && <Detail goal={goals[selectedGoalIndex!]} onClose={() => setSelectedGoal(null)} />}
    </>
  );
}
