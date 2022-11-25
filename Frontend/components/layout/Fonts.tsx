import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
      styles={`
        @font-face {
          font-family: 'AnaphoraTrial';
          src: url('/AnaphoraTrial.ttf');
        }
        `}
    />
  )
  
  export default Fonts