import { useEffect, useState } from 'react';

export default function Resolution() {
  const [savedResolution, setSavedResolution] = useState(() => {
    return localStorage.getItem('resolution') || '';
  });

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSavedResolution(e.target.value);
  };

  useEffect(() => {
    const value = savedResolution;

    const handler = setTimeout(() => {
      if (value === '') {
        localStorage.removeItem('resolution');
      } else {
        localStorage.setItem('resolution', value);
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [savedResolution]);

  return (
    <section
      className="flex flex-col grow-0 justify-start items-start gap-3.5 w-full border-none bg-white rounded-2xl p-6"
      aria-labelledby="resolution-title"
    >
      <h2
        id="resolution-title"
        className="w-full text-[32px] md:text-[60px] lg:text-[40px] text-primary font-bold text-center lg:text-left"
      >
        올해의 다짐
      </h2>

      <span className="w-full h-1 bg-primary" aria-hidden="true"></span>

      <label htmlFor="resolution-textarea" className="sr-only">
        올해의 다짐 입력
      </label>
      <textarea
        id="resolution-textarea"
        className="resize-none w-full h-30 border-none hover:outline hover:outline-primary focus:outline-primary"
        placeholder="올해의 다짐을 작성해보세요."
        value={savedResolution}
        onChange={handleTextareaChange}
      />
    </section>
  );
}
