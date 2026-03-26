<template>
  <div>
    <!-- Hero -->
    <section class="page-hero">
      <div class="page-hero-bg">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80&auto=format&fit=crop"
          alt="Teams"
        />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb-nav">
          <router-link to="/">Home</router-link><span>/</span><span>Our Teams</span>
        </div>
        <h1>Our <span class="tg">Teams</span></h1>
        <p>Meet the passionate individuals who drive Sundarbans House forward</p>
      </div>
    </section>

    <!-- Leadership -->
    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Leadership</div>
          <h2 class="section-title-xl">House <span class="tg">Leadership</span></h2>
          <p class="sec-sub">The core team guiding Sundarbans House with vision and dedication</p>
        </div>

        <!-- Captain row: full-width spotlight cards -->
        <div class="lead-top-row">
          <div
            class="lead-card-spotlight rc"
            v-for="(m, i) in leadership.slice(0, 2)"
            :key="m.name"
            :style="`--card-delay:${i * 0.12}s`"
          >
            <div class="lead-img-wrap lead-img-lg">
              <img
                :src="m.img"
                :alt="m.name"
                @error="e => e.target.src = fallback"
              />
              <div class="lead-img-glow"></div>
            </div>
            <div class="lead-info">
              <div class="section-tag" style="margin-bottom:0.6rem">{{ m.role }}</div>
              <h3 class="lead-name">{{ m.name }}</h3>
              <p class="desc lead-bio">{{ m.bio }}</p>
              <div class="lead-badge">
                <span class="badge-dot"></span> Active Member
              </div>
            </div>
          </div>
        </div>

        <!-- Rest of leadership -->
        <div class="lead-grid">
          <div
            class="lead-card rc"
            v-for="(m, i) in leadership.slice(2)"
            :key="m.name"
            :style="`--card-delay:${(i + 2) * 0.1}s`"
          >
            <div class="lead-img-wrap lead-img-sm">
              <img
                :src="m.img"
                :alt="m.name"
                @error="e => e.target.src = fallback"
              />
            </div>
            <h3 class="lead-name" style="font-size:0.95rem">{{ m.name }}</h3>
            <div class="section-tag" style="margin:0.3rem auto 0.6rem;display:inline-flex">{{ m.role }}</div>
            <p class="desc" style="font-size:0.8rem;margin:0">{{ m.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Departments -->
    <section class="section rs" style="background:var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Departments</div>
          <h2 class="section-title-xl">Our <span class="tg">Teams</span></h2>
          <p class="sec-sub">Specialized teams working behind the scenes to make Sundarbans great</p>
        </div>

        <div class="dept-grid">
          <div
            class="dept-card rc"
            v-for="(d, i) in departments"
            :key="d.name"
            :style="`--card-delay:${i * 0.1}s`"
          >
            <div class="dept-icon-wrap">
              <span class="dept-icon">{{ d.icon }}</span>
            </div>
            <h3 class="dept-name">{{ d.name }}</h3>
            <p class="desc dept-desc">{{ d.desc }}</p>
            <div class="dept-footer">
              <div class="dept-avatars">
                <div v-for="(av, j) in d.avatars" :key="j" class="mav dept-av">{{ av }}</div>
              </div>
              <span class="dept-count">{{ d.count }} members</span>
            </div>
            <div class="dept-bar">
              <div class="dept-bar-fill" :style="`width:${Math.min(100, d.count * 5)}%`"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Strip -->
    <section class="stats-strip rs">
      <div class="container">
        <div class="stats-row">
          <div class="stat-item" v-for="s in stats" :key="s.label">
            <div class="stat-num tg">{{ s.num }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join -->
    <section class="cta-section rs" style="padding:5rem 0;background:linear-gradient(135deg,rgba(212,160,23,0.06),rgba(8,7,5,0.95))">
      <div class="container">
        <div class="cta-wrap">
          <div class="section-tag light">Join Us</div>
          <h2 class="cta-heading">Be Part of the <span class="cta-acc">Team</span></h2>
          <p class="cta-sub">
            Want to contribute to Sundarbans House? We're always looking for passionate
            students to join our teams and help shape the community.
          </p>
          <div class="cta-acts">
            <router-link to="/contact" class="cta-btn-p">Apply Now →</router-link>
            <router-link to="/about" class="cta-btn-o">Learn More</router-link>
          </div>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '../components/AppFooter.vue'
import { useScrollReveal } from '../composables/useAnimations.js'
useScrollReveal()

const fallback = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80&auto=format&fit=crop&crop=face'

const leadership = [
  {
    name: 'Samar',
    role: 'House Captain',
    bio: 'Leading Sundarbans with vision and passion for community building across IIT Madras BS.',
    img: '/teams/Samar.jpeg',
  },
  {
    name: 'Mannu',
    role: 'Vice Captain',
    bio: 'Driving initiatives, coordinating teams, and ensuring every member gets the best experience.',
    img: '/teams/mannu.jpg',
  },
  {
    name: 'Tejashvi',
    role: 'Academic Head',
    bio: 'Curating study resources and organizing academic sessions for students across all levels.',
    img: '/teams/tejashvi.jpg',
  },
  {
    name: 'Chandan',
    role: 'Events Head',
    bio: 'Orchestrating memorable events and competitions that bring the community together.',
    img: '/teams/chandan.webp',
  },
  {
    name: 'Riya',
    role: 'Community Manager',
    bio: 'Managing community platforms, engagement and ensuring every member feels at home.',
    img: '/teams/Riya.jpg',
  },
  {
    name: 'Aakash',
    role: 'Tech Lead',
    bio: 'Building the digital infrastructure that powers Sundarbans House presence.',
    img: '/teams/aakash.webp',
  },
]

const departments = [
  { icon: '📚', name: 'Academic Team',       desc: 'Curates study materials, organizes doubt sessions, and peer tutoring programs',            avatars: ['A','B','C'], count: 12 },
  { icon: '🎯', name: 'Events Team',          desc: 'Plans and executes workshops, competitions, hackathons, and cultural events',               avatars: ['D','E','F'], count: 8  },
  { icon: '📣', name: 'Marketing & Social',   desc: 'Manages social media, designs creatives, and spreads the Sundarbans brand',                avatars: ['G','H','I'], count: 10 },
  { icon: '🤝', name: 'Outreach Team',        desc: 'Connects with new members, organises onboarding, and manages city chapters',               avatars: ['J','K','L'], count: 15 },
  { icon: '💻', name: 'Tech Team',            desc: 'Builds and maintains all digital tools, websites, and automation systems',                  avatars: ['M','N','O'], count: 6  },
  { icon: '🎨', name: 'Design Team',          desc: 'Creates all visual assets, event banners, and the aesthetic identity of the house',         avatars: ['P','Q','R'], count: 7  },
]

const stats = [
  { num: '58+', label: 'Team Members' },
  { num: '6',   label: 'Departments' },
  { num: '12+', label: 'Events Organised' },
  { num: '500+', label: 'Students Reached' },
]
</script>

<style scoped>
/* ── Leadership Top Row ── */
.lead-top-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.lead-card-spotlight {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.75rem 2rem;
  background: var(--card-bg, rgba(255,255,255,0.04));
  border: 1px solid rgba(212,160,23,0.18);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  animation: fadeUp 0.6s ease both;
  animation-delay: var(--card-delay, 0s);
}

.lead-card-spotlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(212,160,23,0.06) 0%, transparent 60%);
  pointer-events: none;
}

.lead-img-wrap {
  flex-shrink: 0;
  border-radius: 50%;
  border: 3px solid var(--accent, #d4a017);
  overflow: hidden;
  position: relative;
}

.lead-img-lg {
  width: 100px;
  height: 100px;
}

.lead-img-lg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.lead-img-glow {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.25) 0%, transparent 70%);
  pointer-events: none;
}

