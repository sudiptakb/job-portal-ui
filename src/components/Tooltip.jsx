// Shows on hover or keyboard focus of the wrapped element.
// Give that element aria-describedby={id} so the text is linked to it.
export const Tooltip = ({ id, title, text, children }) => {
  return (
    <span className="group/tooltip relative inline-flex">
      {children}
      {/* pb-3 instead of a margin keeps the tooltip open while the pointer moves onto it */}
      <span
        id={id}
        role="tooltip"
        className="invisible absolute bottom-full left-1/2 z-20 w-64 -translate-x-1/2 pb-3 opacity-0 transition-all duration-300 group-hover/tooltip:visible group-hover/tooltip:opacity-100 group-focus-within/tooltip:visible group-focus-within/tooltip:opacity-100"
      >
        <span className="relative block rounded-xl border border-gray-700/50 bg-gray-800 p-4 text-left shadow-2xl">
          <span className="mb-2 block bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-base font-bold text-transparent">
            {title}
          </span>
          <span className="block text-sm leading-relaxed text-gray-300">
            {text}
          </span>
          <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-r border-b border-gray-700/50 bg-gray-800"></span>
        </span>
      </span>
    </span>
  );
};
