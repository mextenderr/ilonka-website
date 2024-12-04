"use client";
import { createContext, ReactNode, useContext } from "react";
import { useMedia } from "react-use";

interface ResponsiveContextType {
    isMobile: boolean;
    isDesktop: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextType>({
    isMobile: false,
    isDesktop: false,
});

interface ResponsiveProviderProps {
    children: ReactNode;
}

export function ResponsiveProvider({ children }: ResponsiveProviderProps) {
    const isMobile = useMedia("(max-width: 768px)", true);
    const isDesktop = !isMobile;

    return (
        <ResponsiveContext.Provider value={{ isMobile, isDesktop }}>
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
