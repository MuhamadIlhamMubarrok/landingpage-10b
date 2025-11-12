const Member = () => {
  return (
    <section className="h-[300vh] flex flex-col overflow-hidden">

      <div className="relative h-[40vh] lg:h-[110vh] bg-secondary flex items-center justify-center overflow-hidden px-4">
        <h1 className="relative z-0 text-[15vw] md:text-[12vw] lg:text-[11vw] font-hanson font-bold leading-[0.9] text-white opacity-95 text-left select-none">
          YOUR JOURNEY STARTS FROM WITHIN.
        </h1>
      </div>

      <div className="h-[40vh] lg:h-[150vh] bg-primary flex justify-center items-center relative">
        <h1 className="text-[20vw] lg:text-[70vw] font-hanson text-secondary leading-none scale-x-90">
          14
        </h1>
      </div>


      <div className="relative w-full bg-[#121311] text-white px-6 md:px-16 lg:px-32 lg:py-60 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl mx-auto text-[18px] md:text-[22px] lg:text-[35px] leading-relaxed font-figtree">
          <div className="space-y-6">
            <p>
              <span className="font-semibold">XBCLASS</span> adalah ruang bagi ide, energi, dan
              kepribadian yang beragam untuk berjalan berdampingan.
            </p>
            <p>
              Kami tumbuh dalam dinamika yang penuh warna — kadang berantakan,
              tapi selalu bergerak ke arah yang sama.
            </p>
          </div>

          <div className="space-y-6">
            <p>
              Di tengah ritme yang tak pernah tenang, kami belajar menemukan
              keseimbangan: antara kebebasan dan tanggung jawab, antara tawa dan ambisi.
            </p>
            <p>
              Setiap individu membawa karakter unik, dan justru di situlah kekuatan kami terbentuk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;