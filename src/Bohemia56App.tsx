// import { RouterProvider } from 'react-router-dom';
import { UiProvider, AuthProvider } from './context';

// import { router } from './router'
import { Router } from './router/Router';

export const Bohemia56App = () => {
    
  return (
        <AuthProvider>
          <UiProvider>            
              <Router/>
          </UiProvider>
        </AuthProvider>
  )
}
