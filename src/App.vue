<template>
  <div :data-theme="theme">
    <!-- PRELOADER -->
    <div id="preloader" v-if="loading" :style="{ opacity: preloaderOpacity }">
      <div class="preloader-inner">
        <div class="preloader-orbit-wrap">
          <div class="preloader-orbit-ring">
            <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  id="orbitPath"
                  d="M 110,110 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0" />
              </defs>
              <text>
                <textPath href="#orbitPath" startOffset="0%">
                  ✦ SUNDARBANS HOUSE · IIT MADRAS BS · EXCELLENCE ·
                </textPath>
              </text>
            </svg>
          </div>
          <div class="preloader-logo-center">
            <img
              src="./assets/LOGO.JPEG"
              alt="Sundarbans"
              class="preloader-logo-img"
              @error="showFallback = true"
              v-if="!showFallback" />
            <span class="preloader-logo-letter" v-else>S</span>
          </div>
        </div>
        <div class="preloader-bar">
          <div class="preloader-fill" :style="{ width: fillWidth }"></div>
        </div>
        <div class="preloader-text">Loading Sundarbans...</div>
      </div>
    </div>

    <!-- CUSTOM CURSOR -->
    <div id="cursor-dot" :style="dotStyleC"></div>
    <div
      id="cursor-ring"
      :class="{ expanded: cursorExpanded }"
      :style="ringStyleC"></div>

    <!-- PARTICLES -->
    <div class="particles-bg" id="particlesBg">
      <div
        v-for="p in particles"
        :key="p.id"
        class="particle"
        :style="p.style"></div>
    </div>

    <!-- SEARCH OVERLAY -->
    <div
      class="search-overlay"
      :class="{ open: searchOpen }"
      @click.self="searchOpen = false">
      <div class="search-box">
        <div class="search-input-row">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            @input="filterSearch"
            placeholder="Search pages, resources, events..."
            ref="searchInputEl" />
          <button @click="searchOpen = false">✕</button>
        </div>
        <div class="search-hint">Press Ctrl+K to open • Esc to close</div>
        <div id="searchResults">
          <template v-if="!searchQuery.trim()">
            <div class="search-empty">Start typing to search...</div>
          </template>
          <template v-else-if="filteredPages.length === 0">
            <div class="search-empty">
              No results found for "{{ searchQuery }}"
            </div>
          </template>
          <template v-else>
            <router-link
              v-for="p in filteredPages"
              :key="p.url"
              :to="p.url"
              class="search-result-item"
              @click="searchOpen = false">
              <div class="sri-icon">{{ p.icon }}</div>
              <div>
                <div class="sri-title">{{ p.title }}</div>
                <div class="sri-desc">{{ p.desc }}</div>
              </div>
            </router-link>
          </template>
        </div>
      </div>
    </div>

    <!-- BACK TO TOP -->
    <button
      id="backToTop"
      :class="{ visible: showBackToTop }"
      @click="scrollTop"
      aria-label="Back to top">
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>

    <!-- NAVBAR -->
    <header v-if="!isLoungeRoute" class="navbar" :class="{ scrolled: navScrolled }" id="navbar">
      <div class="nav-container">
        <div class="nav-left">
          <div class="nav-logo-wrapper">
            <img src="./assets/LOGO.JPEG" alt="Logo" class="nav-logo" />
            <div class="logo-glow"></div>
          </div>
          <div class="brand-text">
            <span class="brand-main">SUNDARBANS</span>
            <span class="brand-sub">IIT Madras BS</span>
          </div>
        </div>
        <button
          class="menu-toggle"
          :class="{ active: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav-links" :class="{ open: menuOpen }">
          <router-link to="/" class="nav-link" @click="menuOpen = false"
            ><span>Home</span></router-link
          >
          <router-link to="/study" class="nav-link" @click="menuOpen = false"
            ><span class="study-link">Study Corner</span></router-link
          >
          <router-link to="/events" class="nav-link" @click="menuOpen = false"
            ><span>Events</span></router-link
          >
          <router-link to="/gallery" class="nav-link" @click="menuOpen = false"
            ><span>Gallery</span></router-link
          >
          <router-link to="/meetups" class="nav-link" @click="menuOpen = false"
            ><span>Meetups</span></router-link
          >
          <router-link to="/about" class="nav-link" @click="menuOpen = false"
            ><span>About</span></router-link
          >
          <router-link
            to="/community"
            class="nav-link"
            @click="menuOpen = false"
            ><span>Community</span></router-link
          >
          <router-link to="/teams" class="nav-link" @click="menuOpen = false"
            ><span>Teams</span></router-link
          >
          <router-link to="/contact" class="nav-link" @click="menuOpen = false"
            ><span>Contact</span></router-link
          >
          
          <router-link
            to="/members"
            class="nav-cta-btn"
            @click="menuOpen = false">
            <span>Members Lounge</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </router-link>
          <a
            href="https://app.onlinedegree.iitm.ac.in/auth/login?next=https://app.onlinedegree.iitm.ac.in/student_dashboard/latest_updates"
            class="nav-cta-btn"
            @click="menuOpen = false">
            <span>Course</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </nav>
        <div class="nav-tools">
          <button
            class="nav-tool-btn"
            @click="openSearch"
            title="Search (Ctrl+K)">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <div style="position: relative">
            <button class="nav-tool-btn" @click.stop="notifOpen = !notifOpen">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
              <span class="notif-badge" v-if="unreadCount > 0">{{
                unreadCount
              }}</span>
            </button>
            <div class="notif-panel" :class="{ open: notifOpen }">
              <div class="notif-header">
                <h4>Notifications</h4>
                <button class="notif-markall" @click="markAllRead">
                  Mark all read
                </button>
              </div>
              <div class="notif-list">
                <div
                  v-for="(n, i) in notifications"
                  :key="i"
                  class="notif-item"
                  :class="{ unread: n.unread }"
                  @click="markRead(i)">
                  <div class="notif-icon">{{ n.icon }}</div>
                  <div class="notif-body">
                    <div class="notif-title">{{ n.title }}</div>
                    <div class="notif-desc">{{ n.desc }}</div>
                    <div class="notif-time">{{ n.time }}</div>
                  </div>
                  <div class="notif-dot" v-if="n.unread"></div>
                </div>
              </div>
              <div class="notif-footer"><a href="#">View all</a></div>
            </div>
          </div>
          <button
            class="nav-tool-btn"
            @click="toggleTheme"
            title="Toggle theme">
            <span>{{ theme === "dark" ? "☀️" : "🌙" }}</span>
          </button>
        </div>
      </div>
    </header>

    <!-- ROUTER VIEW with transition -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>

    <!-- GLOBAL FOOTER -->
    <AppFooter v-if="!isLoungeRoute" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";
