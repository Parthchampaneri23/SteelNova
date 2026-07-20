import { FiSearch } from "react-icons/fi";

const SearchButton = () => {
    return (
        <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
            aria-label="Search"
        >
            <FiSearch size={20} />
        </button>
    );
};

export default SearchButton;