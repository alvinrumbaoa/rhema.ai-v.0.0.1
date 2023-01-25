import { extendTheme } from '@chakra-ui/react'


// 2. Update the breakpoints as key-value pairs
const breakpoints = {
  xs: "280px",
  iphone:"390px",
  sm: '375px',
  mid: '540px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: '"Inter", sans-serif;',
    body: '"Inter", sans-serif; ',
  },
 
})

export default theme