import { useRoute } from "vue-router";
import AppFooter from "./components/AppFooter.vue";

const route = useRoute();

const isLoungeRoute = computed(() => route.path === '/lounge' || route.path === '/dashboard');

// --- PRELOADER ---
const loading = ref(true);
const preloaderOpacity = ref("1");
const fillWidth = ref("0%");
const showFallback = ref(false);

onMounted(() => {
  fillWidth.value = "100%";
  setTimeout(() => {
    preloaderOpacity.value = "0";
    setTimeout(() => {
      loading.value = false;
    }, 700);
  }, 1200);
});

// --- THEME ---
const theme = ref(localStorage.getItem("sb-theme") || "dark");
function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";
  localStorage.setItem("sb-theme", theme.value);
}

// --- CURSOR ---
const dotX = ref(0),
  dotY = ref(0),
  ringX = ref(0),
  ringY = ref(0);
const cursorExpanded = ref(false);
let mX = 0,
  mY = 0,
  animFrame = null;

function dotStyle() {
  return { left: dotX.value + "px", top: dotY.value + "px" };
}
function ringStyle() {
  return { left: ringX.value + "px", top: ringY.value + "px" };
}
const dotStyleC = computed(() => ({
  left: dotX.value + "px",
  top: dotY.value + "px",
}));
const ringStyleC = computed(() => ({
  left: ringX.value + "px",
  top: ringY.value + "px",
}));

function onMouseMove(e) {
  mX = e.clientX;
  mY = e.clientY;
  dotX.value = mX;
  dotY.value = mY;
  const isClickable = e.target.closest("a, button, input, textarea, select, .sc-level-card, .sc-subj-badge, .sc-tab, .db-filter, .sc-author-header, .menu-toggle, [role='button']");
  cursorExpanded.value = !!isClickable;
}
function animRing() {
  ringX.value += (mX - ringX.value) * 0.12;
  ringY.value += (mY - ringY.value) * 0.12;
  animFrame = requestAnimationFrame(animRing);
}

