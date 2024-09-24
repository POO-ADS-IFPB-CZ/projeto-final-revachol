export function Input({type, placeholder, value, disabled, id, onChange, maxLength }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      value={value}
      className="border rounded px-2 py-1 hover:border-slate-300 focus:outline-none focus:border-primary"
      disabled={disabled && true}
      required
      />
  );
}
