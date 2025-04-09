import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "Venture Capital",
    "Pitch Deck",
    "FundRaising",
    "Financial Modelling",
    "Business Model Evaluation",
    "Growth Consulting",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
