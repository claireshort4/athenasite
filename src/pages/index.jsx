import * as React from "react"
import {Container} from "@mui/material";
import Header from "../components/Header";
import { ThemeProvider } from '@mui/material/styles';
import {createTheme} from "@mui/material";
import PageTemplate from "./{markdownRemark.frontmatter__slug}";
import {graphql} from "gatsby";

const theme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: "green !important"
        }
      },
    },
  },
});

export default function Index({
  data, // this prop will be injected by the GraphQL query below.
}) {
  return (
      <PageTemplate data={data}/>
  )
}
export const pageQuery = graphql`
  query {
    markdownRemark(id: { eq: "index" }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`