export default function Resolution() {
  return (
    <div className="flex flex-col grow-0 justify-start items-start gap-3.5 w-full border-none bg-white rounded-2xl p-6">
      <h1 className="w-full text-[32px] md:text-[60px] lg:text-[40px] text-primary font-bold text-center lg:text-left">올해의 다짐</h1>
      <span className="w-full h-1 bg-primary"></span>
      <textarea
        className="resize-none w-full h-30 border-none hover:outline hover:outline-primary focus:outline-primary"
        placeholder="올해의 다짐을 작성해보세요."
      />
    </div>
  )
}