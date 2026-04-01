import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const getSubColor = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 0.3)`;
};

type Color = {
  color: string;
  subColor: string;
  setColor: (color: string) => void;
};

export const useColorStore = create<Color>()(
  persist(
    (set) => ({
      color: '#dc2b2e',
      subColor: '#ffebec',
      setColor: (newColor: string) =>
        set({
          color: newColor,
          subColor: getSubColor(newColor)
        })
    }),
    {
      name: 'mandalart-color'
    }
  )
);
