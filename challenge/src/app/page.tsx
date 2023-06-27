"use client"
import Image from "next/image"

//COMPONENTS
import { Search } from "@/components/Search/Search"

//STYLES
import styles from "./page.module.scss"

export default function Home() {
  const handleOnSwarchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <main className={styles.main}>
      <Search onSearchChange={handleOnSwarchChange} />
    </main>
  )
}
