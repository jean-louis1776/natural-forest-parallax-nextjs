import React from "react"
import Head from "next/head"

import "../libs/rain"
import { mouseLeave, mouseMove } from "../libs/mouseTracking"

import { CustomCursor, Layers } from "../components/"

const Home = () => {
  return (
    <>
      <Head>
        <title>Natural Forest Parallax</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <main onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
        <CustomCursor />

        <div className="absolute w-[var(--logo-size)] h-[var(--logo-size)] bg-logo bg-no-repeat left-[calc(51%-calc(var(--logo-size)/2))] top-[calc(var(--index)*2.8)] z-[1]" />

        <section className="overflow-hidden perspective">
          <Layers />
        </section>
      </main>
    </>
  )
}

export default Home
