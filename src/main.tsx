import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MenuProvider } from './contexts/menu-context.tsx'
import { InscriptionsPage } from './pages/InscriptionsPage.tsx'
import App from './pages/App.tsx'
import { CourseDetailsPage } from './pages/CourseDetailsPage.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchProvider } from './contexts/search-context.tsx'
import { InscriptionProvider } from './contexts/inscription-context.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/inscricoes',
    element: <InscriptionsPage />,
  },
  {
    path: '/detalhes/:id',
    element: <CourseDetailsPage />,
  },
])

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MenuProvider>
        <SearchProvider>
          <InscriptionProvider>
            <RouterProvider router={router} />
          </InscriptionProvider>
        </SearchProvider>
      </MenuProvider>
    </QueryClientProvider>
  </StrictMode>
)
