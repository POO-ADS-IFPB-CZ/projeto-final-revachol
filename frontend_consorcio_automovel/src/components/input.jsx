export function Input({type, placeholder}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded px-2 py-1 hover:border-slate-300 focus:outline-none focus:border-primary"
      required />
  );
}
