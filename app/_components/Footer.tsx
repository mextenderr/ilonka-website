export default function Footer() {
    return (
        <footer className="flex flex-col items-center text-sm md:text-base justify-evenly h-40 md:h-60 bg-gradient-to-br from-40% from-background to-primary">
            <p>Ilonka de Vos</p>
            <p>Homeopathisch Arts & Coach</p>
            <a href="tel:+31623195686">06-23 19 56 86</a>
            <p className="text-xs md:text-sm">
                &copy; {new Date().getFullYear()}. Alle rechten voorbehouden.
            </p>
        </footer>
    );
}
