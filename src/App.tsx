import Mandalart from '@components/Mandalart';
import SideSection from '@components/SideSection';

function App() {
  return (
    <div className="flex">
      <aside className="w-125 min-h-screen bg-primary">
        <SideSection />
      </aside>

      <main className="w-full min-h-screen grow bg-gray-50 flex items-center justify-center">
        <Mandalart />
      </main>
    </div>
  );
}

export default App;