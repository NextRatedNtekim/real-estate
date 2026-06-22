import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home       from './pages/Home'
import Properties from './pages/Properties'
import Services   from './pages/Services'
import About      from './pages/About'
import Contact    from './pages/Contact'
import NotFound   from './pages/NotFound'

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"           element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/services"   element={<Services />} />
          <Route path="/about"      element={<About />} />
          <Route path="/contact"    element={<Contact />} />
          <Route path="*"           element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
