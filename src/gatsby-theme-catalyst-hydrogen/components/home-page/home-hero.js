/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

const SiteWelcome = () => {
  const data = useStaticQuery(graphql`
    query {
      sanityHomePage {
        heroTitle
        _rawHeroText
        heroImage {
          asset {
            fluid(maxWidth: 1024) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  `)

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
  const hero = data.sanityHomePage
  return (
    <Fragment>
      <Styled.p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum corporis ex animi ipsa quo. Sit iusto neque ipsa necessitatibus! Vero facilis quae labore? Obcaecati nobis quibusdam eius magnam exercitationem fuga.
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