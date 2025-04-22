export const ThreeDotsLoader = () => (
  <div className="flex space-x-1">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-2 h-2 rounded-full bg-[#194b88] animate-bounce"
        style={{ animationDelay: `${i * 0.2}s` }}
      />
    ))}
  </div>
);
