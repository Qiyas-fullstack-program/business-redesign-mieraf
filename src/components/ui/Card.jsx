export default function Card({ children, className = "", ...props }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 ${className}`} {...props}>
      {children}
    </div>
  );
}