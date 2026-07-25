import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import DivisionCard from "../cards/DivisionCard";

import divisions from "../../data/divisions";

function Division() {
    return (
        <section 
            id="division"
            className="bg-primary-50 py-24"
        >
            <Container>
                <SectionTitle 
                    subtitle="Divisi"
                    title="Bidang Pengembangan Rimbawana"
                    description="Setiap anggota dapat mengembangkan kemampuan sesuai minat melalui tiga divisi utama yang menjadi fokus kegiatan Rimbawana."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {divisions.map((division) => (
                        <DivisionCard
                            key={division.id}
                            {...division}
                        />
                    ))}

                </div>

            </Container>
        </section>
    );
}
export default Division;