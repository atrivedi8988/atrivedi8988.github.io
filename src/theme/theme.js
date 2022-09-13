import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
    semanticTokens: {
      colors: {
        error: 'red.500',
        text: {
          default: 'gray.900',
          _dark: 'gray.50',
        },
      },
    },
  })

  export const backgroundTheme = extendTheme({

  })

