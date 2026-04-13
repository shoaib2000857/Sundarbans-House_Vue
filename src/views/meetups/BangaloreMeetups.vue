<!-- ============================================================
  BANGALORE
  Save as: src/views/meetups/BangaloreMeetups.vue
  ============================================================ -->
<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'
export default {
  name: 'BangaloreMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Bangalore Chapter',
        heroTitle: 'Bangalore',
        heroDesc: 'India\'s Silicon Valley meets IITM BS. Where techies, builders, and curious minds come together to grow beyond the screen.',
        stats: { total: 8, cities: 2, members: 390 },
        upcoming: {
          name: 'Koramangala<br>Meetup',
          date: '01 March 2026',
          time: '4:30 PM – 7:30 PM',
          about: 'Koramangala — Bangalore\'s startup heartland — hosts our next IITM BS community meetup. Come talk career tracks, data science projects, and the hustle of studying while working.',
          venue: 'Koramangala Social',
          address1: '118, 80 Feet Road, 6th Block',
          address2: 'Koramangala, Bengaluru – 560095',
          mapsUrl: 'https://maps.google.com/?q=Social+Koramangala+Bangalore',
          spots: 38,
          tags: ['🎓 Students', '💻 Tech', '☕ Networking', '📚 Study Tips', '🏙️ Bangalore'],
        },
        pastMeetups: [
          { id: 1, badge: 'October 2025', instaUrl: 'https://instagram.com/p/blr1', title: 'Indiranagar Meetup', date: '19 Oct 2025', location: 'Indiranagar, Bangalore', duration: '3 hrs', special: null, about: 'Indiranagar brought out Bangalore\'s best. Engineers, designers, and aspiring data scientists came together for an evening of knowledge exchange.', attended: 58, photos: 64, tags: ['Indiranagar', 'Bangalore', 'Oct 2025'] },
          { id: 2, badge: 'June 2025', instaUrl: 'https://instagram.com/p/blr2', title: 'HSR Layout Meetup', date: '14 Jun 2025', location: 'HSR Layout, Bangalore', duration: '2.5 hrs', special: null, about: 'A packed evening in HSR Layout where seniors guided juniors on navigating the degree programme while working full-time at tech companies.', attended: 44, photos: 50, tags: ['HSR Layout', 'Bangalore', 'Jun 2025'] },
          { id: 3, badge: 'February 2025', instaUrl: 'https://instagram.com/p/blr3', title: 'Cubbon Park Meetup', date: '16 Feb 2025', location: 'Cubbon Park, Bangalore', duration: '2 hrs', special: null, about: 'Our first outdoor Bangalore meetup under the canopy of Cubbon Park. The relaxed setting made for some of the most honest conversations about study struggles.', attended: 31, photos: 39, tags: ['Cubbon Park', 'Bangalore', 'Feb 2025'] },
          { id: 4, badge: 'September 2024', instaUrl: 'https://instagram.com/p/blr4', title: 'MG Road Meetup', date: '22 Sep 2024', location: 'MG Road, Bangalore', duration: '2 hrs', special: 'First Meetup', about: 'Bangalore\'s first Sundarbans meetup. A small, high-energy founding group at MG Road that set the pace for what would become one of the most active chapters.', attended: 16, photos: 20, tags: ['MG Road', 'Bangalore', 'Sep 2024', 'First Meetup'] },
        ],
      },
    }
  },
}
</script>
