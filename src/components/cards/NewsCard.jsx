function NewsCard({
  title,
  date,
  category,
  image,
  excerpt,
}) {
    return (
        <article className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <img 
                src={image}
                alt={title}
                className="h-56 w-full object-cover"
            />

            <div className="p-6">
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
                    {category}
                </span>

                <h3 className="mt-4 font-heading text-2xl text-text">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-text-secondary">
                    {date}
                </p>

                <p className="mt-4 leading-7 text-text-secondary">
                    {excerpt}
                </p>

                <button className="mt-6 text-primary-700 font-semibold hover:text-primary-500">
                    Baca Selengkapnya →
                </button>
            </div>

        </article>
    );
}

export default NewsCard;