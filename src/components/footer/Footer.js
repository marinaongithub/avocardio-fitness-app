import * as React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
// import GithubButton from "./Buttons/GithubButton";
//import Link from '@mui/material/Link';
// import { Link } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Divider from "@mui/material/Divider";

// import { blueGrey } from '@mui/material/colors';

// ------------------------- Creator ---------------------------------------- //
const Creator = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  lineHeight: "35px",
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: 10,
  // backgroundColor: "aliceblue",
  height: "90px",
  // minWidth: "140",
  width: "150px",
  fontSize: "10px"
}));

const lightTheme = createTheme({ palette: { mode: "light" } });
// ------------------------------ Footer ----------------------------------------------------------------
export default function Footer() {
  return (
    <div>
      {[lightTheme].map((theme, index) => (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 1, sm: 2, md: 4 }}
          backgroundColor="#618161"
          // borderTop={{ color: "#009720", xs: 1, sm: 2, md: 4 }}
          padding="10px"
        >
          <ThemeProvider theme={theme}>
            {/* ---------------------   Author Card 1 ---------------------------------- */}
            <Creator elevation={12}>
              <a
                href="https://github.com/W-JK"
                rel="noreferrer"
                target={"_blank"}
              >
                <Stack
                  divider={
                    <Divider
                      color="#009720"
                      orientation="horizontal"
                      flexItem
                    />
                  }
                >
                  {/* <GithubButton></GithubButton> */}

                  <Box>GitHub: W-JK</Box>
                  <Box>Wojciech J. Koloska</Box>
                </Stack>
              </a>
            </Creator>

            {/* ---------------------   Author Card 2 ---------------------------------- */}
            <Creator elevation={12}>
              <a
                href="https://github.com/vcdsc"
                target={"_blank"}
                rel="noreferrer"
              >
                <Stack
                  divider={
                    <Divider
                      color="#009720"
                      orientation="horizontal"
                      flexItem
                    />
                  }
                >
                  {/* <GithubButton>
                    <FontAwesomeIcon icon="fab fa-github" size="lg" /> GitHub
                  </GithubButton> */}
                  <Box>GitHub: vcdsc</Box>
                  <Box>Vanessa Correia</Box>
                </Stack>
              </a>
            </Creator>

            {/* ---------------------   Author Card 3 ---------------------------------- */}
            <Creator elevation={12}>
              <a
                href="https://github.com/marinaongithub"
                target={"_blank"}
                rel="noreferrer"
              >
                <Stack
                  divider={
                    <Divider
                      color="#009720"
                      orientation="horizontal"
                      flexItem
                    />
                  }
                >
                  {/* <GithubButton>
                    <FontAwesomeIcon icon="fab fa-github" size="lg" /> GitHub
                  </GithubButton> */}
                  <Box>GitHub: marinaongithub</Box>
                  <Box>Marina Theotiste</Box>
                </Stack>
              </a>
            </Creator>
            {/* ---------------------   Author Card 4 ---------------------------------- */}
            <Creator elevation={12}>
              <a
                href="https://github.com/Sucaad-kulane"
                target={"_blank"}
                rel="noreferrer"
              >
                <Stack
                  divider={
                    <Divider
                      color="#009720"
                      orientation="horizontal"
                      flexItem
                    />
                  }
                >
                  {/* <GithubButton>
                    <FontAwesomeIcon icon="fab fa-github" size="lg" /> GitHub
                  </GithubButton> */}
                  <Box> GitHub: Sucaad </Box>
                  <Box>Sucaad Kulane </Box>
                </Stack>
              </a>
            </Creator>
          </ThemeProvider>
        </Stack>
      ))}
    </div>
  );
}
