import { createMainApp } from './main'

const { app, router } = createMainApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})