import { useEffect, useRef } from "react";

let oldScrollTop = 0;

export default function Index() {
  const headerRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop

      if (oldScrollTop < scrollTop) {
        // Scrolling Down
        console.log('up')

        if (scrollTop > 100 && scrollTop < 200) {
          headerRef.current.classList.replace('rounded-b-[40%]', 'rounded-b-[20%]')
          headerRef.current.classList.replace('pb-36', 'pb-16')
        } else if (scrollTop > 200) {
          headerRef.current.classList.replace('rounded-b-[20%]', 'rounded-b-0')
          headerRef.current.classList.replace('pb-16', 'pb-4')
        }

      } else if (oldScrollTop > scrollTop) {
        console.log('down')
        // Scrolling Up
        if (scrollTop < 100) {
          headerRef.current.classList.replace('rounded-b-[20%]', 'rounded-b-[40%]')
          headerRef.current.classList.replace('pb-16', 'pb-36')
        } else if (scrollTop < 200) {
          headerRef.current.classList.replace('rounded-b-0', 'rounded-b-[20%]')
          headerRef.current.classList.replace('pb-4', 'pb-16')
        }
      }

      oldScrollTop = scrollTop
    })
  }, [])

  return (
    <main className="h-[200%]">
      <header ref={headerRef} className="sticky -top-80 text-3xl pt-4 md:pt-6 text-white flex justify-center items-end h-96 rounded-b-[40%] pb-36 bg-blue-400 transition-all duration-[800ms]">
        Kendall Wahnschaffe
      </header>
      
    </main>
  );
}
