import { createBrowserRouter } from 'react-router-dom'

import { GlobalLayout } from '../layouts/GlobalLayout'
import { Admin } from '../pages/Admin'
import { About } from '../pages/About'
import { Blog } from '../pages/Blog'
import { Contact } from '../pages/Contact'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Services } from '../pages/Services'
import { Work } from '../pages/Work'

export const router = createBrowserRouter([
  { path: '/admin', element: <Admin /> },
  {
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <Services /> },
      { path: '/portfolio', element: <Work /> },
      { path: '/blog', element: <Blog /> },
      { path: '/work', element: <Work /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
