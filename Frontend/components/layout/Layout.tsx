import { Box } from '@chakra-ui/react'

type Props = {
    children: React.ReactNode
}

const backgroundImg = {
    height: '100%',
    minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundImage: '/images/bg.png',
    gridArea: '1 / 1',
}

const Layout = ({ children }: Props) => {
    return (
        <Box sx={backgroundImg}>
            <main>{children}</main>
        </Box>
    )
}

export default Layout
