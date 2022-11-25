import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                fontFamily: `'AnaphoraTrial', sans-serif`,
            },
            // styles for the `heading`
            heading: {
                fontFamily: `'AnaphoraTrial', sans-serif`,
            },
            // styles for the `a`
        },
    },
})

export default theme
