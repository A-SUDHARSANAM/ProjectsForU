import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './contexts/ThemeProvider'
import { router } from './routes/router'

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
