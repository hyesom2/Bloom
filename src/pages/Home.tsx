import SideSection from '@components/SideSection';
import Mandalart from '@components/mandalart/Mandalart';

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-w-screen">
      <aside className="w-full lg:w-1/4 min-h-screen bg-primary">
        <SideSection />
      </aside>

      <main className="w-full min-h-screen grow bg-gray-50 flex items-center justify-center">
        <Mandalart />
      </main>
    </div>
  );
}
