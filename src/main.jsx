import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import './index.css'
import { AuthProvider } from './AuthContext.jsx'
import { MainDataProvider } from './MainDataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense>
      <BrowserRouter>
        <MainDataProvider>
          <AuthProvider>
            <Router />
          </AuthProvider>
        </MainDataProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
)
