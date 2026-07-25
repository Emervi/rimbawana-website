import Button from "../ui/Button";

function Hero() {
    return (
        <section
            id="home"
            className="bg-blue-300"
        >
            <h1 className="text-5xl font-heading text-text font-bold">
                Rimbawana
            </h1>

            <p className="font-body text-text-secondary mt-4 text-xl max-w-2xl">
                Satu Niat, Satu Tekad, Satu Tujuan.
            </p>

            <div className="mt-8 flex gap-4">
                <Button>
                    Tentang Kami
                </Button>
                <Button variant="outline">
                    Lihat Kegiatan
                </Button>
            </div>
        </section>
    );
}

export default Hero;