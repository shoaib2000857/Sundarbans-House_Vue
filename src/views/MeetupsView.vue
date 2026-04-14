<template>
  <div>
    <PageHero
      bg-image="https://img.freepik.com/free-vector/politician-sitting-round-table-boardroom-board-directors-with-ceo-holding-formal-talk-office-room-flat-vector-illustration-business-authority-corporate-leader-planning-strategy-concept_74855-22013.jpg?semt=ais_hybrid&w=740&q=80"
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
            :style="`--card-delay: ${(index + 1) * 0.1}s`"
          >
            <img :src="city.img" :alt="city.name" class="city-img" />
            <div class="city-ov">
              <div class="cn">{{ city.name }}</div>
              <div class="cm">{{ city.members }}</div>
              <router-link :to="city.link" class="cbtn">View →</router-link>
            </div>
          </div>
        </div>

        <div style="margin-top: 4rem; text-align: center; padding: 3rem 2rem; background: var(--surface); border: 1px solid var(--border); border-radius: 16px;">
          <div style="font-size: 2.2rem; margin-bottom: 1rem;">🌍</div>
          <h3 style="font-family: Cinzel, serif; font-size: 1.6rem; margin-bottom: 1rem; font-weight: 700;">
            Bring the Community to Your City
          </h3>
          <p style="color: var(--text2); margin-bottom: 1.75rem; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.6;">
            Want a meetup in your city like Siliguri or Guwahati? Suggest a location, pitch an activity, or volunteer as a host. Help us expand the Sundarbans family!
          </p>
          <a href="https://forms.gle/iHeYQsAbsUTBHJJC6" target="_blank" rel="noopener noreferrer" class="submit-btn" style="display: inline-block; text-decoration: none;">
            Suggest Location or Volunteer
          </a>
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
            "
          >
            <div class="filter-tabs" style="margin: 0">
              <div
                class="ftab"
                v-for="tab in tabs"
                :key="tab"
                :class="{ active: activeTab === tab }"
                @click="activeTab = tab"
              >
                {{ tab }}
              </div>
            </div>
            <span style="font-size: 0.8rem; color: var(--text2)">Updated daily</span>
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
                  <span class="lboard-rank" :class="m.rankClass">{{ m.rank }}</span>
                </td>
                <td>
                  <div class="lboard-member">
                    <img v-if="m.img" :src="m.img" alt="" class="lboard-avatar" />
                    <div v-else class="lboard-avatar-placeholder">{{ m.initial }}</div>
                    <div>
                      <div class="lboard-name">{{ m.name }}</div>
                      <div class="lboard-city">{{ m.city }}</div>
                    </div>
                  </div>
                </td>
                <td style="color: var(--text2); font-size: 0.85rem">{{ m.city }}</td>
                <td><span class="lboard-score">{{ m.points }}</span></td>
                <td><span class="lboard-badge">{{ m.badge }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScrollReveal } from '../composables/useAnimations.js'
import PageHero from '../components/PageHero.vue'

useScrollReveal()

