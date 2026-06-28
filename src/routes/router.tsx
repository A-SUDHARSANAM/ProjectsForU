/* eslint-disable react/only-export-components */
import { lazy, Suspense, type ReactNode } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { LoadingScreen } from '../components/LoadingScreen'
import { RouteErrorBoundary } from '../components/RouteErrorBoundary'
import { GlobalLayout } from '../layouts/GlobalLayout'

const Admin = lazy(() => import('../pages/Admin').then((module) => ({ default: module.Admin })))
const About = lazy(() => import('../pages/About').then((module) => ({ default: module.About })))
const Blog = lazy(() => import('../pages/Blog').then((module) => ({ default: module.Blog })))
const Contact = lazy(() => import('../pages/Contact').then((module) => ({ default: module.Contact })))
const Home = lazy(() => import('../pages/Home').then((module) => ({ default: module.Home })))
const NotFound = lazy(() => import('../pages/NotFound').then((module) => ({ default: module.NotFound })))
const ProjectSubmission = lazy(() =>
  import('../pages/ProjectSubmission').then((module) => ({ default: module.ProjectSubmission })),
)
const ServiceDetailPage = lazy(() =>
  import('../pages/ServiceDetailPage').then((module) => ({ default: module.ServiceDetailPage })),
)
const Services = lazy(() => import('../pages/Services').then((module) => ({ default: module.Services })))
const Work = lazy(() => import('../pages/Work').then((module) => ({ default: module.Work })))

function lazyPage(element: ReactNode) {
  return <Suspense fallback={<LoadingScreen />}>{element}</Suspense>
}

export const router = createBrowserRouter([
  { path: '/admin', element: lazyPage(<Admin />), errorElement: <RouteErrorBoundary /> },
  {
    element: <GlobalLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { path: '/', element: lazyPage(<Home />) },
      { path: '/services', element: lazyPage(<Services />) },
      { path: '/services/:slug', element: lazyPage(<ServiceDetailPage />) },
      { path: '/portfolio', element: lazyPage(<Work />) },
      { path: '/blog', element: lazyPage(<Blog />) },
      { path: '/work', element: lazyPage(<Work />) },
      { path: '/about', element: lazyPage(<About />) },
      { path: '/contact', element: lazyPage(<Contact />) },
      { path: '/project-submission', element: lazyPage(<ProjectSubmission />) },
      { path: '*', element: lazyPage(<NotFound />) },
    ],
  },
])
