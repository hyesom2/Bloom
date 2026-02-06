import Resolution from '@components/Resolution';
import HorseImage from '@assets/images/horse.webp';

export default function SideSection() {
  return (
    <div className="flex flex-col justify-between items-center lg:flex-col min-h-screen px-6 py-8 md:px-12 md:py-16 lg:px-6 lg:py-8">
      <h1 className="text-9xl font-bold text-white">2026</h1>
      <img
        src={HorseImage}
        alt=""
        className="block w-full h-full md:w-150 md:h-150 lg:w-full lg:h-full object-contain"
      />
      <Resolution />
    </div>
  )
}