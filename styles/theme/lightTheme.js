import { blueGrey, grey } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5122C0',
      dark: '#2f009d',
      shadowLevel01: '#864dff1f',
      shadowLevel02: '#6323ff42',
    },
    secondary: {
      main: '#2F2D5C',
    },
    text: {
      // primary: '#ffffffb3',
      // secondary: '#ffffff8c',
      // tertiary: '#45525f',
      // icon: '#bdc2c6',
      // divider: '#304352',
      // disabled: blueGrey[600],
      // disabled: grey[600],
    },
    background: {
      dark: '#f5f5f5',
      accent: '#ffffff',
      default: '#ffffff',
      paper: '#ffffff',
    },
    action: {
      // disabled: blueGrey[100],
      // disabledBackground: blueGrey[100],
      // disabledOpacity: 0.26,
    },
  },
  shape: {
    borderRadius: 11,
  },
  typography: {
    // fontFamily: ['Inter', 'sans-serif'].join(','),
    fontFamily: ['Maven Pro', 'Noto Sans', 'sans-serif'].join(','),
    // letterSpacing: '0.015rem',
    color: '#2F2D5C',
  },
  mixins: {
    drawer: {
      minWidth: 200,
      width: 200,
    },
    toolbar: {
      minHeight: 72,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&&': {
            textTransform: 'capitalize',
            '.MuiButton-label': {
              textTransform: 'capitalize',
            },
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        root: {},
        tooltip: {
          // backgroundImage:
          //   "linear-gradient(rgb(34 84 82 / 12%), rgb(26 38 46 / 18%))",
          backdropFilter: 'blur(5px)',
          backgroundColor: '#ffffffb5',
          color: '#2F2D5C',
          borderRadius: 5,
          paddingBottom: 3,
          fontSize: 13,
          // boxShadow:
          //   "3px 3px 1.25rem 3px rgb(100 241 255 / 3%), 8px 8px 3rem 10px rgb(13 38 40 / 31%)",
          boxShadow: `0 6.2px 10px rgba(0, 0, 0, 0.07),
          0 11.9px 14.6px rgba(0, 0, 0, 0.049), 0 17.8px 17.1px rgba(0, 0, 0, 0.036),
          0 24.6px 18.8px rgba(0, 0, 0, 0.028), 0 33.1px 20.2px rgba(0, 0, 0, 0.023),
          0 43.5px 22.1px rgba(0, 0, 0, 0.019), 0 56px 26px rgba(0, 0, 0, 0.012),
          0 -24.6px 18.8px rgba(0, 0, 0, 0.028), 0 -33.1px 20.2px rgba(0, 0, 0, 0.023),
          0 -43.5px 22.1px rgba(0, 0, 0, 0.019), 0 -56px 26px rgba(0, 0, 0, 0.012)`,
        },
      },
    },
  },
})

const lightTheme = responsiveFontSizes(theme)

export default lightTheme
