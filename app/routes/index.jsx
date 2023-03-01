import { useEffect, useRef } from "react";

let oldScrollTop = 0;

export default function Index() {
  const headerRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop

      if (oldScrollTop < scrollTop) {
        // Scrolling Down

        if (scrollTop > 100 && scrollTop < 250) {
          headerRef.current.classList.replace('rounded-b-[40%]', 'rounded-b-[20%]')
          headerRef.current.classList.replace('text-3xl', 'text-2xl')
          headerRef.current.classList.replace('pb-36', 'pb-16')

        } else if (scrollTop > 200) {
          headerRef.current.classList.replace('rounded-b-[20%]', 'rounded-b-0')
          headerRef.current.classList.replace('pb-16', 'pb-4')
          headerRef.current.classList.replace('text-2xl', 'text-xl')
        }

      } else if (oldScrollTop > scrollTop) {
        // Scrolling Up

        if (scrollTop < 100) {
          headerRef.current.classList.replace('rounded-b-[20%]', 'rounded-b-[40%]')
          headerRef.current.classList.replace('pb-16', 'pb-36')
          headerRef.current.classList.replace('text-2xl', 'text-3xl')
        } else if (scrollTop < 250) {
          headerRef.current.classList.replace('rounded-b-0', 'rounded-b-[20%]')
          headerRef.current.classList.replace('pb-4', 'pb-16')
          headerRef.current.classList.replace('text-xl', 'text-2xl')
        }
      }

      oldScrollTop = scrollTop
    })
  }, [])

  return (
    <main className="h-[200%]">
      <header ref={headerRef} className="sticky -top-80 text-3xl pt-12 md:pt-6 text-white flex justify-center h-96 rounded-b-[40%] pb-36 bg-blue-400 transition-all duration-[800ms]">
        <div className="fixed top-4 flex-1 w-fit">Kendall Wahnschaffe</div>
      </header>
      
    </main>
  );
}
