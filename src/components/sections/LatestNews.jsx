import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

import NewsCard from "../cards/NewsCard";

import news from "../../data/news";

function LatestNews() {
    return (
        <section
            id="news"
            className="py-24"
        >
            <Container>
                <SectionTitle 
                    subtitle="Latest News"
                    title="Berita Terbaru"
                    description="Ikuti berbagai kegiatan, pelatihan, dan ekspedisi terbaru dari Rimbawana."
                />

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {news.map((item) => (
                        <NewsCard
                            key={item.id}
                            {...item}
                        />
                    ))}

                </div>

            </Container>
        </section>
    );
}

export default LatestNews;