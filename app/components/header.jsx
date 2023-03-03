import { useEffect, useRef } from "react";

let oldScrollTop = 0;

export default function Header() {
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const scrollTop = document.documentElement.scrollTop;

  //     if (headerRef.current !== undefined) {
  //       if (oldScrollTop < scrollTop) {
  //         // Scrolling Down

  //         if (scrollTop > 100 && scrollTop < 250) {
  //           headerRef.current.classList.replace(
  //             "rounded-b-[40%]",
  //             "rounded-b-[20%]"
  //           );
  //           headerRef.current.classList.replace("text-5xl", "text-2xl");
            
  //         } else if (scrollTop > 200) {
  //           headerRef.current.classList.replace(
  //             "rounded-b-[20%]",
  //             "rounded-b-0"
  //           );
  //           headerRef.current.classList.replace("pb-16", "pb-4");
  //           headerRef.current.classList.replace("text-2xl", "text-xl");
  //         }
  //       } else if (oldScrollTop > scrollTop) {
  //         // Scrolling Up

  //         if (scrollTop < 100) {
  //           headerRef.current.classList.replace(
  //             "rounded-b-[20%]",
  //             "rounded-b-[40%]"
  //           );
  //           headerRef.current.classList.replace("pb-16", "pb-36");
  //           headerRef.current.classList.replace("text-2xl", "text-5xl");
  //         } else if (scrollTop < 250) {
  //           headerRef.current.classList.replace(
  //             "rounded-b-0",
  //             "rounded-b-[20%]"
  //           );
  //           headerRef.current.classList.replace("pb-4", "pb-16");
  //           headerRef.current.classList.replace("text-xl", "text-2xl");
  //         }
  //       }
  //     }

  //     oldScrollTop = scrollTop;
  //   });
  // }, []);

  return (
    <header
      className="pb-8 flex items-center px-4 md:px-6 shadow-lg h-80 bg-[#829855] text-5xl text-white -mx-4 rounded-br-[75%]"
    >
      Hello there.
    </header>
  );
}
