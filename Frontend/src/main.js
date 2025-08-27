// 1. Import Vue
import { createApp } from 'vue'

// 2. Import App component
import App from './App.vue'

// 3. Import router (đường dẫn chính xác từ src/main.js)
import router from './Router/index.js'

// 4. Import global CSS
import './styles/main.css'

// 5. Tạo Vue app
const app = createApp(App)

// 6. Dùng router (nếu có)
app.use(router)

// 7. Mount vào div#app trong index.html
app.mount('#app')
