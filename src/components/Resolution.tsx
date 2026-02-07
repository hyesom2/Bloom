import { useState, useEffect } from 'react';

export default function Resolution() {
  const [savedResolution, setSavedResolution] = useState(() => {
    return localStorage.getItem('resolution') || '';
  });

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSavedResolution(e.target.value);
  };

  // textarea 수정될 때 마다 localStorage 동기화
  useEffect(() => {
    const value = savedResolution;

    if (value === '') {
      localStorage.removeItem('resolution');
    } else {
      localStorage.setItem('resolution', value);
    }
  }, [savedResolution]);

  return (
    <section
      className="flex flex-col grow-0 justify-start items-start gap-3.5 w-full border-none bg-white rounded-2xl p-6"
      aria-labelledby="resolution-title"
    >
      <h1
        id="resolution-title"
        className="w-full text-[32px] md:text-[60px] lg:text-[40px] text-primary font-bold text-center lg:text-left"
      >
        올해의 다짐
      </h1>
      <span className="w-full h-1 bg-primary" aria-label="hidden"></span>
      <label htmlFor="resolution-textarea" className="sr-only">올해의 다짐 입력</label>
      <textarea
        id="resolution-textarea"
        className="resize-none w-full h-30 border-none hover:outline hover:outline-primary focus:outline-primary"
        placeholder="올해의 다짐을 작성해보세요."
        value={savedResolution}
        onChange={handleTextareaChange}
      />
    </section>
  )
}