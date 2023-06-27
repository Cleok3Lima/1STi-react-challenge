import { useState } from "react"
import axios from "axios"

//COMPONENTS
import { BsSearchHeart } from "react-icons/bs"

//STYLES
import styles from "./Search.module.scss"

export const Search = ({ onSearchChange }) => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}&days=7`

  const url_search = `http://api.weatherapi.com/v1/search.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${location}`

  const getCapitals = (value: string) => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${value}`
      )
      .then((response) => {
        response.data.current.temp_c
      })
  }

  const listLocation = () => {
    axios.get(url_search).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
    }
  }

  return (
    <>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>Previsão do Tempo</h1>
      </div>

      <div className={styles.search}>
        <input
          className={styles.search__location}
          type="search"
          id="location"
          name="location"
          placeholder="Cidade"
          value={location}
          onKeyDown={searchLocation}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className={styles.search__button}
          type="submit"
          onClick={searchLocation}
        >
          <BsSearchHeart />
        </button>
      </div>

      <hr />

      <div className={styles.temperature}>
        <h2 className={styles.temperature__title}>Capitais</h2>
        <div
          className={`
            ${styles.temperature__minMaxTitle}
            ${styles["temperature__minMaxTitle--first"]}`}
        >
          <div className={styles["temperature__minMaxTitle--min"]}>Min</div>
          <div className={styles["temperature__minMaxTitle--max"]}>Max</div>
        </div>

        <div
          className={`
          ${styles.temperature__minMaxTitle}
          ${styles["temperature__minMaxTitle--second"]}`}
        >
          <div className={styles["temperature__minMaxTitle--min"]}>Min</div>
          <div className={styles["temperature__minMaxTitle--max"]}>Max</div>
        </div>

        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>
            {getCapitals("Rio de Janeiro")}
          </div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>
            Rio de Janeiro
          </div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>São Paulo</div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>
            Belo Horizonte
          </div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>Brasília</div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>Belém</div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>Salvador</div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>Curitiba</div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>Fortaleza</div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>Manaus</div>
        </div>
        <div className={styles.temperature__capitals}>
          <div className={styles["temperature__capitals--min"]}>24°</div>
          <div className={styles["temperature__capitals--max"]}>30°</div>
          <div className={styles["temperature__capitals--city"]}>
            João Pessoa
          </div>
        </div>
      </div>
    </>
  )
}
