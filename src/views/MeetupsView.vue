<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="Meetups"
      title="City"
      accent-title="Meetups"
      subtitle="Find and connect with Sundarbans members in your city"
    />

    <section class="section rs">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Across India</div>
          <h2 class="section-title-xl">
            Choose <span class="tg">your city</span>
          </h2>
        </div>
        <div class="city-grid">
          <div
            class="city-card rc"
            v-for="(city, index) in cities"
            :key="city.name"
            :style="`--card-delay: ${(index + 1) * 0.1}s`">
            <img
              :src="city.img"
              :alt="city.name"
              class="city-img" />
            <div class="city-ov">
              <div class="cn">{{ city.name }}</div>
              <div class="cm">{{ city.members }}</div>
              <a :href="city.link" class="cbtn">View →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section rs" style="background: var(--bg2)">
      <div class="container">
        <div class="sec-hdr">
          <div class="section-tag">Hall of Fame</div>
          <h2 class="section-title-xl">
            Member <span class="tg">Leaderboard</span>
          </h2>
          <p class="sec-sub">
            Top contributors and most active members of Sundarbans House
          </p>
        </div>
        <div class="card-base">
          <div
            style="
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 1.5rem;
              flex-wrap: wrap;
              gap: 0.75rem;
            ">
            <div class="filter-tabs" style="margin: 0">
              <div
                class="ftab"
                v-for="tab in tabs"
                :key="tab"
                :class="{ active: activeTab === tab }"
                @click="activeTab = tab">
                {{ tab }}
              </div>
            </div>
            <span style="font-size: 0.8rem; color: var(--text2)"
              >Updated daily</span
            >
          </div>
          <table class="lboard-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Member</th>
                <th>City</th>
                <th>Points</th>
                <th>Badge</th>
              </tr>
            </thead>
            <tbody>
              <tr class="lboard-row" v-for="m in members" :key="m.name">
                <td>
                  <span class="lboard-rank" :class="m.rankClass">{{
                    m.rank
                  }}</span>
                </td>
                <td>
                  <div class="lboard-member">
                    <img
                      v-if="m.img"
                      :src="m.img"
                      alt=""
                      class="lboard-avatar" />
                    <div v-else class="lboard-avatar-placeholder">
                      {{ m.initial }}
                    </div>
                    <div>
                      <div class="lboard-name">{{ m.name }}</div>
                      <div class="lboard-city">{{ m.city }}</div>
                    </div>
                  </div>
                </td>
                <td style="color: var(--text2); font-size: 0.85rem">
                  {{ m.city }}
                </td>
                <td>
                  <span class="lboard-score">{{ m.points }}</span>
                </td>
                <td>
                  <span class="lboard-badge">{{ m.badge }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScrollReveal } from "../composables/useAnimations.js";
import PageHero from "../components/PageHero.vue";

useScrollReveal();

const cities = [
  {
    name: "Mumbai",
    members: "450+ members",
    img: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/mumbai.html",
  },
  {
    name: "Patna",
    members: "180+ members",
    img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/patna.html",
  },
  {
    name: "Delhi",
    members: "320+ members",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/delhi.html",
  },
  {
    name: "Kolkata",
    members: "280+ members",
    img: "https://images.unsplash.com/photo-1558431382-27e303142255?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/kolkata.html",
  },
  {
    name: "Hyderabad",
    members: "310+ members",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/hyderabad.html",
  },
  {
    name: "Bangalore",
    members: "580+ members",
    img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/bangalore.html",
  },
  {
    name: "Chennai",
    members: "260+ members",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/chennai.html",
  },
  {
    name: "Chandigarh",
    members: "150+ members",
    img: "https://images.unsplash.com/photo-1609234656432-603dae0e9f3e?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/chandigarh.html",
  },
  {
    name: "Lucknow",
    members: "200+ members",
    img: "https://images.unsplash.com/photo-1567408212163-2bbf1c0c35f0?w=600&q=80&auto=format&fit=crop",
    link: "meetups/region/lucknow.html",
  },
];

const tabs = ["All Time", "This Month", "This Week"];
const activeTab = ref("All Time");

const members = [
  {
    rank: "🥇",
    rankClass: "rank-1",
    name: "Arjun Sharma",
    city: "Delhi",
    points: "4,280",
    badge: "🔥 Top Contributor",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80&auto=format&fit=crop&crop=face",
  },
  {
    rank: "🥈",
    rankClass: "rank-2",
    name: "Priya Patel",
    city: "Bangalore",
    points: "3,950",
    badge: "⭐ Helper",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&crop=face",
  },
  {
    rank: "🥉",
    rankClass: "rank-3",
    name: "Rahul Gupta",
    city: "Mumbai",
    points: "3,720",
    badge: "📚 Academician",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face",
  },
  {
    rank: "4",
    rankClass: "",
    name: "Sneha Iyer",
    city: "Chennai",
    points: "3,410",
    badge: "🎯 Event Pro",
    initial: "S",
  },
  {
    rank: "5",
    rankClass: "",
    name: "Vivek Menon",
    city: "Hyderabad",
    points: "3,180",
    badge: "💡 Innovator",
    initial: "V",
  },
  {
    rank: "6",
    rankClass: "",
    name: "Anjali Rao",
    city: "Pune",
    points: "2,990",
    badge: "🤝 Community Builder",
    initial: "A",
  },
];
</script>
