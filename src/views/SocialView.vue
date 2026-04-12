<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="Social Media"
      title="Follow"
      accent-title="Sundarbans"
      subtitle="Stay connected with us across all our social media platforms"
    />
    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Our Platforms</div>
          <h2 class="section-title-xl">
            Find Us <span class="tg">Everywhere</span>
          </h2>
          <p class="sec-sub">
            Follow us to never miss an update, event or achievement from the
            community
          </p>
        </div>
        <div class="grid-3">
          <div
            class="card-base rc"
            v-for="(platform, i) in platforms"
            :key="platform.name"
            :style="`--card-delay:${i * 0.08}s;text-align:center`">
            <div style="font-size: 3rem; margin-bottom: 1rem">
              {{ platform.icon }}
            </div>
            <h3
              style="
                font-family: Cinzel, serif;
                font-size: 1.1rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
              ">
              {{ platform.name }}
            </h3>
            <p class="desc" style="font-size: 0.83rem; margin-bottom: 0.75rem">
              {{ platform.desc }}
            </p>
            <div
              style="
                font-family: Cinzel, serif;
                font-size: 1.8rem;
                font-weight: 700;
                color: var(--accent);
                margin-bottom: 0.25rem;
              ">
              {{ platform.followers }}
            </div>
            <div
              style="
                font-size: 0.72rem;
                color: var(--text2);
                margin-bottom: 1.25rem;
              ">
              followers
            </div>
            
              <a>:href="platform.url"
              target="_blank"
              class="submit-btn"
              style="font-size: 0.85rem; padding: 0.55rem 1.25rem"
              >Follow Now</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from "../composables/useAnimations.js";
import PageHero from "../components/PageHero.vue";
useScrollReveal();
const platforms = [
  {
    icon: "💼",
    name: "LinkedIn",
    desc: "Professional updates, achievements and career opportunities",
    followers: "2.4K",
    url: "https://www.linkedin.com/company/sundarbans-iitm/posts/?feedView=all",
  },
  {
    icon: "📸",
    name: "Instagram",
    desc: "Event photos, reels, stories and community highlights",
    followers: "3.8K",
    url: "https://www.instagram.com/sundarbansiitm/",
  },
  {
    icon: "▶️",
    name: "YouTube",
    desc: "Recorded sessions, event recaps and educational video content",
    followers: "890+",
    url: "https://www.youtube.com/channel/UC8pGrF1iAbj7MXNSf7AlqFg",
  },
];
</script>
