const Member = () => {
  return (
    <section className="h-full flex flex-col overflow-hidden">
      {/* Bagian atas */}
      <div className="relative bg-secondary flex justify-end py-16 z-10">
        <div className="w-full flex flex-col items-end text-right">
          <div className="mb-4 text-2xl font-hanson leading-[1.1] tracking-tight text-primary">
            <h1 className="mr-12">lorem</h1>
            <h1 className="mr-12">lorem</h1>
            <h1 className="mr-12">lorem</h1>
            <div className="h-1 bg-primary mt-2 w-[clamp(150px,30vw,300px)]"></div>
          </div>

          <div className="mt-6 font-figtree text-left text-primary">
            <h2 className="text-lg font-semibold">with lorem ipsum</h2>
            <p className="text-sm mt-2 leading-relaxed w-40 opacity-90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Bagian bawah + angka besar */}
      <div className="flex-1 bg-primary flex justify-center items-center relative">
        <h1 className="text-[70vw] font-hanson text-secondary leading-none scale-x-90">
          14
        </h1>
      </div>
    </section>
  );
};

export default Member;
