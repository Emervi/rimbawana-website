function Hero() {
    return (
        <section
            id="home"
            className="bg-blue-300"
        >
            <h1 className="text-5xl font-bold text-green-800">
                Rimbawana
            </h1>

            <p className="mt-4 text-xl max-w-2xl">
                Satu Niat, Satu Tekad, Satu Tujuan.
            </p>

            <div className="mt-8 flex gap-4">
                <button className="px-6 py-3 rounded-lg bg-green-700 text-white hover:bg-green-800 transition">
                    Tentang Kami
                </button>

                <button className="px-6 py-3 rounded-lg border border-green-700 text-green-700 hover:bg-green-700 hover:text-white transition">
                    Lihat Kegiatan
                </button>
            </div>
        </section>
    );
}

export default Hero;