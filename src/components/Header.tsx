import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header className="bg-green-800 text-white shadow-lg">
            <nav className="max-w-6xl mx-auto px-4 py-4">
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-indigo-200 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/tasks" className="hover:text-indigo-200 transition-colors">
                            Tasks
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;