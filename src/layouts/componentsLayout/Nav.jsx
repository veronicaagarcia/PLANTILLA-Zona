import { useState, useEffect } from "react";

export default function Nav() {
    const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav className={`flex flex-col mb-5 w-fit gap-1 md:gap-2 tracking-wider items-center font-sans text-BACKGROUND md:flex md:flex-row md:items-end md:h-full md:my-auto`}>
      <a href="/" className={`${currentPath === "/" && "underline decoration-COLOR2 font-semibold"}`}>
        <span className="hover:text-COLOR2 text-center w-full transition-colors duration-150 px-4">
          Inicio
        </span>
      </a>
      <a href="/servicios" className={`${
            currentPath.includes("/servicios") && "underline decoration-COLOR2 font-semibold"
          }`}
        >
      <span className="hover:text-COLOR2 text-center w-full transition-colors duration-150 px-4">
          Servicios
      </span>
        </a>
      <a
        href="/proyectos" className={`${
          currentPath.includes("/proyectos") && "underline decoration-COLOR2 font-semibold"
        }`}
      >
      <span className="hover:text-COLOR2 text-center w-full transition-colors duration-150 px-4">
          Proyectos
      </span>
        </a>
      <a href="/nosotros" className={`${
          currentPath.includes("/nosotros") && "underline decoration-COLOR2 font-semibold"
        }`}
      >
      <span className="hover:text-COLOR2 text-center w-full transition-colors duration-150 px-4">
          Nosotros
      </span>
      </a>
      <a href="/contacto" className={`${
            currentPath.includes("/contacto") && "underline decoration-COLOR2 font-semibold"
          }`}
        >
      <span className="hover:text-COLOR2 text-center w-full transition-colors duration-150 px-4">
          Contacto
      </span>
        </a>
    </nav>
  )
}