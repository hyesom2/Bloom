import Mandalart from '@components/Mandalart';
import SideSection from '@components/SideSection';

export default function Home() {
  const sideLayout = `w-full lg:w-1/4 min-h-screen bg-primary`;
  const mainLayout = `w-full min-h-screen grow bg-gray-50 flex items-center justify-center`;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
      <aside className={sideLayout} aria-label="올해의 다짐 구역">
        <SideSection />
      </aside>

      <main className={mainLayout}>
        <h1 className="sr-only">2026년 만다라트 목표 설정</h1>
        <Mandalart />
      </main>
    </div>
  );
}
