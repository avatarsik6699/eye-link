import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "../shared/styles/animations.css";

import { AppShell, ColorSchemeScript, MantineProvider, rem } from "@mantine/core";
import { Outlet } from "@tanstack/react-router";
import Header from "./header/header";
import { overrideTheme } from "./theme";

const App = () => {
  return (
    <>
      <ColorSchemeScript defaultColorScheme="auto" />
      <MantineProvider theme={overrideTheme}>
        <AppShell>
          <Header />

          <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-xl))`}>
            <Outlet />
          </AppShell.Main>
        </AppShell>
      </MantineProvider>
    </>
  );
};

export default App;
