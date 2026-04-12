<template>
  <div v-if="city">
    <PageHero
      :bg-image="city.assetImg"
      breadcrumb-title="Meetups"
      :title="city.heroTitle"
      accent-title="Meetups"
      :subtitle="city.heroDesc"
    />

    <!-- STATS -->
    <section class="section rs" style="padding-top: 0">
      <div class="container">
        <div class="stats-band" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(212,160,23,0.13); border: 1px solid rgba(212,160,23,0.13); border-radius: 14px; overflow: hidden;">
          <div class="stat-cell" style="background: var(--surface, #110f0a); padding: 36px 32px; display: flex; flex-direction: column; gap: 6px;">
            <span class="stat-number" :data-count="city.stats.meetups" style="font-family: Cinzel, serif; font-size: 3rem; font-weight: 800; background: linear-gradient(135deg,#d4a017,#f0c040); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; line-height: 1;">0</span>
            <span style="font-size: 0.75rem; color: var(--text2); letter-spacing: 0.05em;">Total Meetups Hosted</span>
          </div>
          <div class="stat-cell" style="background: var(--surface, #110f0a); padding: 36px 32px; display: flex; flex-direction: column; gap: 6px;">
            <span class="stat-number" :data-count="city.stats.locations" style="font-family: Cinzel, serif; font-size: 3rem; font-weight: 800; background: linear-gradient(135deg,#10B981,#059669); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; line-height: 1;">0</span>
            <span style="font-size: 0.75rem; color: var(--text2); letter-spacing: 0.05em;">Cities & Locations</span>
          </div>
          <div class="stat-cell" style="background: var(--surface, #110f0a); padding: 36px 32px; display: flex; flex-direction: column; gap: 6px;">
            <span class="stat-number" :data-count="city.stats.members" style="font-family: Cinzel, serif; font-size: 3rem; font-weight: 800; background: linear-gradient(135deg,#F59E0B,#EF4444); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; line-height: 1;">0</span>
            <span style="font-size: 0.75rem; color: var(--text2); letter-spacing: 0.05em;">Members Connected</span>
          </div>
        </div>
      </div>
    </section>

    <!-- UPCOMING MEETUP -->
    <section class="section rs" id="upcoming">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Next Event</div>
          <h2 class="section-title-xl">
            Upcoming <span class="tg">Meetup</span>
          </h2>
        </div>

        <div class="card-base" style="overflow: hidden; position: relative; border: 1px solid rgba(212,160,23,0.18);">
          <!-- top gold line -->
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg,#d4a017,#f0c040,transparent);"></div>

          <div style="display: grid; grid-template-columns: 1fr 300px;">

            <!-- Info pane -->
            <div style="padding: 2.5rem; border-right: 1px solid rgba(212,160,23,0.13);">
              <div style="display: inline-flex; align-items: center; gap: 7px; background: rgba(212,160,23,0.1); border: 1px solid rgba(212,160,23,0.3); color: #f0c040; padding: 5px 14px; border-radius: 100px; font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1.5rem;">
                <span style="width: 6px; height: 6px; border-radius: 50%; background: #d4a017; display: inline-block; animation: pulse-dot 1.5s ease-in-out infinite;"></span>
                Upcoming
              </div>

              <h3 style="font-family: Cinzel, serif; font-size: clamp(1.6rem, 3vw, 2.5rem); font-weight: 700; line-height: 1.1; margin-bottom: 1.5rem; white-space: pre-line;">{{ city.upcoming.name }}</h3>

              <div style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-bottom: 2rem;">
                <div class="chip">📅 {{ city.upcoming.date }}</div>
                <div class="chip">⏰ {{ city.upcoming.time }}</div>
                <div class="chip">🆓 {{ city.upcoming.entry }}</div>
              </div>

              <div style="margin-bottom: 1.5rem;">
                <span style="font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #d4a017; display: block; margin-bottom: 0.6rem;">About this Meetup</span>
                <p class="desc">{{ city.upcoming.about }}</p>
              </div>

              <div>
                <span style="font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #d4a017; display: block; margin-bottom: 0.6rem;">Venue & Address</span>
                <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(212,160,23,0.13); border-radius: 12px; padding: 1.2rem; display: flex; gap: 1rem; align-items: flex-start;">
                  <div style="width: 36px; height: 36px; flex-shrink: 0; border-radius: 8px; background: rgba(212,160,23,0.12); display: flex; align-items: center; justify-content: center; font-size: 16px;">📍</div>
                  <div>
                    <div style="font-size: 13.5px; font-weight: 600; color: var(--text); margin-bottom: 3px;">{{ city.upcoming.venueName }}</div>
                    <div style="font-size: 12px; color: var(--text2); line-height: 1.6;">{{ city.upcoming.venueAddress }}</div>
                    <div style="font-size: 12px; color: var(--text2);">{{ city.upcoming.venueCity }}</div>
                    <a :href="city.upcoming.venueMap" target="_blank" style="display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 500; color: #d4a017; text-decoration: none; margin-top: 8px;">
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Register pane -->
            <div style="padding: 2.5rem 2rem; display: flex; flex-direction: column;">
              <div style="text-align: center; margin-bottom: 1.2rem;">
                <span style="font-family: Cinzel, serif; font-size: 4.5rem; font-weight: 700; line-height: 1; background: linear-gradient(135deg,#f0c040,#d4a017); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; display: block;">{{ city.upcoming.spots }}</span>
                <span style="font-size: 11px; color: var(--text2); letter-spacing: 0.12em; text-transform: uppercase; margin-top: 4px; display: block;">Spots Remaining</span>
              </div>
              <div style="height: 1px; background: rgba(212,160,23,0.13); margin: 1rem 0;"></div>
              <p class="desc" style="text-align: center; font-size: 0.82rem; margin-bottom: 1.5rem;">Free & open to all IITM BS students and Sundarbans members.</p>
              <a href="#" style="display: flex; align-items: center; justify-content: center; gap: 10px; background: #d4a017; color: #000; width: 100%; padding: 14px 20px; border-radius: 10px; font-size: 14px; font-weight: 700; text-decoration: none; letter-spacing: 0.04em; transition: background 0.25s;">
                Register Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <p style="font-size: 11px; color: rgba(245,237,208,0.25); text-align: center; margin-top: 10px; letter-spacing: 0.05em;">{{ city.upcoming.regClosing }}</p>
              <div style="height: 1px; background: rgba(212,160,23,0.13); margin: 1rem 0;"></div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                <span v-for="tag in city.upcoming.tags" :key="tag" style="font-size: 11px; padding: 5px 12px; border-radius: 6px; background: rgba(245,237,208,0.06); color: var(--text2); border: 1px solid rgba(212,160,23,0.13);">{{ tag }}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- PAST MEETUPS TIMELINE -->
    <section class="section rs" style="padding-top: 1rem;">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Archive</div>
          <h2 class="section-title-xl">
            Past <span class="tg">Meetups</span>
          </h2>
        </div>

        <div style="position: relative; padding-left: 2rem;">
          <!-- vertical line -->
          <div style="position: absolute; left: 0; top: 8px; bottom: 0; width: 1px; background: linear-gradient(to bottom, #d4a017, transparent); opacity: 0.2;"></div>

          <div
            v-for="(meetup, index) in city.pastMeetups"
            :key="index"
            class="rc"
            style="position: relative; margin-bottom: 2.5rem;">
            <!-- dot -->
            <div style="position: absolute; left: -2.5rem; top: 1.4rem; width: 13px; height: 13px; border-radius: 50%; border: 2px solid #d4a017; background: var(--bg, #080705);"></div>

            <div class="card-base" style="overflow: hidden;">
              <!-- Card head -->
              <div style="padding: 1.75rem 2rem 0;">
                <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
                  <span style="font-size: 10px; font-weight: 500; letter-spacing: 0.18em; text-transform: uppercase; color: #d4a017; background: rgba(212,160,23,0.1); border: 1px solid rgba(212,160,23,0.22); padding: 4px 12px; border-radius: 100px;">{{ meetup.badge }}</span>
                  <a :href="meetup.instaLink" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 500; color: var(--text2); background: rgba(245,237,208,0.06); border: 1px solid rgba(212,160,23,0.2); padding: 5px 13px; border-radius: 100px; text-decoration: none;">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    View Post
                  </a>
                </div>
                <h3 style="font-family: Cinzel, serif; font-size: 1.35rem; font-weight: 700; letter-spacing: 0.01em; margin-bottom: 0.75rem; line-height: 1.2;">{{ meetup.title }}</h3>
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1rem;">
                  <div class="chip" style="font-size: 12px;">📅 {{ meetup.date }}</div>
                  <div class="chip" style="font-size: 12px;">📍 {{ meetup.location }}</div>
                  <div class="chip" style="font-size: 12px;">⏱️ {{ meetup.duration }}</div>
                  <div v-if="meetup.isFirst" class="chip" style="font-size: 12px; border-color: rgba(212,160,23,0.3); color: #f0c040; background: rgba(212,160,23,0.06);">🏆 First Meetup</div>
                </div>
              </div>

              <!-- About -->
              <div style="padding: 0 2rem 1rem;">
                <span style="font-size: 9px; font-weight: 500; letter-spacing: 0.2em; text-transform: uppercase; color: #d4a017; display: block; margin-bottom: 8px;">About this Meetup</span>
                <p class="desc" style="font-size: 0.85rem;">{{ meetup.about }}</p>
              </div>

              <!-- Stats bar -->
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(212,160,23,0.13); border-top: 1px solid rgba(212,160,23,0.13); border-bottom: 1px solid rgba(212,160,23,0.13);">
                <div style="background: var(--surface, #110f0a); padding: 1rem; text-align: center;">
                  <span style="font-family: Cinzel, serif; font-size: 1.6rem; font-weight: 700; color: #f0c040; line-height: 1; display: block;">{{ meetup.attended }}</span>
                  <span style="font-size: 10px; color: var(--text2); letter-spacing: 0.08em; margin-top: 3px; display: block;">Attended</span>
                </div>
                <div style="background: var(--surface, #110f0a); padding: 1rem; text-align: center;">
                  <span style="font-family: Cinzel, serif; font-size: 1.6rem; font-weight: 700; color: #f0c040; line-height: 1; display: block;">{{ meetup.photos }}</span>
                  <span style="font-size: 10px; color: var(--text2); letter-spacing: 0.08em; margin-top: 3px; display: block;">Photos Taken</span>
                </div>
                <div style="background: var(--surface, #110f0a); padding: 1rem; text-align: center;">
                  <span style="font-family: Cinzel, serif; font-size: 1.6rem; font-weight: 700; color: #f0c040; line-height: 1; display: block;">⭐</span>
                  <span style="font-size: 10px; color: var(--text2); letter-spacing: 0.08em; margin-top: 3px; display: block;">Community Event</span>
                </div>
              </div>

              <!-- Photo grid placeholder -->
              <div style="display: grid; grid-template-columns: 2fr 1fr 1fr; grid-template-rows: 160px 160px; gap: 3px;">
                <div style="grid-row: 1 / 3; background: linear-gradient(135deg, rgba(212,160,23,0.08), rgba(18,14,8,0.9)); overflow: hidden;">
                  <img :src="city.assetImg" alt="" style="width: 100%; height: 100%; object-fit: cover; filter: saturate(0.75) brightness(0.85);" @error="(e) => e.target.style.display='none'" />
                </div>
                <div v-for="n in 4" :key="n" style="background: linear-gradient(135deg, rgba(212,160,23,0.05), rgba(18,14,8,0.95)); overflow: hidden;">
                  <img :src="city.assetImg" alt="" style="width: 100%; height: 100%; object-fit: cover; filter: saturate(0.75) brightness(0.7);" @error="(e) => e.target.style.display='none'" />
                </div>
              </div>

              <!-- Footer -->
              <div style="padding: 1rem 2rem; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(212,160,23,0.13);">
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                  <span v-for="tag in meetup.tags" :key="tag" style="font-size: 11px; padding: 4px 10px; border-radius: 5px; background: rgba(245,237,208,0.06); color: var(--text2); border: 1px solid rgba(212,160,23,0.13);">{{ tag }}</span>
                </div>
                <a :href="meetup.instaLink" target="_blank" style="display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 500; color: #d4a017; text-decoration: none; white-space: nowrap; margin-left: 1rem;">
                  View on Instagram →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section rs" style="padding: 5rem 0; background: linear-gradient(135deg, rgba(212,160,23,0.06), rgba(8,7,5,0.95));">
      <div class="container">
        <div class="cta-wrap">
          <div class="section-tag light">All Regions</div>
          <h2 class="cta-heading">Explore Other <span class="cta-acc">Cities</span></h2>
          <p class="cta-sub">Sundarbans House is active across 9 cities. Find your nearest chapter.</p>
          <div class="cta-acts">
            <router-link to="/meetups" class="cta-btn-p">View All Cities →</router-link>
            <router-link to="/community" class="cta-btn-o">Join Community</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 fallback -->
  <div v-else style="min-height: 60vh; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 1rem;">
    <div style="font-family: Cinzel, serif; font-size: 2rem; color: #d4a017;">City Not Found</div>
    <router-link to="/meetups" style="color: var(--text2); text-decoration: none;">← Back to Meetups</router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useScrollReveal, useCounters } from "../composables/useAnimations.js";
import PageHero from "../components/PageHero.vue";
import { cityData } from "../data/cityMeetupData.js";

useScrollReveal();
useCounters();

const route = useRoute();

// Gets city slug from route param e.g. /meetups/delhi → "delhi"
const city = computed(() => {
  const slug = route.params.city?.toLowerCase();
  return cityData[slug] || null;
});
</script>

<style scoped>
.chip {
  display: flex;
  align-items: center;
  gap: 7px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(212, 160, 23, 0.2);
  padding: 7px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 400;
  color: var(--text2);
}

@keyframes pulse-dot {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.6; }
}

@media (max-width: 768px) {
  div[style*="grid-template-columns: 1fr 300px"] {
    grid-template-columns: 1fr !important;
  }
  div[style*="grid-template-columns: repeat(3, 1fr)"] {
    grid-template-columns: 1fr 1fr !important;
  }
}
</style>
