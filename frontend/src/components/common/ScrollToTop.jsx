import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const prevPathname = useRef(pathname);

    useEffect(() => {
        // If navigating to a different page, instantly reset scroll to the top
        if (prevPathname.current !== pathname) {
            window.scrollTo(0, 0);
        }

        if (hash) {
            // Wait for the page to render before scrolling
            setTimeout(() => {
                try {
                    const element = document.querySelector(hash);
                    if (element) {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                } catch (e) {
                    // ignore invalid selector
                }
            }, 100);
        }
        prevPathname.current = pathname;
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;