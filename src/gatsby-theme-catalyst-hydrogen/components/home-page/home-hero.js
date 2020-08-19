/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"

const SiteWelcome = () => {
  const welcomeHeight = () => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(orientation: portrait)").matches &&
      window.matchMedia("(min-width: 768px)").matches
    ) {
      return "50vh"
    } else {
      return "auto"
    }
  }
  return (
    <Fragment>
      <Styled.p>
        My name Rolando, I am a Developer, UI consultant living in Europe. Texting and streaming in Spanish and English about web development mostly. I help companies become more succesfull by building products ( small or large )
      </Styled.p>
      <div
        sx={{
          mt: 4,
          mb: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          alignItems: "center",
          justifyItems: "center",
          gridGap: ["1rem", null, "2rem", null, null],
        }}
      >
      </div>
    </Fragment>
  )
}

export default SiteWelcome