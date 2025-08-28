<template>
  <div id="app">
    <nav class="taskmenu-nav">
      <div class="taskmenu-container">
        <div class="taskmenu-logo">
          <router-link to="/" class="taskmenu-title">TFT Team Builder</router-link>
        </div>
        <ul class="taskmenu-links">
          <li><router-link to="/" exact-active-class="active-link">Home</router-link></li>
          <li><router-link to="/builder" exact-active-class="active-link">Builder</router-link></li>
        </ul>
        <div class="admin-login">
          <template v-if="!isAdmin">
            <button class="login-btn" @click="showLogin = true">Đăng nhập</button>
          </template>
          <template v-else>
            <span class="admin-label">Xin chào, Admin!</span>
            <button class="logout-btn" @click="logout">Đăng xuất</button>
          </template>
        </div>
      </div>
    </nav>

    <!-- Card đăng nhập -->
    <div v-if="showLogin" class="login-modal">
      <div class="login-card">
        <h3>Đăng nhập Admin</h3>
        <form @submit.prevent="handleLogin" class="login-form-vertical">
          <input v-model="username" type="text" placeholder="Tên đăng nhập" required />
          <input v-model="password" type="password" placeholder="Mật khẩu" required />
          <button type="submit" class="login-btn">Đăng nhập</button>
          <button type="button" class="close-btn" @click="showLogin = false">Hủy</button>
        </form>
        <span v-if="loginError" class="login-error">{{ loginError }}</span>
      </div>
    </div>

    <main class="pt-16">
      <router-view :isAdmin="isAdmin" />
    </main>
    <footer class="bg-gray-800 text-white p-4 text-center mt-8">
      &copy; 2025 TFT Builder
    </footer>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const isAdmin = ref(false)
const username = ref('')
const password = ref('')
const loginError = ref('')
const showLogin = ref(false)

function handleLogin() {
  if (username.value === 'admin' && password.value === 'admin123') {
    isAdmin.value = true
    loginError.value = ''
    username.value = ''
    password.value = ''
    showLogin.value = false
  } else {
    loginError.value = 'Sai tài khoản hoặc mật khẩu!'
  }
}
function logout() {
  isAdmin.value = false
  loginError.value = ''
}

// Nếu muốn truyền trạng thái admin xuống các view con
provide('isAdmin', isAdmin)
</script>

<style scoped>
#app {
  font-family: 'Orbitron', Arial, sans-serif;
}
.taskmenu-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: rgba(20, 20, 30, 0.98);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  border-bottom: 3px solid #E60012;
}
.taskmenu-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2rem;
}
.taskmenu-logo .taskmenu-title {
  font-size: 1.3rem;
  font-weight: 900;
  color: #E60012;
  text-shadow: 0 0 6px #E60012, 0 0 10px rgba(230,0,18,0.3);
  text-decoration: none;
  letter-spacing: 0.08em;
}
.taskmenu-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.taskmenu-links a {
  color: #e5e7eb;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.05rem;
  transition: color 0.2s;
}
.taskmenu-links a:hover,
.taskmenu-links .active-link {
  color: #06b6d4;
  text-shadow: 0 0 8px #06b6d4;
}
.admin-login {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.login-btn, .logout-btn {
  padding: 0.3rem 1rem;
  border-radius: 0.4rem;
  font-weight: 700;
  background: linear-gradient(to right, #06b6d4, #9333ea);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.login-btn:hover, .logout-btn:hover, .close-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px #06b6d4;
}
.admin-label {
  color: #06b6d4;
  font-weight: 600;
  margin-right: 0.5rem;
}
.login-error {
  color: #E60012;
  font-size: 0.95rem;
  margin-left: 0.5rem;
}

/* Modal/Card đăng nhập */
.login-modal {
  position: fixed;
  z-index: 200;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-card {
  background: #18181b;
  border-radius: 1rem;
  padding: 2rem 2.5rem 1.5rem 2.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-card h3 {
  color: #06b6d4;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  letter-spacing: 0.05em;
}
.login-form-vertical {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
}
.login-form-vertical input {
  padding: 0.5rem 1rem;
  border-radius: 0.4rem;
  border: 1px solid #333;
  background: #23232b;
  color: #fff;
  font-size: 1rem;
}
.close-btn {
  margin-top: 0.5rem;
  background: #64748b;
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 0.3rem 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
main {
  min-height: 80vh;
}
</style>