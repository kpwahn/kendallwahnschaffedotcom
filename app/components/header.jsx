import { useEffect, useRef } from "react";

let oldScrollTop = 0;

export default function Header() {
  const headerRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;

      if (headerRef.current !== undefined) {
        if (oldScrollTop < scrollTop) {
          // Scrolling Down

          if (scrollTop > 100 && scrollTop < 250) {
            headerRef.current.classList.replace(
              "rounded-b-[40%]",
              "rounded-b-[20%]"
            );
            headerRef.current.classList.replace("text-5xl", "text-2xl");
            headerRef.current.classList.replace("pt-32", "pt-60");
            
          } else if (scrollTop > 200) {
            headerRef.current.classList.replace(
              "rounded-b-[20%]",
              "rounded-b-0"
            );
            headerRef.current.classList.replace("pb-16", "pb-4");
            headerRef.current.classList.replace("text-2xl", "text-xl");

            headerRef.current.classList.replace("pt-60", "pt-[274px]");
            textRef.current.classList.replace("w-full", 'w-0');
          }
        } else if (oldScrollTop > scrollTop) {
          // Scrolling Up

          if (scrollTop < 100) {
            headerRef.current.classList.replace(
              "rounded-b-[20%]",
              "rounded-b-[40%]"
            );
            headerRef.current.classList.replace("pb-16", "pb-36");
            headerRef.current.classList.replace("text-2xl", "text-5xl");
            headerRef.current.classList.replace("pt-60", "pt-32");
          } else if (scrollTop < 250) {
            headerRef.current.classList.replace(
              "rounded-b-0",
              "rounded-b-[20%]"
            );
            headerRef.current.classList.replace("pb-4", "pb-16");
            headerRef.current.classList.replace("text-xl", "text-2xl");

            headerRef.current.classList.replace("pt-[274px]", "pt-60");
            textRef.current.classList.replace('w-0', "w-full");
          }
        }
      }

      oldScrollTop = scrollTop;
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="will-change-[padding, font-size] px-4 md:px-6 -m-4 md:-mx-6 shadow-lg sticky -top-64 h-80 pt-32 rounded-b-[40%] bg-[#829855] text-5xl text-white transition-all duration-[800ms] md:pt-6 z-10"
    >
      <div className="will-change-[width] relative text-center w-full transition-[width] duration-1000" ref={textRef}>
        Heeeeeeyo
      </div>
    </header>
  );
}
