import { useEffect, useRef } from "react";

export default function Index() {
  const headerRef = useRef()

  useEffect(() => {
    let oldScrollY = 0
    window.addEventListener('scroll', () => {
      if (window.scrollY < 400 > 0) {
        const percentage = Number(getComputedStyle(headerRef.current).getPropertyValue('border-bottom-left-radius').replace('%', ''))
        
        if (oldScrollY > window.scrollY) {
          headerRef.current.style.borderBottomLeftRadius = `${percentage + 0.25}%`
          headerRef.current.style.borderBottomRightRadius = `${percentage + 0.25}%` 
        } else {
          headerRef.current.style.borderBottomLeftRadius = `${percentage - 0.25}%`
          headerRef.current.style.borderBottomRightRadius = `${percentage - 0.25}%`  
        }
        
      }

      oldScrollY = window.scrollY
    })
  }, [])

  return (
    <main className="h-[200%]">
      <header ref={headerRef} className="h-[400px] rounded-b-[30%] bg-blue-400">Header</header>
      <h1 className="text-4xl">Kendall Wahnschaffe</h1>
    </main>
  );
}