const meetups = {
  "Delhi NCR": [
    {
      "meetup_no": "258",
      "title": "Tricolor Trials 2.0",
      "date": "10th Aug. 2025",
      "attendees": "46",
      "collaboration": "Boundless X Sundarbans X Nallamala",
      "description": "Introductions at Central Park, Connaught Place, followed by the National Anthem. Ended with snacks and conversations at Haldiram’s.",
      "link": "https://www.instagram.com/p/DNu-F89YqVj/"
    },
    {
      "meetup_no": "325",
      "title": "PickleBall",
      "date": "13th Sept. 2025",
      "attendees": "20",
      "collaboration": "Sundarbans",
      "description": "A proper team game having multiple teams with some audience.",
      "link": "https://www.instagram.com/p/DOv20AGE-k5/"
    },
    {
      "meetup_no": null,
      "title": "Dandiya Night",
      "date": "21st Sept. 2025",
      "attendees": "70+",
      "collaboration": "Pravaha X Sundarbans X Pichavaram X Kanha",
      "description": "A fantastic Dandiya night meetup for BS students in Delhi, and it was a blast!",
      "link": "https://www.instagram.com/p/DPWlXmvDxtl/"
    },
    {
      "meetup_no": "340",
      "title": "Navrang 2.0",
      "date": "28th Sept. 2025",
      "attendees": "45",
      "collaboration": "Sundarbans X Boundless X Corbett",
      "description": "Garba night at Pacific Mall, Tagore Garden. Music, dance, and energy created the perfect vibe.",
      "link": "https://www.instagram.com/..."
    },
    {
      "meetup_no": null,
      "title": "BoneFire Bash",
      "date": "14th Jan. 2026",
      "attendees": "NA",
      "collaboration": "Boundless X Kanha X Pichavaram X Sundarbans",
      "description": "Bonfire Bash was pure warmth. Live Dhol, DJ, cozy Bonfire Zone, and unlimited buffet.",
      "link": "https://www.instagram.com/p/DT7X2cfjxAY/"
    },
    {
      "meetup_no": null,
      "title": "GREATER NOIDA MEET-UP",
      "date": "24 Jan. 2026",
      "attendees": "12",
      "collaboration": "Sundarbans",
      "description": "Bringing the IIT Madras BS Degree Programme community together—no agenda, just students connecting and sharing stories.",
      "link": "https://www.instagram.com/p/DT8AmnbE9WK/"
    },
    {
      "meetup_no": "504",
      "title": "AksharDham MeetUp",
      "date": "7th Feb. 2026",
      "attendees": "28",
      "collaboration": "Sundarbans",
      "description": "Good times, familiar faces, and an electric energy that makes campus life unforgettable.",
      "link": "https://www.instagram.com/p/DUlRj1jk928/"
    },
    {
      "meetup_no": null,
      "title": "Unapologetically Her",
      "date": "7th Feb. 2026",
      "attendees": "15 approx.",
      "collaboration": "Sundarbans",
      "description": "First-ever girls-only meetup. Beautifully dressed girls turning from strangers to friends.",
      "link": null
    }
  ],
  "Mumbai": [
    {
      "meetup_no": "264",
      "title": "Sanjay Gandhi National Park Meetup",
      "date": null,
      "attendees": "25+",
      "collaboration": "Tricolor Trails 2.0 (Sundarbans x Boundless x Nallamala)",
      "description": "Icebreakers, exploring Kanheri Caves, an engaging treasure hunt game, and singing the National Anthem.",
      "link": "https://www.instagram.com/p/DNtFbaO0C5b/?igsh=MXgyajhnaGtpZDNwdQ=="
    },
    {
      "meetup_no": "533",
      "title": "Squash Event Meetup",
      "date": null,
      "attendees": "15+",
      "collaboration": "Sportify Society x Nallamala x Sundarbans x Kaziranga House",
      "description": "Squash Event at Rashtriya Khel Mahotsav 2026. Thrilling matches and pure sportsmanship.",
      "link": "https://www.instagram.com/..."
    }
  ],
  "Kolkata": [
    {
      "meetup_no": "260",
      "title": "Museum Visit",
      "date": null,
      "attendees": "33",
      "collaboration": null,
      "description": "Explored history and art at the Birla Museum. A day full of learning, bonding, and good vibes.",
      "link": "https://photos.app.goo.gl/MavTJLoFZ6c4Mhmu9"
    },
    {
      "meetup_no": "283",
      "title": "Brahmputra Resort Meetup",
      "date": null,
      "attendees": "16",
      "collaboration": null,
      "description": "Adventure with a 2 km uphill walk. Soaked in peaceful vibes and had meaningful academic discussions surrounded by nature.",
      "link": null
    },
    {
      "meetup_no": "355",
      "title": "Kolkata City Pandal Hopping",
      "date": null,
      "attendees": "18",
      "collaboration": null,
      "description": "Began at IB Block Puja. Explored pandals, clicked pictures, and admired the art of Durga Puja in Kolkata.",
      "link": "https://photos.app.goo.gl/D5oYAtAoBsuk8C3C9"
    },
    {
      "meetup_no": "443",
      "title": "Eco Park Meetup",
      "date": null,
      "attendees": "30",
      "collaboration": null,
      "description": "Meetup filled with warmth, laughter, deep conversations, and the joy of meeting familiar names in person at Eco Park, Sodepur.",
      "link": "https://photos.app.goo.gl/9ujrwMwC7T7ChYCm7"
    },
    {
      "meetup_no": "534",
      "title": "Turf Cricket Meetup",
      "date": null,
      "attendees": "16",
      "collaboration": null,
      "description": "4 teams clashed at Copa Arena Turf. Unforgettable cricket, battles on the pitch, and bonds off it.",
      "link": "https://photos.app.goo.gl/JwAg8zLJcDH4pcr89"
    }
  ],
  "Patna": [
    {
      "meetup_no": "257",
      "title": "Tricolor Trails 2.0",
      "date": "6th Aug 2025",
      "attendees": "NA",
      "collaboration": "Boundless X Sundarbans X Nallamalla",
      "description": "Gathered at Gandhi Maidan, trekked up Dungeshwari Hills, hoisted the flag, and explored Bodh Gaya.",
      "link": "https://www.instagram.com/p/DNbABh0vVhF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      "meetup_no": "548",
      "title": "Holi Meetup",
      "date": "28th Feb 2026",
      "attendees": "40",
      "collaboration": "Saranda X Namdapha X Wayanad X Pichavaram X Kaziranga X Kanha X Sundarbans X Nallamala",
      "description": "Patna Holi Meetup with endless colors, feasting on Gola Road, and putting faces to Slack profiles.",
      "link": "https://www.instagram.com/p/DVqspMaE2Ns/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
    },
    {
      "meetup_no": "560",
      "title": "Patna Premier League Phase 2",
      "date": null,
      "attendees": "NA",
      "collaboration": "Sundarbans X Nallamalla",
      "description": "Cricket premier league phase 2.",
      "link": null
    }
  ],
  "Bangalore": [
    {
      "meetup_no": "521",
      "title": "Bangalore Meetup",
      "date": null,
      "attendees": "27",
      "collaboration": "Sundarbans X Kaziranga X Namalla X Sportify",
      "description": "NA",
      "link": "https://www.instagram.com/p/DVFbTLNiVmS/?igsh=MTlicjMzZmc1dHBlYw=="
    }
  ],
  "Hyderabad": [
    {
      "meetup_no": "339",
      "title": "Dandiya Meetup",
      "date": "28 Sep'25",
      "attendees": "NA",
      "collaboration": "SUNDARBANS X NALLAMALA X CORBETT X PRAVAHA X BOUNDLESS TRAVEL SOCIETY",
      "description": "What an amazing evening full of dance, music, and laughter! Our Dandiya meetup brought everyone together to celebrate culture, friendship, and the joy of the festive spirit.",
      "link": "https://www.instagram.com/p/DPrD1XKEvJl/?img_index=4&igsh=MXdtbWt2MTlueGY1dQ=="
    },
    {
      "meetup_no": "353",
      "title": "Photo Walk Meetup",
      "date": "12 Oct'25",
      "attendees": "26",
      "collaboration": "SUNDARBANS X IRIS",
      "description": "Started with lunch at Dumatara Restaurant, followed by a photo walk at the magnificent Chowmahalla Palace. Clicked, explored, and soaked in the history and grandeur of this beautiful palace.",
      "link": "https://www.instagram.com/p/DQZ8H0ik1vf/?igsh=MWNjZDhzemNrcDdndA=="
    },
    {
      "meetup_no": "379",
      "title": "Children's Day Meetup",
      "date": "16 Nov'25",
      "attendees": "20",
      "collaboration": "SUNDARBANS X SAHARA X NILGIRI",
      "description": "Celebrated Children’s Day with underprivileged children at a local labour site. Organized games, distributed prizes, and shared valuable life lessons through stories.",
      "link": "https://www.instagram.com/p/DRq-OkHExaC/?igsh=MXc5b3dvMmEwajRqYw=="
    },
    {
      "meetup_no": "537",
      "title": "Sports Meetup",
      "date": "22 Feb'26",
      "attendees": "21",
      "collaboration": "SUNDARBANS X NALLAMALA X SPORTIFY",
      "description": "An action-packed day organizing a badminton tournament as part of the Rastriya Khel Mahotsav. Fast-paced rallies, competitive matches, and a friendly atmosphere.",
      "link": "https://www.instagram.com..."
    }
  ],
  "Nagpur": [
    {
      "meetup_no": "256",
      "title": "Zilpi Lake Meetup",
      "date": null,
      "attendees": "15+",
      "collaboration": "Tricolor Trails 2.0 (Sundarbans x Boundless x Nallamala)",
      "description": "Fun bus ride to Zilpi Lake, visited Sidhivinayak Mandir, enjoyed games by the lakeside, and sang the National Anthem.",
      "link": "https://www.instagram.com/p/DNmtiUnRzS2/?img_index=4&igsh=MXcya2JyOHd4c2ZyNA=="
    },
    {
      "meetup_no": "516",
      "title": "Pickleball and Turf Meetup",
      "date": null,
      "attendees": "25+",
      "collaboration": "Sundarbans x sportify",
      "description": "Intense tournament play at Prism Court followed by slow moments at the cafe.",
      "link": "https://www.instagram.com/p/DVDqyGijMeG/?igsh=dHBqMjlzODdxOTJy"
    }
  ],

  "Pune": [
    {
      "meetup_no": null,
      "title": "Pune House Connect",
      "date": null,
      "attendees": "55+",
      "collaboration": "Bandipur x Wayanad × Kaziranga × Sundarbans × Gir Namdapha × Nilgiri × Pichavaram",
      "description": "An evening full of connections where students from different houses came together to share ideas.",
      "link": "https://www.instagram.com/p/DUYd_vliX28/?img_index=4&igsh=MXBjMHh6dXRqM3pwOQ=="
    }
  ],

}

