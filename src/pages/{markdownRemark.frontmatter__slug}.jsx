import * as React from "react"
import { graphql } from "gatsby"
import {Container, createTheme} from "@mui/material";
import Header from "../components/Header";
import {ThemeProvider} from "@mui/material/styles";
import "./Main.css"
import Divide from "../../static/images/bar.svg"
import Background from "../../static/images/background.svg"
import { StaticImage } from "gatsby-plugin-image"


const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "#E7E4EC !important",
        },
      },
    },
    MuiButton: {
     styleOverrides: {
         text: {
             color: "#6c5092 !important",
             fontWeight: 600
         }
     }
    }
  },
});

export default function PageTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
      const { frontmatter, html } = markdownRemark
  return (
    <div>
      <ThemeProvider theme={theme}>
          <Container maxWidth={"lg"}>
              <Header style={{marginTop: "2em"}} />
              <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
              <StaticImage 
                src="../../static/images/abstract.png" 
                alt="An abstract image"
                imgStyle={{ objectFit: "contain" }}
                className="abstractImage"
              />
            </div>

          </Container>
      </ThemeProvider>
      <Container maxWidth={"lg"} style={{zIndex: 20, marginTop: "-15vh"}} className="content">
        <h1>{frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </div>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`