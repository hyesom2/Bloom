import { useEffect, useState } from 'react';

const CORE_GOAL_KEY = 'coreGoal';

export function useCoreGoal() {
  const [coreGoal, setCoreGoal] = useState(() => {
    return localStorage.getItem(CORE_GOAL_KEY) || '';
  });

  useEffect(() => {
    if (coreGoal) {
      localStorage.setItem(CORE_GOAL_KEY, coreGoal);
    } else {
      localStorage.removeItem(CORE_GOAL_KEY);
    }
  }, [coreGoal]);

  return { coreGoal, setCoreGoal };
}
