export function Input({type, placeholder, value}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value? value: ""}
      className="border rounded px-2 py-1 hover:border-slate-300 focus:outline-none focus:border-primary"
      required
      />
  );
}
