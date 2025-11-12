const Member = () => {
  return (
    <section className="h-[300vh] flex flex-col overflow-hidden">

      <div className="relative h-[40vh] lg:h-[110vh] bg-secondary flex items-center justify-center overflow-hidden px-4">
        <h1 className="relative z-0 text-[15vw] md:text-[12vw] lg:text-[13vw] font-hanson font-bold leading-[0.9] text-white opacity-95 text-left select-none">
          YOUR JOURNEY STARTS FROM WITHIN.
        </h1>
      </div>

      <div className="h-[40vh] lg:h-[150vh] bg-primary flex justify-center items-center relative">
        <h1 className="text-[20vw] lg:text-[70vw] font-hanson text-secondary leading-none scale-x-90">
          14
        </h1>
      </div>


      <div className="relative bg-secondary w-full flex items-start justify-center py-36 md:py-52 lg:py-64 px-6 overflow-hidden">

        <div className="absolute text-primary font-figtree leading-snug -mt-[100px] md:-mt-[150px] lg:-mt-[200px]">
          <p className="text-[10px] md:text-[18px] lg:text-[20px] font-medium mb-3 w-40 md:w-80 lg:w-[390px] ml-24 md:ml-32 lg:ml-44">
            Dibangun dari visi besar yang sama.
            Dengan semangat revolusioner dan persatuan yang tak tergoyahkan,
            kami siap mengubah tantangan menjadi inovasi dan mewujudkan setiap impian.
          </p>

          <div className="text-[12px] lg:text-[14px] leading-tight mt-28 md:mt-40 lg:mt-56 ml-56 md:ml-80 lg:ml-[395px]">
            <p className="font-semibold">Ilham Mubarok</p>
            <p>Wali Kelas</p>
          </div>
        </div>

        <div className="flex text-primary mr-8">
          <svg
            className="w-[170px] h-[170px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-80 ml-[30px] -mt-[84px] md:-mt-[125px] lg:-mt-40"
            viewBox="0 0 300 300"
            fill="currentColor"
          >
            <path d="M120 0C40 0 0 80 0 150V300H200V150H100c0-40 20-80 70-80V0z" />
          </svg>

          <svg
            className="w-[170px] h-[170px] md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-80 scale-y-[-1] scale-x-[-1] -ml-[110px] md:-ml-[162px] lg:-ml-[210px]"
            viewBox="0 0 300 300"
            fill="currentColor"
          >
            <path d="M120 0C40 0 0 80 0 150V300H200V150H100c0-40 20-80 70-80V0z" />
          </svg>

          <div className="w-[100px] h-[85px] md:w-[170px] md:h-[120px] lg:w-[220px] lg:h-[150px] ml-1 md:ml-1 bg-primary" />
        </div>
      </div>



    </section>
  );
};

export default Member;