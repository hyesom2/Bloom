import { useColorStore } from '@/store/useColorStore';
import Mandalart from '@components/Mandalart';
import SideSection from '@components/SideSection';
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';
import { useRef } from 'react';

export default function Home() {
  const exportRef = useRef<HTMLDivElement | null>(null);
  const color = useColorStore((state) => state.color);

  const exportPNG = async () => {
    const node = exportRef.current;
    if (!node) return;

    const dataUrl = await htmlToImage.toPng(node, {
      cacheBust: true
    });

    const link = document.createElement('a');
    link.download = 'export.png';
    link.href = dataUrl;
    link.click();
  };

  const exportJPG = async () => {
    const node = exportRef.current;
    if (!node) return;

    const dataUrl = await htmlToImage.toJpeg(node, {
      quality: 0.95
    });

    const link = document.createElement('a');
    link.download = 'export.jpg';
    link.href = dataUrl;
    link.click();
  };

  const exportPDF = async () => {
    const node = exportRef.current;
    if (!node) return;

    const dataUrl = await htmlToImage.toPng(node);

    const img = new Image();
    img.src = dataUrl;

    img.onload = () => {
      const pdf = new jsPDF('p', 'mm', 'a4');

      const imgWidth = 210;
      const imgHeight = (img.height * imgWidth) / img.width;

      pdf.addImage(dataUrl, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('export.pdf');
    };
  };

  const sideLayout = `w-full lg:w-1/4 min-h-screen`;
  const mainLayout = `w-full min-h-screen grow bg-gray-50 flex items-center justify-center`;

  return (
    <div className="flex flex-col lg:flex-row min-h-screen" ref={exportRef}>
      <aside style={{ backgroundColor: color }} className={sideLayout} aria-label="올해의 다짐 구역">
        <SideSection exportPNG={exportPNG} exportJPG={exportJPG} exportPDF={exportPDF} />
      </aside>

      <main className={mainLayout}>
        <h1 className="sr-only">2026년 만다라트 목표 설정</h1>
        <Mandalart />
      </main>
    </div>
  );
}
