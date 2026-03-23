import MandalartGrid from './MandalartGrid';
import { useCoreGoal } from '@hooks/useCoreGoal';
import { useGoal } from '@hooks/useGoal';
import { useUserName } from '@hooks/useUserName';

export default function Mandalart() {
  const { name, setName } = useUserName();
  const { coreGoal, setCoreGoal } = useCoreGoal();

  const g0 = useGoal(0);
  const g1 = useGoal(1);
  const g2 = useGoal(2);
  const g3 = useGoal(3);
  const g4 = useGoal(4);
  const g5 = useGoal(5);
  const g6 = useGoal(6);
  const g7 = useGoal(7);
  const goals = [g0, g1, g2, g3, g4, g5, g6, g7];

  return (
    <section className="flex flex-col items-center gap-6 min-h-screen bg-gray-50">
      <h1>
        <label htmlFor="name" className="sr-only">
          사용자 이름 입력
        </label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="사용자 이름" />
        <span>의 목표 설정</span>
      </h1>

      <MandalartGrid coreGoal={coreGoal} setCoreGoal={setCoreGoal} goals={goals} />
    </section>
  );
}
