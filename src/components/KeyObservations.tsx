type KeyObservationsProps = {
  title?: string;
  items: string[];
};

export default function KeyObservations({
  title = "Key Observations",
  items,
}: KeyObservationsProps) {
  return (
    <div className="mt-6 rounded-lg border border-cyan-200 bg-cyan-50 p-6">
      <h3 className="flex items-center gap-2 text-lg font-semibold text-cyan-900">
        🔍 {title}
      </h3>

      <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}