<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&q=80&auto=format&fit=crop" alt="Meetups" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb-nav"><router-link to="/">Home</router-link><span>/</span><span>Meetups</span></div>
        <h1>City <span class="tg">Meetups</span></h1>
        <p>Connect with Sundarbans members in your city — across 40+ cities in India</p>
      </div>
    </section>

    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Find Your Chapter</div>
          <h2 class="section-title-xl">Meetups Across <span class="tg">India</span></h2>
          <p class="sec-sub">We have active chapters in cities nationwide. Find your nearest meetup and connect with fellow students.</p>
        </div>
        <div class="city-grid">
          <div class="city-card" v-for="city in cities" :key="city.name">
            <img class="city-img" :src="city.img" :alt="city.name" />
            <div class="city-ov">
              <div class="cn">{{ city.name }}</div>
              <div class="cm">{{ city.members }}+ members</div>
              <a href="#" class="cbtn">View Details →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Upcoming Meetups -->
    <section class="section rs" style="background:var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Upcoming</div>
          <h2 class="section-title-xl">Upcoming <span class="tg">Meetups</span></h2>
        </div>
        <div class="grid-3">
          <div class="card-base rc" v-for="(m, i) in upcoming" :key="m.city" :style="`--card-delay:${i*0.1}s`">
            <div style="height:140px;border-radius:10px;overflow:hidden;margin-bottom:1rem">
              <img :src="m.img" :alt="m.city" style="width:100%;height:100%;object-fit:cover" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem">
              <div class="section-tag" style="margin:0">{{ m.city }}</div>
              <span style="font-size:0.72rem;color:var(--accent)">{{ m.date }}</span>
            </div>
            <h3 style="font-family:Cinzel,serif;font-weight:700;font-size:1rem;margin-bottom:0.4rem">{{ m.title }}</h3>
            <p class="desc" style="font-size:0.82rem;margin-bottom:0.75rem">{{ m.desc }}</p>
            <div style="display:flex;gap:0.75rem;font-size:0.78rem;color:var(--text2);margin-bottom:1rem">
              <span>📍 {{ m.venue }}</span><span>👥 {{ m.rsvp }} going</span>
            </div>
            <a href="#" class="submit-btn" style="font-size:0.83rem;padding:0.5rem 1.1rem">RSVP Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Host CTA -->
    <section class="cta-section rs" style="padding:5rem 0;background:linear-gradient(135deg,rgba(212,160,23,0.06),rgba(8,7,5,0.95))">
      <div class="container">
        <div class="cta-wrap">
          <div class="section-tag light">Start a Chapter</div>
          <h2 class="cta-heading">Host a Meetup in <span class="cta-acc">Your City</span></h2>
          <p class="cta-sub">Don't see your city listed? Be the first to start a Sundarbans chapter in your area. We'll support you every step of the way.</p>
          <div class="cta-acts">
            <router-link to="/contact" class="cta-btn-p">Start a Chapter →</router-link>
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

const cities = [
  { name: 'Delhi', members: 820, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80&auto=format&fit=crop' },
  { name: 'Mumbai', members: 650, img: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=80&auto=format&fit=crop' },
  { name: 'Bangalore', members: 710, img: 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=600&q=80&auto=format&fit=crop' },
  { name: 'Chennai', members: 480, img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80&auto=format&fit=crop' },
]

const upcoming = [
  { city: 'Delhi', title: 'Delhi Meetup — Spring 2026', date: 'Apr 10', venue: 'CP, New Delhi', rsvp: 84, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&q=80&auto=format&fit=crop', desc: 'Network with Sundarbans members in Delhi — food, fun and great conversations.' },
  { city: 'Bangalore', title: 'Bangalore Tech Meetup', date: 'Apr 18', venue: 'Koramangala', rsvp: 62, img: 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=500&q=80&auto=format&fit=crop', desc: 'Tech-focused meetup with talks, demos and networking for CS/DS students.' },
  { city: 'Mumbai', title: 'Mumbai Social Mixer', date: 'May 2', venue: 'Bandra, Mumbai', rsvp: 45, img: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=500&q=80&auto=format&fit=crop', desc: 'Casual get-together for Mumbai Sundarbans members — games, food, good vibes.' },
]
</script>
