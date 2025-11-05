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

      <div className="flex-1 bg-primary flex justify-center items-center relative">
        <h1 className="text-[70vw] font-hanson text-secondary leading-none scale-x-90">
          14
        </h1>
      </div>


      <div className="bg-[#F0F0E6] w-full flex items-start justify-center py-16 px-6 overflow-hidden">

        <div className="flex items-end text-[#C50000] mr-8 gap-1">

          <svg className="w-[120px] h-[120px]" viewBox="0 0 300 300" fill="currentColor">
            <path d="M120 0C40 0 0 80 0 150V300H200V150H100c0-40 20-80 70-80V0z" />
          </svg>

          <svg
            className="w-[120px] h-[120px] scale-y-[-1] scale-x-[-1]"
            viewBox="0 0 300 300"
            fill="currentColor"
          >
            <path d="M120 0C40 0 0 80 0 150V300H200V150H100c0-40 20-80 70-80V0z" />
          </svg>

          <div className="w-[250px] h-[140px] bg-[#C50000]"></div>
        </div>

        <div className="max-w-[480px] text-[#C50000] font-figtree leading-snug">
          <p className="text-[18px] font-medium mb-3">
            Dibangun dari visi besar yang sama.
          </p>

          <p className="text-[18px] font-medium mb-6">
            Dengan semangat revolusioner dan persatuan yang tak tergoyahkan,
            kami siap mengubah tantangan menjadi inovasi dan mewujudkan setiap impian.
          </p>

          <div className="text-[12px] leading-tight mt-4">
            <p className="font-semibold">Ilham Mubarok</p>
            <p>Wali Kelas</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Member;
