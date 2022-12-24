import { Button } from '@chakra-ui/react'

type Props = {
    buttonText: string
    fontSize: string
    h: string
    w: string
    fontWeight?: string
    marginLeft?: string
    href?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function BlueButton({
    buttonText,
    fontSize,
    h,
    w,
    fontWeight,
    onClick,
    marginLeft,
    href,
}: Props) {
    return (
        <Button
            onClick={onClick}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={fontSize}
            fontWeight={fontWeight}
            h={h}
            w={w}
            marginLeft={marginLeft}
            color={'white'}
            //bg="linear-gradient(90deg, rgba(19,113,182,1) 0%, rgba(6,32,173,1) 46%, rgba(81,15,158,1) 100%)"
            // bgGradient="linear(to-r, blue.400, blue.600)"
            bg="linear-gradient(90deg, rgba(103,41,218,1) 0%, rgba(52,78,219,1) 46%, rgba(39,124,186,1) 100%)"
            _hover={{
                //bg: 'linear-gradient(90deg, rgba(81,15,158,1) 0%, rgba(6,32,173,1) 46%, rgba(19,113,182,1) 100%)'
                //bg: 'linear-gradient(90deg, rgba(74,200,236,1) 0%, rgba(74,167,236,1) 39%, rgba(74,118,236,1) 100%)'
                bg: 'linear-gradient(90deg, rgba(39,124,186,1) 0%, rgba(52,78,219,1) 50%, rgba(103,41,218,1) 100%)',
            }}
            {...(href && { as: 'a' })}
            {...(href && { href })}
        >
            {buttonText}
        </Button>
    )
}
