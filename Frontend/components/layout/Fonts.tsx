import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
        @font-face {
          font-family: 'MateRegular';
          src: url('/MateRegular.ttf');
          format: 'ttf';
        }
        `}
    />
)

export default Fonts
