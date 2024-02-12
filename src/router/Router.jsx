import { Routes, Route, Navigate } from 'react-router-dom'
import { GET_All_PAGES, generatePage } from '@/api/queries'
import { useQuery } from '@apollo/client'
import NotFound from '@/pages/NotFound'

const AppRouter = () => {
  const { loading, error, data } = useQuery(GET_All_PAGES)

  if (loading) return
  if (error) return <p>Error</p>

  const renderRoutes = () => {
    const routes = []
    data.pages.data.forEach((page) => {
      generatePage(routes, page)
    })
    return routes
  }

  return (
    <Routes>
      {renderRoutes()}
      <Route path='/404' element={<NotFound />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  )
}

export default AppRouter
