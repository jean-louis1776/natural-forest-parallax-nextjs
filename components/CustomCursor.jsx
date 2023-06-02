import React from "react"
import dynamic from "next/dynamic"

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
})

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: "rgba(255, 255, 255, .7)",
      }}
      outerStyle={{
        border: "3px solid rgba(255, 255, 255, .7)",
      }}
    />
  )
}

export default CustomCursor
