import { extendTheme } from '@chakra-ui/react'

const config = {
    cssVarPrefix: 'chkr-',
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const colors = {
    colors: {
        brand: {
            100: "#f2ffff",
            200: "#b6f0f0",
            300: "#42bdbd",
            400: "#158a8a",
            500: "#056f6f",
        }
    }
}

const  layerStyles = {
    base: {
        bg: 'brand.100',
        border: '2px solid',
        borderColor: 'gray.500',
    },
    selected: {
        bg: 'teal.500',
        color: 'teal.700',
        borderColor: 'orange.500',
    },
}

const theme = extendTheme({ ...colors });

export default theme;