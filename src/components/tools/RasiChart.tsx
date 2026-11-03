// South Indian style chart: signs sit in fixed boxes, the lagna box is marked
const GRID: (number | null)[][] = [
  [11, 0, 1, 2],
  [10, null, null, 3],
  [9, null, null, 4],
  [8, 7, 6, 5],
];

export default function RasiChart({
  title,
  rasiNames,
  placed,
  lagnaRasi,
}: {
  title: string;
  rasiNames: string[];
  placed: Record<number, string[]>; // rasi index -> short planet labels
  lagnaRasi?: number;
}) {
  return (
    <figure className="w-full max-w-sm mx-auto">
      <figcaption className="text-center font-black text-gray-900 mb-2">{title}</figcaption>
      <div className="grid grid-cols-4 border-2 border-gray-800 bg-white text-xs sm:text-sm" role="img" aria-label={title}>
        {GRID.flatMap((row, r) =>
          row.map((idx, c) =>
            idx === null ? (
              r === 1 && c === 1 ? (
                <div key={`${r}${c}`} className="col-span-2 row-span-2 flex items-center justify-center text-center font-black text-gray-700 border border-gray-300 p-2">
                  {title}
                </div>
              ) : null
            ) : (
              <div key={`${r}${c}`} className="aspect-square border border-gray-300 p-1 relative">
                <span className="absolute top-0.5 left-1 text-[9px] text-gray-400">{rasiNames[idx]}</span>
                {lagnaRasi === idx && <span className="absolute top-0.5 right-1 text-[10px] font-black text-primary">ல</span>}
                <div className="h-full flex flex-wrap items-center justify-center content-center gap-x-1 pt-2 font-bold text-gray-900">
                  {(placed[idx] || []).map((p) => (
                    <span key={p}>{p}</span>
                  ))}
                </div>
              </div>
            )
          )
        )}
      </div>
    </figure>
  );
}
