import { useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import SearchButton from "./SearchButton";
import QuoteButton from "./QuoteButton";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-40 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

                    <Logo />

                    <DesktopMenu />

                    <div className="hidden lg:flex items-center gap-3">
                        <SearchButton />
                        <QuoteButton />
                    </div>

                    <button
                        className="lg:hidden"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={30} />
                    </button>
                </div>
            </nav>

            <MobileMenu
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    );
};

export default Navbar;