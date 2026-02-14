// Mandalart의 각 Cell 컴포넌트

export default function Cell() {
  return (
    <div>
      <label></label>
      <input
        type="text"
        placeholder={`핵심목표 or 목표1~8 or 세부목표`}
        // value={value}
      />
    </div>
  );
}
