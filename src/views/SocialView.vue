<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1920&q=80&auto=format&fit=crop" alt="Social" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb-nav"><router-link to="/">Home</router-link><span>/</span><span>Social Media</span></div>
        <h1>Follow <span class="tg">Us</span></h1>
        <p>Stay connected with Sundarbans House on all your favourite platforms</p>
      </div>
    </section>

    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Our Platforms</div>
          <h2 class="section-title-xl">Find Us <span class="tg">Everywhere</span></h2>
          <p class="sec-sub">Follow us to never miss an update, event or achievement from the community</p>
        </div>
        <div class="grid-3">
          <div class="card-base rc" v-for="(platform, i) in platforms" :key="platform.name" :style="`--card-delay:${i*0.08}s;text-align:center`">
            <div style="font-size:3rem;margin-bottom:1rem">{{ platform.icon }}</div>
            <h3 style="font-family:Cinzel,serif;font-size:1.1rem;font-weight:700;margin-bottom:0.5rem">{{ platform.name }}</h3>
            <p class="desc" style="font-size:0.83rem;margin-bottom:0.75rem">{{ platform.desc }}</p>
            <div style="font-family:Cinzel,serif;font-size:1.8rem;font-weight:700;color:var(--accent);margin-bottom:0.25rem">{{ platform.followers }}</div>
            <div style="font-size:0.72rem;color:var(--text2);margin-bottom:1.25rem">followers</div>
            <a :href="platform.url" target="_blank" class="submit-btn" style="font-size:0.85rem;padding:0.55rem 1.25rem">Follow Now</a>
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

const platforms = [
  { icon: '📸', name: 'Instagram', desc: 'Event highlights, community stories, student features and behind-the-scenes content', followers: '4.2K', url: '#' },
  { icon: '💼', name: 'LinkedIn', desc: 'Professional updates, achievements, alumni stories and career opportunities', followers: '2.8K', url: '#' },
  { icon: '🐦', name: 'Twitter / X', desc: 'Real-time updates, announcements and quick engagement with the community', followers: '1.5K', url: '#' },
  { icon: '▶️', name: 'YouTube', desc: 'Recorded lectures, event replays, orientation videos and educational content', followers: '3.1K', url: '#' },
  { icon: '💬', name: 'Discord', desc: 'Live voice channels, topic-based text channels and a thriving community', followers: '1.9K', url: '#' },
  { icon: '📱', name: 'Telegram', desc: 'Fast updates, file sharing and dedicated topic-based channels for students', followers: '2.4K', url: '#' },
]
</script>
