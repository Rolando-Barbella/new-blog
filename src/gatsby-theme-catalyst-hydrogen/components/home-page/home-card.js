/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"

const Card = ({ id, title, createdAt, slug, category }) => {
  let categoryColor = (category) => {
    switch (category) {
      case "Desarrollo profesional":
        return "#736CED"
      case "JAMstack":
        return "salmon"    
      default:
        return "#54C3C5"
    }
  }
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        width: ["100vw", "auto", null, null, null],
        position: ["relative", "static", null, null, null],
        left: ["calc(-50vw + 50%)", "auto", null, null, null],
        backgroundColor: "#191919",
        boxShadow: ["6px 12px 16px -13px rgba(0,0,0,0.38)"],  
        p: 3,
        mb: 4,
        borderRadius: 3,
      }}
      key={id}
    >
      <div
        sx={{
          mt: [3, null, 0, null, null],
          flex: "2",
        }}
      >
        <Styled.h4
          sx={{
            mt: 0,
          }}
        >
          <a
            sx={{
              color: "white",
              textDecoration: "none",
              fontWeight: "400",
            }}
            href={slug}
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </Styled.h4>
        <a
          sx={{
            color: "#39A2F2",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "90%",
            "::after": {
              content: '"\\00A0 \\2192"',
            },
            ":hover": {
              textDecoration: "underline",
            },
          }}
          href={slug}
          rel="noopener noreferrer"
        >
          Read it
        </a>
        <>
          <p
            sx={{
              color:"#ccc",
              fontSize: "60%",
              letterSpacing: "wider",
              m: 0,
            }}
          >
            {category}
          </p>
          <p
            sx={{
              color:"#ccc",
              fontSize: "60%",
              textTransform: "uppercase",
              letterSpacing: "wider",
              m: 0,
            }}
          >
            {createdAt}
          </p>
        </>
      </div>
    </div>
  )
}

export default Card
