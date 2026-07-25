import SectionTitle from "../ui/SectionTitle";

function About() {
    return (
        <section
            id="about"
            className="max-w-7xl mx-auto px-6 py-24"
        >
            <div className="grid md:grid-cols-2 gap-14 items-center">

                {/* left */}
                <div>
                    <SectionTitle 
                        subtitle="Tentang Kami"

                        title="Rimbawana UPI Cibiru"

                        description="Rimbawana merupakan organisasi mahasiswa pecinta alam
                        yang menjadi wadah bagi mahasiswa untuk mengembangkan
                        kepedulian terhadap lingkungan, jiwa petualangan,
                        serta rasa kekeluargaan melalui berbagai kegiatan
                        pendidikan, konservasi, dan eksplorasi alam."
                    />

                    <div className="mt-8 flex gap-4">
                        <button className="bg-primary-700 text-white px-6 py-3 rounded-lg hover:bg-primary-500 transition">
                            Selengkapnya
                        </button>
                    </div>
                </div>

                {/* right */}
                <div>
                    <img 
                        src="https://placehold.co/600x700" 
                        alt="Rimbawana"
                        className="rounded-2xl shadow-lg"
                    />
                </div>

            </div>
        </section>
    );
}

export default About;