export default function WebProgress({ total, current }) {
  return (
    <div className="absolute top-1 left-4 right-4 flex gap-1 z-50">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1 flex-1 rounded ${
            i <= current ? "bg-neutral-200" : "bg-white/30"
          }`}
        />
      ))}
    </div>
  );
}
