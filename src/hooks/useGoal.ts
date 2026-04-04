import { useCallback, useEffect, useState } from 'react';

const createEmptyDetails = () => Array(8).fill('');

export function useGoal(index: number) {
  const GOAL_KEY = `goal-${index}`;

  const [goal, setGoal] = useState(() => {
    try {
      const savedGoal = localStorage.getItem(GOAL_KEY);

      return savedGoal ? JSON.parse(savedGoal) : { title: '', details: createEmptyDetails() };
    } catch {
      return {
        title: '',
        details: createEmptyDetails()
      };
    }
  });

  useEffect(() => {
    localStorage.setItem(GOAL_KEY, JSON.stringify(goal));
  }, [goal, GOAL_KEY]);

  const setTitle = useCallback((title: string) => {
    setGoal((prev: any) => ({ ...prev, title }));
  }, []);

  const setDetail = useCallback((detailIndex: number, value: string) => {
    setGoal((prev: any) => {
      const nextDetails = [...prev.details];
      nextDetails[detailIndex] = value;

      return { ...prev, details: nextDetails };
    });
  }, []);

  return { goal, setTitle, setDetail };
}
