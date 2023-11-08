'use client'

import { ReactNode, useState } from 'react'

export function PointerBlur({ children }: { children: ReactNode }) {
  const [pointerInside, setPointerInside] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  function pointerCoordinates(clientX: number, clientY: number) {
    setX(clientX)
    setY(clientY)

    console.log(JSON.stringify({ clientX, clientY }, null, 2))
  }

  return (
    <div
      className={`relative flex flex-1 items-center justify-center`}
      onPointerEnter={() => setPointerInside(true)}
      onPointerLeave={() => setPointerInside(false)}
      onPointerMove={({ clientX, clientY }) =>
        pointerCoordinates(clientX, clientY)
      }
    >
      {pointerInside && (
        <div
          style={{ left: x, top: y }}
          className={`blur-full pointer-events-none absolute h-96 w-96 -translate-x-full -translate-y-full rounded-full bg-violet-300 mix-blend-soft-light transition-transform duration-200`}
        ></div>
      )}
      {children}
    </div>
  )
}