.lead-info {
  flex: 1;
  min-width: 0;
}

.lead-name {
  font-family: Cinzel, serif;
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: var(--text);
}

.lead-bio {
  font-size: 0.84rem;
  margin-bottom: 0.75rem;
  line-height: 1.55;
}

.lead-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.72rem;
  color: #4caf8a;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #4caf8a;
  animation: pulse-dot 2s ease infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.35); }
}

/* ── Leadership Grid (rest of members) ── */
.lead-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.lead-card {
  text-align: center;
  padding: 1.75rem 1.25rem;
  background: var(--card-bg, rgba(255,255,255,0.04));
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 1rem;
  transition: border-color 0.3s, transform 0.3s;
  animation: fadeUp 0.6s ease both;
  animation-delay: var(--card-delay, 0s);
}

.lead-card:hover {
  border-color: rgba(212,160,23,0.35);
  transform: translateY(-4px);
}

.lead-img-sm {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
}

.lead-img-sm img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ── Departments Grid ── */
.dept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 1.75rem;
}

.dept-card {
  padding: 1.75rem 1.5rem;
  background: var(--card-bg, rgba(255,255,255,0.04));
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 1rem;
  transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
  animation: fadeUp 0.6s ease both;
  animation-delay: var(--card-delay, 0s);
  position: relative;
  overflow: hidden;
}

.dept-card:hover {
  border-color: rgba(212,160,23,0.4);
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(212,160,23,0.08);
}

.dept-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(212,160,23,0.1);
  border: 1px solid rgba(212,160,23,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.dept-icon {
  font-size: 1.6rem;
  line-height: 1;
}

.dept-name {
  font-family: Cinzel, serif;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text);
}

.dept-desc {
  font-size: 0.82rem;
  margin-bottom: 1.25rem;
  line-height: 1.55;
}

.dept-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.dept-avatars {
  display: flex;
  gap: 0.25rem;
}

.dept-av {
  width: 28px;
  height: 28px;
  font-size: 0.7rem;
}

.dept-count {
  font-size: 0.73rem;
  color: var(--text2);
  margin-left: auto;
  font-weight: 600;
}

.dept-bar {
  height: 3px;
  background: rgba(255,255,255,0.07);
  border-radius: 99px;
  overflow: hidden;
}

.dept-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent, #d4a017), rgba(212,160,23,0.4));
  border-radius: 99px;
  transition: width 1s ease;
}

/* ── Stats Strip ── */
.stats-strip {
  padding: 3rem 0;
  background: var(--bg, #08070a);
  border-top: 1px solid rgba(212,160,23,0.12);
  border-bottom: 1px solid rgba(212,160,23,0.12);
}

.stats-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem 4rem;
}

.stat-item {
  text-align: center;
}

.stat-num {
  font-family: Cinzel, serif;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.35rem;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text2);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  .lead-card-spotlight {
    flex-direction: column;
    text-align: center;
  }
  .lead-top-row { grid-template-columns: 1fr; }
  .stats-row { gap: 2rem 2.5rem; }
}
</style>
