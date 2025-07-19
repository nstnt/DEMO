export function Button({ children, onClick, className, type = "button", variant = "default" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={\`px-4 py-2 rounded font-semibold \${className || ""}\`}
    >
      {children}
    </button>
  );
}
