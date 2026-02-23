import { useUserName } from '@/hooks/useUserName';
import MandalartGrid from '@components/mandalart/MandalartGrid';

export default function Mandalart() {
  const { name, setName } = useUserName();

  return (
    <section>
      <h1>
        <input type="text" placeholder="사용자 이름" value={name} onChange={(e) => setName(e.target.value)} />의 목표
      </h1>

      <MandalartGrid />
    </section>
  );
}
