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
        } else if (scrollTop > 200) {
          headerRef.current.classList.replace('rounded-b-[20%]', 'rounded-b-0')
        }

      } else if (oldScrollTop > scrollTop) {
        console.log('down')
        // Scrolling Up
        if (scrollTop < 100) {
          headerRef.current.classList.replace('rounded-b-[20%]', 'rounded-b-[40%]')
        } else if (scrollTop < 200) {
          headerRef.current.classList.replace('rounded-b-0', 'rounded-b-[20%]')
        }
      }

      oldScrollTop = scrollTop
    })
  }, [])

  return (
    <main className="h-[200%]">
      <header ref={headerRef} className="text-3xl pt-4 md:pt-6 text-white flex justify-center h-96 rounded-b-[40%] bg-blue-400 transition-all">
        Kendall Wahnschaffe
      </header>
      
    </main>
  );
}
