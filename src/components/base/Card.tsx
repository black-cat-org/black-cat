import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-gray-900 border border-gray-800 rounded-xl p-6 ${
        hover ? 'hover:border-purple-600 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-purple-900/20' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
