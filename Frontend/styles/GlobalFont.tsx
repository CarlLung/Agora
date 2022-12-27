import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                fontFamily: `'MateRegular', serif`,
            },
            // styles for the `heading`
            heading: {
                fontFamily: `'MateRegular', serif`,
            },
            // styles for the `a`
            _placeholder: {
                background: "rgba(51, 170, 51, .4)"
                
                
            }
        },
    },
})

export default theme
