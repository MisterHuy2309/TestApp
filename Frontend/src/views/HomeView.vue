<template>
  <div>
    <!-- Giao diện trang chủ TFT -->
    <div
      class="home-view flex flex-col min-h-screen text-white relative"
      style="background-image: url('https://i.pinimg.com/1200x/ba/dc/3b/badc3bcc3c04e7f48c04c8a4537dde9c.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div class="relative z-10 flex flex-col h-full">
        <!-- Header -->
        <header class="w-full py-10 text-center">
          <h1 class="title-text animate-pulse">Hỗ Trợ Chiến Thuật TFT</h1>
          <p class="subtitle-text">Khám phá các đội hình mạnh nhất, cập nhật liên tục!</p>
          <!-- <button v-if="!isAdmin" class="login-btn" @click="login">Đăng nhập (Admin)</button>
          <button v-else class="logout-btn" @click="logout">Đăng xuất</button> -->
        </header>
        <!-- Danh sách đội hình -->
        <main class="flex-grow flex flex-col items-center justify-start px-4">
          <div class="team-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-6">
            <div v-for="team in teams" :key="team.id" class="team-card">
              <img :src="team.image" :alt="team.name" class="team-img" />
              <div class="team-info">
                <div class="flex items-center justify-between">
                  <h2 class="team-name">{{ team.name }}</h2>
                  <span class="team-tier" :class="'tier-' + team.tier">{{ team.tier }}</span>
                </div>
                <p class="team-desc">{{ team.desc }}</p>
                <div v-if="isAdmin" class="admin-actions mt-2 flex gap-2">
                  <button class="edit-btn" @click="editTeam(team)">Sửa</button>
                  <button class="delete-btn" @click="deleteTeam(team)">Xóa</button>
                  <select v-model="team.tier" @change="changeTier(team)">
                    <option v-for="t in ['S','A','B','C','D']" :key="t" :value="t">{{ t }}</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- Nút thêm đội hình -->
            <div v-if="isAdmin" class="team-card add-card flex items-center justify-center">
              <button class="add-btn" @click="addTeam">+ Thêm đội hình</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Giả lập trạng thái admin
const isAdmin = ref(false)

// Danh sách đội hình mẫu
const teams = ref([
  {
    id: 1,
    name: 'Đấu Sĩ Pháp Sư',
    image: 'https://cdn.tftactics.gg/comp/sets/11/comp-11-1.png',
    desc: 'Đội hình mạnh đầu game, dễ chơi, dễ trúng tướng.',
    tier: 'S'
  },
  {
    id: 2,
    name: 'Song Đấu Thần Tài',
    image: 'https://cdn.tftactics.gg/comp/sets/11/comp-11-2.png',
    desc: 'Đội hình snowball cực mạnh nếu thắng chuỗi.',
    tier: 'A'
  },
  {
    id: 3,
    name: 'Hộ Vệ Xạ Thủ',
    image: 'https://cdn.tftactics.gg/comp/sets/11/comp-11-3.png',
    desc: 'Phù hợp cho người mới, dễ xoay bài.',
    tier: 'B'
  }
])

function login() {
  // Thực tế sẽ gọi API, ở đây chỉ giả lập
  isAdmin.value = true
}
function logout() {
  isAdmin.value = false
}
function addTeam() {
  teams.value.push({
    id: Date.now(),
    name: 'Đội hình mới',
    image: 'https://cdn.tftactics.gg/comp/sets/11/comp-11-4.png',
    desc: 'Mô tả đội hình mới.',
    tier: 'D'
  })
}
function editTeam(team) {
  alert('Chức năng sửa đội hình (demo)')
}
function deleteTeam(team) {
  teams.value = teams.value.filter(t => t.id !== team.id)
}
function changeTier(team) {
  // Có thể gọi API cập nhật ở đây
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');

/* ==== Global Home Styles ==== */
.home-view {
  font-family: 'Orbitron', sans-serif;
  min-height: 100vh; /* Full màn hình */
  padding-top: 3.5rem; /* chiều cao menu */
}

/* Thanh menu cố định */
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background: rgba(0,0,0,0.7);
  padding: 0.75rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.fixed-nav ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.fixed-nav a {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}
.fixed-nav a:hover {
  color: #06b6d4;
}

/* ==== Header ==== */
.title-text {
  font-family: 'Montserrat', 'Inter', Arial, sans-serif;
  font-size: 2rem;         
  font-weight: 900;
  letter-spacing: 0.15em;
  color: #E60012; /* Đỏ T1 */
  text-shadow:
    0 0 4px #E60012,
    0 0 8px rgba(230, 0, 18, 0.6),
    0 0 12px rgba(230, 0, 18, 0.4);
}


@media (min-width: 768px) {
  .title-text {
    font-size: 2.75rem;    /* desktop lớn hơn */
  }
}

.subtitle-text {
  margin-top: 0.5rem;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  color: #e5e7eb;
  text-shadow:
    0 0 6px rgba(255, 255, 255, 0.3),
    0 0 10px rgba(0, 255, 255, 0.3);
}
@media (min-width: 768px) {
  .subtitle-text {
    font-size: 1.25rem;
  }
}

/* ==== Main Box ==== */
.main-box {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 70%;
  left: 52%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(12px);
  padding: 2.5rem;
  border-radius: 1rem;
  max-width: 28rem;
  border: 1px solid rgba(0, 255, 255, 0.4);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
  text-align: center;
}

/* ==== Button ==== */
.go-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 0.75rem;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: white;
  background: linear-gradient(to right, #06b6d4, #9333ea);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  transition: all 0.3s ease;
}
.go-button:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
}
.login-btn, .logout-btn {
  margin-top: 1.5rem;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #06b6d4, #9333ea);
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}
.login-btn:hover, .logout-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px #06b6d4;
}
.team-list {
  width: 100%;
}
.team-card {
  background: rgba(0,0,0,0.7);
  border-radius: 1rem;
  box-shadow: 0 0 18px rgba(0,0,0,0.2);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 240px;
  min-height: 340px;
  position: relative;
}
.team-img {
  width: 100%;
  max-width: 220px;
  border-radius: 0.7rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px #06b6d4;
}
.team-info {
  width: 100%;
}
.team-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
}
.team-tier {
  font-size: 1.1rem;
  font-weight: 900;
  padding: 0.2rem 0.8rem;
  border-radius: 0.5rem;
  margin-left: 0.5rem;
  background: #222;
  color: #fff;
  border: 2px solid #06b6d4;
}
.tier-S { background: #E60012; color: #fff; border-color: #E60012; }
.tier-A { background: #9333ea; color: #fff; border-color: #9333ea; }
.tier-B { background: #06b6d4; color: #fff; border-color: #06b6d4; }
.tier-C { background: #f59e42; color: #fff; border-color: #f59e42; }
.tier-D { background: #64748b; color: #fff; border-color: #64748b; }
.team-desc {
  margin-top: 0.5rem;
  font-size: 0.98rem;
  color: #e5e7eb;
}
.admin-actions button, .add-btn {
  padding: 0.4rem 1.2rem;
  border-radius: 0.4rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  background: #06b6d4;
  color: #fff;
  transition: background 0.2s;
}
.admin-actions button:hover, .add-btn:hover {
  background: #9333ea;
}
.add-card {
  min-height: 340px;
  background: rgba(0,0,0,0.4);
  border: 2px dashed #06b6d4;
}
select {
  margin-left: 0.5rem;
  border-radius: 0.3rem;
  padding: 0.2rem 0.6rem;
}
</style>
