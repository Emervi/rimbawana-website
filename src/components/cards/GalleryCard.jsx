function GalleryCard({
    image,
    title,
    category,
}) {
    return (
        <div className="group overflow-hidden rounded-2xl shadow-md">
            <div className="overflow-hidden">
                <img 
                    src={image}
                    alt={title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
                />
            </div>

            <div className="bg-white p-5">
                <span className="text-sm text-primary-700 font-semibold">
                    {category}
                </span>

                <h3 className="mt-2 font-heading text-xl">
                    {title}
                </h3>
            </div>
        </div>
    );
}
export default GalleryCard;