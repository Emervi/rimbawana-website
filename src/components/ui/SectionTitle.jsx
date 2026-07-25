function SectionTitle({
    subtitle,
    title,
    description,
}) {
    return (
        <div className="max-w-3xl mb-14">

            <span className="text-primary-700 uppercase tracking-widest font-semibold">
                {subtitle}
            </span>

            <h2 className="font-heading text-4xl text-text mt-3">
                {title}
            </h2>

            {description && (
                <p className="text-text-secondary mt-5 leading-8">
                    {description}
                </p>
            )}
            
        </div>
    );
}

export default SectionTitle;