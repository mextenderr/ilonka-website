"use client";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { useMedia } from "react-use";

interface ResponsiveContextType {
    isMobile: boolean;
    isDesktop: boolean;
    scrollY: number;
    docBottomReached: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextType>({
    isMobile: false,
    isDesktop: false,
    scrollY: 0,
    docBottomReached: false,
});

interface ResponsiveProviderProps {
    children: ReactNode;
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
    const isMobile = useMedia("(max-width: 768px)", true);
    const isDesktop = !isMobile;
    const [scrollY, setScrollY] = useState(0);
    const [docBottomReached, setDocBottomReached] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setScrollY(scrollTop);
            setDocBottomReached(scrollTop + windowHeight >= documentHeight - 1);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <ResponsiveContext.Provider
            value={{ isMobile, isDesktop, scrollY, docBottomReached }}
        >
            {children}
        </ResponsiveContext.Provider>
    );
}

export const useResponsive = (): ResponsiveContextType => {
    const context = useContext(ResponsiveContext);
    if (!context) {
        throw new Error(
            "useResponsive must be used within a ResponsiveProvider"
        );
    }
    return context;
};
