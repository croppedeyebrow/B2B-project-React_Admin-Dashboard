import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//색깔 토큰값

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          50: "#F7F7F7",
          100: "#F0F0F0",
          200: "#D9D9D9",
          300: "#C2C2C2",
          400: "#949494",
          500: "#666666",
          600: "#5C5C5C",
          700: "#3D3D3D",
          800: "#2E2E2E",
          900: "#1F1F1F",
        },

        primary: {
          50: "#F3F4F5",
          100: "#E8E8EA",
          200: "#C4C6CB",
          300: "#A1A4AB",
          400: "#5B5F6C",
          500: "#141B2D",
          600: "#121829",
          700: "#0C101B",
          800: "#090C14",
          900: "#06080E",
        },

        greenAccent: {
          50: "#F6FDFB",
          100: "#EDFAF7",
          200: "#D2F3EA",
          300: "#B7EBDE",
          400: "#82DDC5",
          500: "#4CCEAC",
          600: "#44B99B",
          700: "#2E7C67",
          800: "#225D4D",
          900: "#173E34",
        },

        redAccent: {
          50: "#FDF6F6",
          100: "#FBEDED",
          200: "#F6D3D2",
          300: "#F1B9B7",
          400: "#E68480",
          500: "#DB4F4A",
          600: "#C54743",
          700: "#832F2C",
          800: "#632421",
          900: "#421816",
        },

        blueAccent: {
          50: "#F7F8FF",
          100: "#F0F1FF",
          200: "#D9DBFE",
          300: "#C3C6FD",
          400: "#959BFC",
          500: "#6870FA",
          600: "#5E65E1",
          700: "#3E4396",
          800: "#2F3271",
          900: "#1F224B",
        },
      }
    : {
        //ctrl +p  - >  sort line decending
        grey: {
          100: "#1F1F1F",
          200: "#2E2E2E",
          300: "#3D3D3D",
          300: "#5C5C5C",
          400: "#666666",
          500: "#F7F7F7",
          600: "#949494",
          700: "#C2C2C2",
          800: "#D9D9D9",
          900: "#F0F0F0",
        },

        primary: {
          100: "#06080E",
          200: "#090C14",
          300: "#0C101B",
          300: "#121829",
          400: "#141B2D",
          500: "#F3F4F5",
          600: "#5B5F6C",
          700: "#A1A4AB",
          800: "#C4C6CB",
          900: "#E8E8EA",
        },

        greenAccent: {
          100: "#173E34",
          200: "#225D4D",
          300: "#2E7C67",
          300: "#44B99B",
          400: "#4CCEAC",
          500: "#F6FDFB",
          600: "#82DDC5",
          700: "#B7EBDE",
          800: "#D2F3EA",
          900: "#EDFAF7",
        },

        redAccent: {
          100: "#421816",
          200: "#632421",
          300: "#832F2C",
          300: "#C54743",
          400: "#DB4F4A",
          500: "#FDF6F6",
          600: "#E68480",
          700: "#F1B9B7",
          800: "#F6D3D2",
          900: "#FBEDED",
        },

        blueAccent: {
          100: "#1F224B",
          200: "#2F3271",
          300: "#3E4396",
          300: "#5E65E1",
          400: "#6870FA",
          500: "#F7F8FF",
          600: "#959BFC",
          700: "#C3C6FD",
          800: "#D9DBFE",
          900: "#F0F1FF",
        },
      }),
});

// mui 테마 세팅
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: { main: colors.primary[500] },
            secondary: { main: colors.greenAccent[500] },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[200],
            },
            background: {
              default: colors.primary[600],
            },
          }
        : {
            primary: { main: colors.primary[100] },
            secondary: { main: colors.greenAccent[500] },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontsize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontsize: 40,
      },

      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontsize: 32,
      },

      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontsize: 24,
      },

      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontsize: 20,
      },

      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontsize: 16,
      },

      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontsize: 14,
      },
    },
  };
};

//테마 컨텍스트

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
