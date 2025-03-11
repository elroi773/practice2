import { useRef, useState } from "react";
import "./Navbar.css";

const items = [
    {
        name: "Skills",
        items: ["UI/UX", "Development", "Design"],
    },
];

const Link = ({ item, activeItem, onHover }) => {
    const linkRef = useRef();

    const handleHover = () => {
        if (linkRef.current) {
            const rect = linkRef.current.getBoundingClientRect();
            onHover(item, `${rect.x}px`);
        }
    };

    return (
        <a
            className={item.name === activeItem?.name ? "active" : ""}
            ref={linkRef}
            onMouseEnter={handleHover}
        >
            {item.name}
        </a>
    );
};

const Search = () => (
    <div className="navbar-search">
        <span className="material-symbols-outlined">search</span>
        <input type="text" placeholder="Search" />
    </div>
);

export const Navbar = () => {
    const [translateX, setTranslateX] = useState("0");
    const [activeItem, setActiveItem] = useState(null);

    const handleLinkHover = (item, x) => {
        setActiveItem(item || null);
        setTranslateX(x);
    };

    return (
        <nav className="navbar">
            <div className="navbar-menu">
                {items.map((item) => (
                    <Link
                        key={item.name}
                        activeItem={activeItem}
                        item={item}
                        onHover={handleLinkHover}
                    />
                ))}
            </div>
            <div
                style={{ transform: `translateX(${translateX})` }}
                className={`navbar-dropdown ${activeItem ? "visible" : ""}`}
            >
                {activeItem?.items?.map((link) => (
                    <a key={link}>{link}</a>
                ))}
            </div>
        </nav>
    );
};
