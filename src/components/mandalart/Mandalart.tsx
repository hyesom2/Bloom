import MandalartGrid from './MandalartGrid';
import { useCoreGoal } from '@hooks/useCoreGoal';
import { useGoal } from '@hooks/useGoal';
import { useUserName } from '@hooks/useUserName';

export default function Mandalart() {
  const { name, setName } = useUserName();
  const { coreGoal, setCoreGoal } = useCoreGoal();

  const goals = Array.from({ length: 8 }, (_, i) => useGoal(i));

  return (
    <section className="flex flex-col items-center gap-6 min-h-screen bg-gray-50">
      <h1>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름" /> 의 목표 설정
      </h1>

      <MandalartGrid coreGoal={coreGoal} setCoreGoal={setCoreGoal} goals={goals} />
    </section>
  );
}
