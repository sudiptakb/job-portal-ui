const ALIGN_CLASSES = {
  center: { box: "left-1/2 -translate-x-1/2", arrow: "left-1/2 -translate-x-1/2" },
  start: { box: "left-0", arrow: "left-6" },
};

// Shows on hover or keyboard focus of the wrapped element.
// Give that element aria-describedby={id} so the text is linked to it.
// Use align="start" for elements near the left edge so the box is not clipped.
export const Tooltip = ({ id, title, text, align = "center", children }) => {
  const alignClasses = ALIGN_CLASSES[align];

  return (
    <span className="group/tooltip relative inline-flex">
      {children}
      {/* pb-3 instead of a margin keeps the tooltip open while the pointer moves onto it */}
      <span
        id={id}
        role="tooltip"
        className={`invisible absolute bottom-full z-20 w-64 pb-3 opacity-0 transition-all duration-300 group-hover/tooltip:visible group-hover/tooltip:opacity-100 group-focus-within/tooltip:visible group-focus-within/tooltip:opacity-100 ${alignClasses.box}`}
      >
        <span className="relative block rounded-xl border border-gray-700/50 bg-gray-800 p-4 text-left shadow-2xl">
          <span className="mb-2 block bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-base font-bold text-transparent">
            {title}
          </span>
          <span className="block text-sm leading-relaxed text-gray-300">
            {text}
          </span>
          <span
            className={`absolute -bottom-1.5 h-3 w-3 rotate-45 border-r border-b border-gray-700/50 bg-gray-800 ${alignClasses.arrow}`}
          ></span>
        </span>
      </span>
    </span>
  );
};
