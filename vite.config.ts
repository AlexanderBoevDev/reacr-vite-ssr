import react from '@vitejs/plugin-react'
import { UserConfig } from 'vite'
import vike from 'vike/plugin'

const config: UserConfig = {
  plugins: [
    react(),
    vike(),
  ],
  envPrefix: 'APP_',
}

export default config
