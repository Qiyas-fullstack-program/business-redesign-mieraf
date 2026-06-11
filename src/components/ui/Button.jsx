export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base = "px-6 py-3 rounded-xl font-medium transition-all focus:outline-none focus:ring-2";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    secondary: "bg-gray-800 text-white hover:bg-gray-900"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}