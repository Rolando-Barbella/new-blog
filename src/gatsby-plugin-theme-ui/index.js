import { merge } from "theme-ui"
import { BaseTheme } from "gatsby-theme-catalyst-core"
import { baseColors } from "@theme-ui/preset-tailwind"
import 'typeface-merriweather';

export default merge(BaseTheme, {
  fonts:{
    body:
    'system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue","Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  },
  colors: {
    primary: baseColors.gray[4],
    secondary: baseColors.red[5],
    accent: baseColors.gray[2],
    header: {
      background: baseColors.gray[2],
      backgroundOpen: baseColors.red[1],
      text: baseColors.gray[8],
      textOpen: baseColors.gray[8],
      icons: baseColors.gray[6],
      iconsHover: baseColors.red[8],
      iconsOpen: baseColors.gray[6],
    },
    footer: {
      background: baseColors.gray[2],
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
  },
  styles: {
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      m: 0,
      mb: 4,
      fontSize: 5,
      mt: 4,
      "::after": {
        display: "block",
        content: '""',
        width: ["25%", "20%", "15%", null, "10%"],
        pt: 2,
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "salmon",
      },
    },
    a: {
      color: baseColors.gray[8],
      "::hover": {
        textDecoration: "none"
      }
    }
  },
  variants: {
    header: {
      padding: "0.5rem",
      boxShadow: "0 2px 2px 0 rgba(0,0,0,.07)",
    },
    siteTitle: {
      fontSize: [2, null, null, 2, null],
      "::after": {
        display: "none",
      },
    },
    footer: {
      padding: "1.5rem",
      fontSize: [1, null, null, 1, null],
      textDecoration: "none",
    },
    navLink: {
      fontSize: 1,
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "1px",
        backgroundColor: "salmon",
        content: "''",
        opacity: "0",
        transition: "height 0.3s, opacity 0.3s, transform 0.3s",
        transform: "translateY(-6px)",
      },
      ":hover, :focus": {
        textDecoration: "none",
        color: baseColors.gray[9],
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "salmon",
      },
      ":active": {
        color: baseColors.gray[10],
      },
      ":hover::after, :active::after, :focus::after": {
        height: "1px",
        transform: "translateY(0px)",
      },
    },
    navLinkActive: {
      textDecoration: "none",
      "::after": {
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        height: "1px",
        backgroundColor: baseColors.gray[10],
        content: "''",
        opacity: "1",
        transform: "translateY(0px)",
        backgroundColor: "salmon",
      },
    },
    navLinkSub: {
      "::after": {
        content: "none",
      },
      ":hover::after": {
        content: "none",
      },
      ":hover, :focus": {
        color: baseColors.gray[10],
      },
      ":active": {
        color: baseColors.gray[10],
      }
    },
    navLinkSubActive: {
      textDecoration: "none",
      color: baseColors.gray[7],
      "::after": {
        content: "none",
      },
    },
  },
})