// --- PARTICLES ---
const particles = ref([]);
onMounted(() => {
  for (let i = 0; i < 20; i++) {
    particles.value.push({
      id: i,
      style: `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${2 + Math.random() * 3}px;height:${2 + Math.random() * 3}px;animation-delay:${Math.random() * 8}s;animation-duration:${6 + Math.random() * 10}s;`,
    });
  }
});

// --- NAVBAR ---
const navScrolled = ref(false);
const menuOpen = ref(false);
function onScroll() {
  navScrolled.value = window.scrollY > 50;
  showBackToTop.value = window.scrollY > 400;
}
const showBackToTop = ref(false);
function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// --- SEARCH ---
const searchOpen = ref(false);
const searchQuery = ref("");
const searchInputEl = ref(null);
const pages = [
  { title: "Home", url: "/", desc: "Welcome to Sundarbans House", icon: "🏠" },
  {
    title: "Study Corner",
    url: "/study",
    desc: "Academic resources and materials",
    icon: "📚",
  },
  {
    title: "Events",
    url: "/events",
    desc: "Upcoming events, workshops and competitions",
    icon: "🎯",
  },
  {
    title: "Gallery",
    url: "/gallery",
    desc: "Photos and memories from our community",
    icon: "🖼️",
  },
  {
    title: "Meetups",
    url: "/meetups",
    desc: "City meetups across India",
    icon: "📍",
  },
  {
    title: "About",
    url: "/about",
    desc: "About Sundarbans House and our mission",
    icon: "ℹ️",
  },
  {
    title: "Community",
    url: "/community",
    desc: "Tech, Cultural and Academic communities",
    icon: "🤝",
  },
  {
    title: "Teams",
    url: "/teams",
    desc: "Meet our leadership and team members",
    icon: "👥",
  },
  {
    title: "Contact",
    url: "/contact",
    desc: "Get in touch with us",
    icon: "📧",
  },
  {
    title: "Social Media",
    url: "/social",
    desc: "Follow us on social platforms",
    icon: "📱",
  },
  {
    title: "Members Lounge",
    url: "/members",
    desc: "Login to members area",
    icon: "🔐",
  },
];
const filteredPages = computed(() => {
  if (!searchQuery.value.trim()) return [];
  return pages.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});
function filterSearch() {}
function openSearch() {
  searchOpen.value = true;
  nextTick(() => searchInputEl.value?.focus());
}

// --- NOTIFICATIONS ---
const notifications = ref([
  {
    icon: "🎓",
    title: "New Study Material",
    desc: "Maths Chapter 5 uploaded",
    time: "2h ago",
    unread: true,
  },
  {
    icon: "🏆",
    title: "Community Milestone",
    desc: "5000+ members reached!",
    time: "5h ago",
    unread: true,
  },
  {
    icon: "📅",
    title: "Event Reminder",
    desc: "Tech Talk starts in 2 hours",
    time: "1d ago",
    unread: true,
  },
  {
    icon: "🌟",
    title: "Achievement Unlocked",
    desc: "Sundarbans ranked #1 this week",
    time: "2d ago",
    unread: false,
  },
  {
    icon: "📢",
    title: "Announcement",
    desc: "Delhi Meetup registrations open",
    time: "3d ago",
    unread: false,
  },
]);
const notifOpen = ref(false);
const unreadCount = computed(
  () => notifications.value.filter((n) => n.unread).length,
);
function markRead(i) {
  notifications.value[i].unread = false;
}
function markAllRead() {
  notifications.value.forEach((n) => (n.unread = false));
}

// Keyboard shortcuts
function onKeyDown(e) {
  if (e.key === "Escape") {
    searchOpen.value = false;
    notifOpen.value = false;
  }
  if ((e.ctrlKey || e.metaKey) && e.key === "k") {
    e.preventDefault();
    openSearch();
  }
}
function onClickOutside(e) {
  if (
    notifOpen.value &&
    !e.target.closest(".notif-panel") &&
    !e.target.closest("[data-notif]")
  ) {
    notifOpen.value = false;
  }
}

// Close menu on route change
watch(
  () => route.path,
  () => {
    menuOpen.value = false;
  },
);

onMounted(() => {
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("click", onClickOutside);
  window.addEventListener("scroll", onScroll);
  animRing();
});

onUnmounted(() => {
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("keydown", onKeyDown);
  document.removeEventListener("click", onClickOutside);
  window.removeEventListener("scroll", onScroll);
  cancelAnimationFrame(animFrame);
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Router link active styles */
.nav-link.router-link-exact-active {
  color: var(--accent) !important;
}

.study-link {
  white-space: nowrap;
}
</style>
