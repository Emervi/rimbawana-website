import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import GalleryCard from "../cards/GalleryCard";

import gallery from "../../data/gallery";

function Gallery() {
    return (
        <section
            id="gallery"
            className="bg-background py-24"
        >
            <Container>

                <SectionTitle 
                    subtitle="Gallery"
                    title="Dokumentasi Kegiatan"
                    description="Momen-momen perjalanan, pelatihan, dan pengabdian Rimbawana."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {gallery.map((item) =>  (
                        <GalleryCard
                            key={item.id}
                            {...item}
                        />
                    ))}

                </div>

            </Container>
        </section>
    );
}

export default Gallery;