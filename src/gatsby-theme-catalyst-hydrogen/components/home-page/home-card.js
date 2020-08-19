/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Card = ({ id, title, createdAt, slug,  }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: ["column", null, "row", null, null],
        width: ["100vw", "auto", null, null, null],
        position: ["relative", "static", null, null, null],
        left: ["calc(-50vw + 50%)", "auto", null, null, null],
        backgroundColor: "salmon",
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
        <Styled.h3
          sx={{
            mt: 0,
          }}
        >
          <a
            sx={{
              color: "white",
              textDecoration: "none",
              fontWeight: "400",
              ":hover": {
                color:"#4c4c4c"
              },
            }}
            href={slug}
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </Styled.h3>
        <a
          sx={{
            color: "text",
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
          target="_blank"
          rel="noopener noreferrer"
        >
          Read it
        </a>
        <p
          sx={{
            fontSize: "60%",
            textTransform: "uppercase",
            letterSpacing: "wider",
            m: 0,
          }}
        >
         {createdAt}
        </p>
      </div>
    </div>
  )
}

export default Card
