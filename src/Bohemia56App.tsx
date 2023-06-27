import { UiProvider, PermissionProvider } from './context';
import { AppRouter } from './router/AppRouter';

export const Bohemia56App = () => {
    
  return (
        <PermissionProvider>
          <UiProvider>            
              <AppRouter/>
          </UiProvider>
        </PermissionProvider>
  )
}
