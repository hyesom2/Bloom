import { useEffect, useState } from 'react';

const createEmptyDetails = () => Array(8).fill('');

export interface GoalData {
  title: string; // 목표
  details: string[]; // 세부목표 8개
}

export function useGoal(index: number) {
  const GOAL_KEY = `goal-${index}`;

  const [goal, setGoal] = useState<GoalData>(() => {
    const savedGoal = localStorage.getItem(GOAL_KEY);

    return savedGoal ? JSON.parse(savedGoal) : { title: '', details: createEmptyDetails() };
  });

  useEffect(() => {
    localStorage.setItem(GOAL_KEY, JSON.stringify(goal));
  }, [goal]);

  const setTitle = (title: string) => setGoal((prev) => ({ ...prev, title }));

  const setDetail = (detailIndex: number, value: string) =>
    setGoal((prev) => {
      const details = [...prev.details];
      details[detailIndex] = value;
      return { ...prev, details };
    });

  return { goal, setTitle, setDetail };
}
