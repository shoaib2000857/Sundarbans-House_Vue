<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="Gallery"
      title="Our"
      accent-title="Gallery"
      subtitle="Memories, moments and milestones from the Sundarbans community"
    />

    <section class="section rs">
      <div class="container">
        <div
          class="filter-tabs"
          style="
            margin-bottom: 2.5rem;
            justify-content: center;
            display: flex;
            flex-wrap: wrap;
          ">
          <div
            class="ftab"
            v-for="tab in tabs"
            :key="tab"
            :class="{ active: activeTab === tab }"
            @click="activeTab = tab">
            {{ tab }}
          </div>
        </div>
        <div class="gallery-grid">
          <div
            class="gallery-item"
            v-for="img in filteredImages"
            :key="img.src"
            @click="openLightbox(img)">
            <img :src="img.src" :alt="img.caption" loading="lazy" />
            <div class="gallery-item-overlay">
              <div class="gallery-item-caption">{{ img.caption }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <div
      v-if="lightboxImg"
      style="
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.92);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
      "
      @click.self="lightboxImg = null">
      <div style="max-width: 900px; width: 100%; position: relative">
        <img
          :src="lightboxImg.src"
          :alt="lightboxImg.caption"
          style="width: 100%; border-radius: 12px; display: block" />
        <div
          style="
            text-align: center;
            color: rgba(255, 255, 255, 0.8);
            margin-top: 1rem;
            font-size: 0.9rem;
          ">
          {{ lightboxImg.caption }}
        </div>
        <button
          @click="lightboxImg = null"
          style="
            position: absolute;
            top: -1rem;
            right: -1rem;
            background: var(--accent);
            color: #000;
            border: none;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: 700;
          ">
          ✕
        </button>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref, computed } from "vue";

import { useScrollReveal } from "../composables/useAnimations.js";
import PageHero from "../components/PageHero.vue";
useScrollReveal();

const tabs = ["All", "Meetups", "Events", "Study Sessions", "Celebrations"];
const activeTab = ref("All");
const lightboxImg = ref(null);

const images = [
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80&auto=format&fit=crop",
    caption: "Study Group Session",
    cat: "Study Sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop",
    caption: "Annual Tech Conference",
    cat: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop",
    caption: "Delhi Meetup 2025",
    cat: "Meetups",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop",
    caption: "Python Workshop",
    cat: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop",
    caption: "SundarHack 2025",
    cat: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80&auto=format&fit=crop",
    caption: "Bangalore Meetup",
    cat: "Meetups",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80&auto=format&fit=crop",
    caption: "Guest Lecture",
    cat: "Study Sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80&auto=format&fit=crop",
    caption: "Exam Prep Marathon",
    cat: "Study Sessions",
  },
  {
    src: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80&auto=format&fit=crop",
    caption: "Quiz Competition",
    cat: "Events",
  },
  {
    src: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80&auto=format&fit=crop",
    caption: "Delhi City Meetup",
    cat: "Meetups",
  },
  {
    src: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800&q=80&auto=format&fit=crop",
    caption: "Mumbai Meetup",
    cat: "Meetups",
  },
  {
    src: "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80&auto=format&fit=crop",
    caption: "Kolkata Chapter",
    cat: "Celebrations",
  },
];

const filteredImages = computed(() =>
  activeTab.value === "All"
    ? images
    : images.filter((i) => i.cat === activeTab.value),
);
function openLightbox(img) {
  lightboxImg.value = img;
}
</script>
