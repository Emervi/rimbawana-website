function DivisionCard({
    code,
    title, 
    description,
    icon,
}) {
    return (
        <div className="group rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

            <div className="text-5xl">
                {icon}
            </div>

            <span className="mt-6 inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
                {code}
            </span>

            <h3 className="mt-4 font-heading text-2xl text-text">
                {title}
            </h3>

            <p className="mt-4 leading-8 text-text-secondary">
                {description}
            </p>
        </div>
    );
}

export default DivisionCard;