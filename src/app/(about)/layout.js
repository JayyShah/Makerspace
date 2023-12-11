import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Venture Capital",
    "Pitch Deck",
    "FundRaising",
    "Startups",
    "Brand Strategy",
    "Customer Experience Strategies",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