const cityImageMap = {
  Bangalore: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1200&q=80&auto=format&fit=crop',
  Hyderabad: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1200&q=80&auto=format&fit=crop',
  'Delhi NCR': 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80&auto=format&fit=crop',
  Kolkata: 'https://images.unsplash.com/photo-1558431382-27e303142255?w=1200&q=80&auto=format&fit=crop',
  Nagpur: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80&auto=format&fit=crop',
  Mumbai: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=1200&q=80&auto=format&fit=crop',
  Pune: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80&auto=format&fit=crop',
  Patna: 'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=1200&q=80&auto=format&fit=crop',
}

const citySlugMap = {
  Bangalore: 'bangalore',
  Hyderabad: 'hyderabad',
  'Delhi NCR': 'delhi-ncr',
  Kolkata: 'kolkata',
  Nagpur: 'nagpur',
  Mumbai: 'mumbai',
  Pune: 'pune',
  Patna: 'patna',
}

const getEstimatedMembers = (cityMeetups) => {
  const total = cityMeetups.reduce((sum, meetup) => {
    const match = String(meetup.attendees || '').match(/\d+/)
    return sum + (match ? Number(match[0]) : 0)
  }, 0)

  return total > 0 ? `${total}+ members connected` : `${cityMeetups.length} meetups hosted`
}

