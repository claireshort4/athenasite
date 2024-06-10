import * as React from "react";
import { Container, createTheme } from "@mui/material";
import Header from "../components/Header";
import { ThemeProvider } from "@mui/material/styles";
import "../Main.css";
import { StaticImage } from "gatsby-plugin-image";

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

// Add the children prop to the function parameters
export default function PageTemplate({ children }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth={"lg"}>
          <Header style={{ marginTop: "2em" }} />
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
      <Container maxWidth={"lg"} style={{ zIndex: 20, marginTop: "-15vh" }} className="content">
        {/* Now the children passed to PageTemplate will be rendered here */}
        {children}
      </Container>
    </div>
  );
}
