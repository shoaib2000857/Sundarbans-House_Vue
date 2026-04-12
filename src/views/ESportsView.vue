<template>
  <div>
    <PageHero
      bg-image="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80&auto=format&fit=crop"
      breadcrumb-title="Community"
      title="E-Sports"
      accent-title="Community"
      subtitle="Play. Compete. Win. — where Sundarbans players grind together."
    />

    <!-- Upcoming Events -->
    <section class="section rs">
      <div class="container">
        <div class="section-header">
          <div class="section-tag esports-tag">Upcoming Events</div>
          <h2 class="section-title-xl">What's <span class="tg-esports">Coming Up</span></h2>
          <p class="desc" style="max-width: 600px">
            Tournaments and sessions dropping soon — register before slots fill.
          </p>
        </div>

        <div class="events-grid">
          <div v-for="event in upcomingEvents" :key="event.id" class="event-card">
            <div class="event-date-badge">
              <span class="event-day">{{ event.day }}</span>
              <span class="event-month">{{ event.month }}</span>
            </div>
            <div class="event-info">
              <span class="event-type-tag">{{ event.type }}</span>
              <h3 class="event-title">{{ event.title }}</h3>
              <p class="event-desc">{{ event.description }}</p>
              <div class="event-meta">
                <span>🕐 {{ event.time }}</span>
                <span>📍 {{ event.venue }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Events -->
    <section class="section rs" style="background: var(--bg2)">
      <div class="container">
        <div class="section-header">
          <div class="section-tag esports-tag">Past Events</div>
          <h2 class="section-title-xl">What We've <span class="tg-esports">Done</span></h2>
          <p class="desc" style="max-width: 600px">
            Tournaments played, champions crowned, and clips worth rewatching.
          </p>
        </div>

        <div class="past-events-grid">
          <div v-for="event in pastEvents" :key="event.id" class="past-event-card">
            <div class="past-event-img-wrap">
              <img :src="event.image" :alt="event.title" class="past-event-img" />
              <div class="past-event-overlay">
                <span class="past-event-date">{{ event.date }}</span>
              </div>
            </div>
            <div class="past-event-body">
              <span class="event-type-tag">{{ event.type }}</span>
              <h3 class="past-event-title">{{ event.title }}</h3>
              <p class="past-event-desc">{{ event.description }}</p>
              <div class="past-event-stat">👥 {{ event.attendees }} attended</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Team -->
    <section class="section rs">
      <div class="container">
        <div class="section-header">
          <div class="section-tag esports-tag">The Team</div>
          <h2 class="section-title-xl">People Behind the <span class="tg-esports">Community</span></h2>
          <p class="desc" style="max-width: 600px">
            The leads and members who keep things running.
          </p>
        </div>

        <div class="team-grid">
          <div v-for="member in team" :key="member.name" class="team-card">
            <div class="team-avatar-wrap">
              <img :src="member.avatar" :alt="member.name" class="team-avatar" />
              <div class="team-role-badge">{{ member.role }}</div>
            </div>
            <h4 class="team-name">{{ member.name }}</h4>
            <p class="team-bio">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import PageHero from "../components/PageHero.vue";
import { useScrollReveal } from "../composables/useAnimations.js";

useScrollReveal();

const upcomingEvents = [
  {
    id: 1,
    title: "Valorant 5v5 House Tournament",
    type: "Tournament",
    description:
      "Internal Valorant tournament. 8 teams, single elimination, prizes for top 3.",
    day: "20",
    month: "APR",
    time: "4:00 PM",
    venue: "Gaming Lab, Block C",
  },
  {
    id: 2,
    title: "Chess Blitz Night",
    type: "Tournament",
    description:
      "Speed chess rounds — 3 minutes per side. Open to all skill levels.",
    day: "27",
    month: "APR",
    time: "8:00 PM",
    venue: "Common Room, Floor 2",
  },
  {
    id: 3,
    title: "BGMI Squad Scrimmage",
    type: "Scrimmage",
    description:
      "Casual squad matches to build team chemistry before the main tournament season.",
    day: "03",
    month: "MAY",
    time: "5:00 PM",
    venue: "Gaming Lab, Block C",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "BGMI Inter-House Cup",
    type: "Tournament",
    description:
      "Four houses competed across 10 matches. Intense, chaotic, and brilliant. Winner: House Falcon.",
    date: "Mar 2025",
    attendees: 48,
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "FIFA Weekend League",
    type: "Tournament",
    description:
      "32-player bracket over 2 days. Last goal was a 90th-minute screamer.",
    date: "Jan 2025",
    attendees: 32,
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Gaming Strategy Workshop",
    type: "Workshop",
    description:
      "A pro gamer walked the community through macro strategy, mental resilience, and team comms.",
    date: "Nov 2024",
    attendees: 55,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80&auto=format&fit=crop",
  },
];

const team = [
  {
    name: "Vivaan Singh",
    role: "Community Lead",
    bio: "Ranked Immortal in Valorant. Somehow also maintains a 8.5 GPA.",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    name: "Tanya Reddy",
    role: "Tournament Director",
    bio: "Runs all brackets, manages disputes, and still finds time to compete.",
    avatar: "https://i.pravatar.cc/150?img=48",
  },
  {
    name: "Aman Joshi",
    role: "Strategy Coach",
    bio: "Chess player turned FPS analyst. Brings a chess clock to everything.",
    avatar: "https://i.pravatar.cc/150?img=17",
  },
  {
    name: "Riya Menon",
    role: "Community Manager",
    bio: "Keeps Discord organized, rosters updated, and drama to a minimum.",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];
</script>

<style scoped>
/* Accent color: #a855f7 (purple) */

.section-header {
  margin-bottom: 2.5rem;
}

.tg-esports {
  background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Tags */
.esports-tag {
  background: rgba(168, 85, 247, 0.1);
  color: #a855f7;
  border-color: rgba(168, 85, 247, 0.3);
}

.event-type-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.5rem;
  background: rgba(168, 85, 247, 0.12);
  color: #a855f7;
  border: 1px solid rgba(168, 85, 247, 0.3);
}

/* Upcoming Events */
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.event-card {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  background: var(--bg2, #f8fafc);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: var(--rad2, 12px);
  padding: 1.4rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.12);
}

.event-date-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 54px;
  border-radius: 10px;
  padding: 0.5rem 0.6rem;
  background: #a855f7;
  color: #fff;
  line-height: 1;
  flex-shrink: 0;
}

.event-day {
  font-size: 1.5rem;
  font-weight: 800;
}

.event-month {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 2px;
}

.event-info { flex: 1; }

.event-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  color: var(--text1, #0f172a);
}

.event-desc {
  font-size: 0.88rem;
  color: var(--text2, #64748b);
  margin: 0 0 0.6rem;
  line-height: 1.55;
}

.event-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.82rem;
  color: var(--text2, #64748b);
  flex-wrap: wrap;
}

/* Past Events */
.past-events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.past-event-card {
  background: var(--bg1, #fff);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: var(--rad2, 12px);
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.past-event-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.12);
}

.past-event-img-wrap {
  position: relative;
  height: 180px;
}

.past-event-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.past-event-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem 0.8rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
}

.past-event-date {
  font-size: 0.78rem;
  color: #fff;
  font-weight: 600;
}

.past-event-body { padding: 1.1rem; }

.past-event-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0.4rem 0 0.4rem;
  color: var(--text1, #0f172a);
}

.past-event-desc {
  font-size: 0.86rem;
  color: var(--text2, #64748b);
  line-height: 1.55;
  margin: 0 0 0.6rem;
}

.past-event-stat {
  font-size: 0.82rem;
  color: var(--text2, #64748b);
}

/* Team */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: var(--bg2, #f8fafc);
  border: 1px solid var(--border, #e2e8f0);
  border-radius: var(--rad2, 12px);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(168, 85, 247, 0.12);
}

.team-avatar-wrap {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.team-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--bg1, #fff);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.team-role-badge {
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.62rem;
  font-weight: 700;
  color: #fff;
  background: #a855f7;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  white-space: nowrap;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.team-name {
  font-size: 1rem;
  font-weight: 700;
  margin: 0.5rem 0 0.3rem;
  color: var(--text1, #0f172a);
}

.team-bio {
  font-size: 0.84rem;
  color: var(--text2, #64748b);
  line-height: 1.5;
  margin: 0;
}
</style>
