import { useEffect, useRef } from "react";

let oldScrollTop = 0;

export default function Header() {
  const headerRef = useRef();

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
            headerRef.current.classList.replace("text-4xl", "text-2xl");
            headerRef.current.classList.replace("pb-36", "pb-16");
          } else if (scrollTop > 200) {
            headerRef.current.classList.replace(
              "rounded-b-[20%]",
              "rounded-b-0"
            );
            headerRef.current.classList.replace("pb-16", "pb-4");
            headerRef.current.classList.replace("text-2xl", "text-xl");
          }
        } else if (oldScrollTop > scrollTop) {
          // Scrolling Up

          if (scrollTop < 100) {
            headerRef.current.classList.replace(
              "rounded-b-[20%]",
              "rounded-b-[40%]"
            );
            headerRef.current.classList.replace("pb-16", "pb-36");
            headerRef.current.classList.replace("text-2xl", "text-4xl");
          } else if (scrollTop < 250) {
            headerRef.current.classList.replace(
              "rounded-b-0",
              "rounded-b-[20%]"
            );
            headerRef.current.classList.replace("pb-4", "pb-16");
            headerRef.current.classList.replace("text-xl", "text-2xl");
          }
        }
      }

      oldScrollTop = scrollTop;
    });
  }, []);

  return (
    <header
      ref={headerRef}
      className="-m-4 md:-mx-6 shadow-lg sticky -top-64 flex h-80 justify-center rounded-b-[40%] bg-[#696435] text-4xl text-white transition-all duration-[800ms] md:pt-6 z-10"
    >
      {/* <div className="fixed top-4 w-fit flex-1">Kendall Wahnschaffe</div> */}
      <p className="self-center">Heeeeeeyo</p>
      {/* <span className="self-center text-9xl">🤸‍♂️</span> */}
    </header>
  );
}
