<template>
  <div>
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80&auto=format&fit=crop" alt="Gallery" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb-nav"><router-link to="/">Home</router-link><span>/</span><span>Gallery</span></div>
        <h1>Our <span class="tg">Gallery</span></h1>
        <p>Memories, moments and milestones from the Sundarbans community</p>
      </div>
    </section>

    <section class="section rs">
      <div class="container">
        <div class="filter-tabs" style="margin-bottom:2.5rem;justify-content:center;display:flex;flex-wrap:wrap">
          <div class="ftab" v-for="tab in tabs" :key="tab" :class="{active: activeTab===tab}" @click="activeTab=tab">{{ tab }}</div>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item" v-for="img in filteredImages" :key="img.src" @click="openLightbox(img)">
            <img :src="img.src" :alt="img.caption" loading="lazy" />
            <div class="gallery-item-overlay">
              <div class="gallery-item-caption">{{ img.caption }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div v-if="lightboxImg" style="position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.92);display:flex;align-items:center;justify-content:center;padding:2rem" @click.self="lightboxImg=null">
      <div style="max-width:900px;width:100%;position:relative">
        <img :src="lightboxImg.src" :alt="lightboxImg.caption" style="width:100%;border-radius:12px;display:block" />
        <div style="text-align:center;color:rgba(255,255,255,0.8);margin-top:1rem;font-size:0.9rem">{{ lightboxImg.caption }}</div>
        <button @click="lightboxImg=null" style="position:absolute;top:-1rem;right:-1rem;background:var(--accent);color:#000;border:none;border-radius:50%;width:36px;height:36px;cursor:pointer;font-size:1.1rem;font-weight:700">✕</button>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AppFooter from '../components/AppFooter.vue'
import { useScrollReveal } from '../composables/useAnimations.js'
useScrollReveal()

const tabs = ['All', 'Events', 'Meetups', 'Academic', 'Celebrations']
const activeTab = ref('All')
const lightboxImg = ref(null)

const images = [
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop', caption: 'Annual Tech Conference 2025', cat: 'Events' },
  { src: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80&auto=format&fit=crop', caption: 'Delhi Meetup — January 2026', cat: 'Meetups' },
  { src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80&auto=format&fit=crop', caption: 'Study Group Session', cat: 'Academic' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop', caption: 'Collaborative Learning', cat: 'Academic' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop', caption: 'SundarHack 2025 — Winners', cat: 'Events' },
  { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop', caption: 'Team Meeting', cat: 'Events' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop', caption: 'Mumbai Meetup — February 2026', cat: 'Meetups' },
  { src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80&auto=format&fit=crop', caption: 'Inter-House Quiz Finals', cat: 'Events' },
  { src: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80&auto=format&fit=crop', caption: 'Guest Lecture — AI & Future Tech', cat: 'Academic' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80&auto=format&fit=crop', caption: 'Orientation Day 2025', cat: 'Celebrations' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop', caption: 'Sundarbans Milestone — 5000 Members', cat: 'Celebrations' },
  { src: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?w=800&q=80&auto=format&fit=crop', caption: 'Cultural Night 2025', cat: 'Celebrations' },
]

const filteredImages = computed(() => activeTab.value === 'All' ? images : images.filter(i => i.cat === activeTab.value))
function openLightbox(img) { lightboxImg.value = img }
</script>
