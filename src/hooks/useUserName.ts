import { useEffect, useState } from 'react';

const USERNAME_KEY = 'userName';

export function useUserName() {
  const [name, setName] = useState(() => {
    return localStorage.getItem(USERNAME_KEY) || '';
  });

  useEffect(() => {
    if (name) {
      localStorage.setItem(USERNAME_KEY, name);
    } else {
      localStorage.removeItem(USERNAME_KEY);
    }
  }, [name]);

  return { name, setName };
}