const cities = Object.keys(meetups).map((city) => ({
  name: city,
  members: getEstimatedMembers(meetups[city]),
  img: cityImageMap[city],
  link: `/meetups/${citySlugMap[city]}`,
}))

const tabs = ['All Time', 'This Month', 'This Week']
const activeTab = ref('All Time')

const members = [
  {
    rank: '🥇', rankClass: 'rank-1',
    name: 'Arjun Sharma', city: 'Delhi', points: '4,280', badge: '🔥 Top Contributor',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80&auto=format&fit=crop&crop=face',
  },
  {
    rank: '🥈', rankClass: 'rank-2',
    name: 'Priya Patel', city: 'Bangalore', points: '3,950', badge: '⭐ Helper',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&crop=face',
  },
  {
    rank: '🥉', rankClass: 'rank-3',
    name: 'Rahul Gupta', city: 'Mumbai', points: '3,720', badge: '📚 Academician',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face',
  },
  {
    rank: '4', rankClass: '',
    name: 'Sneha Iyer', city: 'Chennai', points: '3,410', badge: '🎯 Event Pro', initial: 'S',
  },
  {
    rank: '5', rankClass: '',
    name: 'Vivek Menon', city: 'Hyderabad', points: '3,180', badge: '💡 Innovator', initial: 'V',
  },
  {
    rank: '6', rankClass: '',
    name: 'Anjali Rao', city: 'Pune', points: '2,990', badge: '🤝 Community Builder', initial: 'A',
  },
]
</script>
