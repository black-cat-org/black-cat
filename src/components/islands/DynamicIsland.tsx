import { useState, useEffect } from 'react';
import { useFloating, offset, flip, shift } from '@floating-ui/react';

export function DynamicIsland() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(0);

  const { refs, floatingStyles } = useFloating({
    placement: 'top',
    middleware: [offset(10), flip(), shift()],
  });

  const statuses = [
    { icon: '⚡', text: 'Desarrollando', color: 'purple' },
    { icon: '🚀', text: 'Lanzando', color: 'blue' },
    { icon: '✨', text: 'Optimizando', color: 'pink' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatus((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const status = statuses[currentStatus];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div
        ref={refs.setReference}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`bg-black border border-gray-800 rounded-full transition-all duration-500 cursor-pointer shadow-2xl ${
          isExpanded ? 'px-8 py-4' : 'px-6 py-3'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          background: 'rgba(0, 0, 0, 0.8)',
        }}
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl animate-pulse">{status.icon}</span>
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`}
          >
            <p className={`text-sm font-semibold text-${status.color}-400 whitespace-nowrap`}>
              {status.text}
            </p>
            <p className="text-xs text-gray-400">Black Cat Dev</p>
          </div>
        </div>
      </div>
    </div>
  );
}
