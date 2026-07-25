function Button({
    children,
    variant = "primary",
}) {

    const styles = {
        primary: "bg-primary-700 text-white hover:bg-primary-500",
        outline: "border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white",
    };

    return (
        <button
            className={`px-6 py-3 rounded-xl transition duration-300 ${styles[variant]}`}
        >
            {children}
        </button>
    );
}

export default Button;