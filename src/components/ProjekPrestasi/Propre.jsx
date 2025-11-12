import CurvedLoop from "./TextLoop";

export default function Propre() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-12 bg-secondary text-[#222]">
      <CurvedLoop marqueeText="XB CLASS" speed={4} direction="left" />
    </section>
  );
}
