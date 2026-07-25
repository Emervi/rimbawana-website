import navigation from "../../data/navigation";

function Navbar() {
    return (
        <nav className="bg-background border-b border-primary-100 flex items-center justify-between px-8 py-4 shadow-md">
            <h1 className="text-2xl font-bold text-primary-700 font-heading">Rimbawana</h1>

            <ul className="flex gap-6">
                {navigation.map((item) => (
                    <li key={item.id}>
                        <a 
                            href={item.href}
                            className="font-medium hover:text-primary-700 transition-colors"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;