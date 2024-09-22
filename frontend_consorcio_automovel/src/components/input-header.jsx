export function InputHeader({ placeholder, onChange }) {
  const placeHolderCustom ="Pesquisar "+ placeholder.substring(1)
  return (
    <input
      placeholder={placeHolderCustom}
      onChange={onChange}
      type="text"
      className="border border-slate-300 rounded px-2 focus:outline-none hover:border-slate-400 focus:border-indigo-500" />
  );
}
