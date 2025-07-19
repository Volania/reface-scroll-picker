import { useEffect, useRef } from 'react';

export function ScrollPicker({ items = [], defaultOptionIndex = 2, onChange }) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  let paddingStart = 2;
  let paddingEnd = 2;

  const paddedItems = [...Array(paddingStart).fill(''), ...items, ...Array(paddingEnd).fill('')];

  useEffect(() => {
    itemRefs.current[Math.min(defaultOptionIndex, items.length + paddingStart)]?.scrollIntoView({
      block: 'center',
    });
  }, [items, defaultOptionIndex, paddingStart]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          const selectedOptionClasses = ['text-black', 'font-semibold'];

          if (entry.isIntersecting) {
            if (onChange) {
              onChange();
            }
            el.classList.add(...selectedOptionClasses);
          } else {
            el.classList.remove(...selectedOptionClasses);
          }
        });
      },
      {
        root: containerRef.current,
        rootMargin: '-64px 0px -64px 0px',
        threshold: 0.51,
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    items.length !== 0 && (
      <div className="relative w-max border-y border-gray-200">
        <div className="absolute left-0 right-0 h-px bg-gray-200 top-[64px] pointer-events-none" />
        <div className="absolute left-0 right-0 h-px bg-gray-200 bottom-[64px] pointer-events-none" />
        <ul
          ref={containerRef}
          className="h-40 overflow-scroll w-max scroll-picker snap-y snap-mandatory text-gray-400"
        >
          {paddedItems.map((item, i) => (
            <li
              key={i}
              data-id={item || i}
              ref={(el) => (itemRefs.current[i] = el)}
              className="h-8 px-4 flex items-center justify-center snap-start transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
