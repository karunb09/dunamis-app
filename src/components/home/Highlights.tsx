export default function Highlights() {
  const items = [
    { text: "Growth", color: "text-orange-400" },
    { text: "Play", color: "text-emerald-400" },
    { text: "Performance", color: "text-sky-400" },
    { text: "Collaboration", color: "text-pink-400" },
    { text: "Inspiration", color: "text-yellow-400" },
    { text: "Expression", color: "text-purple-400" },
  ];

  return (
    <div className="bg-black overflow-hidden py-4">
      <div className="marquee whitespace-nowrap">
        {/* Track 1 */}
        {items.map((item, i) => (
          <span
            key={`a-${i}`}
            className={`mx-6 text-lg font-semibold ${item.color}`}
          >
            ✦ {item.text}
          </span>
        ))}

        {/* Track 2 (duplicate) */}
        {items.map((item, i) => (
          <span
            key={`b-${i}`}
            className={`mx-6 text-lg font-semibold ${item.color}`}
          >
            ✦ {item.text}
          </span>
        ))} 
      </div>
    </div>
  );
}
