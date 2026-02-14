import MandalartGrid from '@components/mandalart/MandalartGrid';

export default function Mandalart() {
  return (
    <section>
      <h1>
        <input type="text" placeholder="사용자 이름" />의 목표
      </h1>

      <MandalartGrid />
    </section>
  );
}
