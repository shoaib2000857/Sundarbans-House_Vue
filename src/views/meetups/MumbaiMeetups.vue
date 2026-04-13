<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'MumbaiMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Mumbai Chapter',
        heroTitle: 'Mumbai',
        heroDesc: 'The largest Sundarbans chapter — spread across Mumbai, Thane, and Navi Mumbai. Where ambition meets community by the sea.',
        stats: { total: 11, cities: 3, members: 450 },
        upcoming: {
          name: 'Bandra Meetup',
          date: '15 February 2026',
          time: '5:00 PM – 8:00 PM',
          about: 'Join fellow IITM BS students at the heart of Mumbai\'s creative district. Whether you\'re in your first term or final year, this is a space to share, learn, and grow together. Expect lively discussions, study tips, and new friendships.',
          venue: 'Carter Road Promenade',
          address1: 'Carter Road, Bandra West',
          address2: 'Mumbai, Maharashtra – 400050',
          mapsUrl: 'https://maps.google.com/?q=Carter+Road+Bandra+Mumbai',
          spots: 45,
          tags: ['🎓 Students', '🌊 Mumbai', '☕ Networking', '📚 Study Tips', '🤝 Community'],
        },
        pastMeetups: [
          { id: 1, badge: 'November 2025', instaUrl: 'https://instagram.com/p/mumbai1', title: 'Colaba Meetup', date: '08 Nov 2025', location: 'Colaba, Mumbai', duration: '3 hrs', special: null, about: 'Historic Colaba was the backdrop for an evening of incredible conversations. Students from Colaba to Borivali made the trip for this landmark Mumbai meetup.', attended: 63, photos: 71, tags: ['Colaba', 'Mumbai', 'Nov 2025'] },
          { id: 2, badge: 'August 2025', instaUrl: 'https://instagram.com/p/mumbai2', title: 'Powai Meetup', date: '24 Aug 2025', location: 'Powai, Mumbai', duration: '2.5 hrs', special: null, about: 'Set in the tech hub of Mumbai, the Powai meetup brought together working professionals and full-time students in a rich exchange of experiences.', attended: 48, photos: 55, tags: ['Powai', 'Mumbai', 'Aug 2025'] },
          { id: 3, badge: 'May 2025', instaUrl: 'https://instagram.com/p/mumbai3', title: 'Juhu Beach Meetup', date: '11 May 2025', location: 'Juhu Beach, Mumbai', duration: '3 hrs', special: null, about: 'A sunset meetup at Juhu beach — perhaps the most photogenic Sundarbans gathering to date. Students mixed study strategy with bhelpuri and sea breeze.', attended: 54, photos: 88, tags: ['Juhu', 'Mumbai', 'May 2025'] },
          { id: 4, badge: 'January 2025', instaUrl: 'https://instagram.com/p/mumbai4', title: 'Dadar Meetup', date: '19 Jan 2025', location: 'Dadar, Mumbai', duration: '2 hrs', special: null, about: 'A central-Mumbai meetup that made it easy for students from all suburbs to attend. Great turnout and some of the most productive discussions on exam strategy.', attended: 39, photos: 42, tags: ['Dadar', 'Mumbai', 'Jan 2025'] },
          { id: 5, badge: 'August 2024', instaUrl: 'https://instagram.com/p/mumbai5', title: 'Gateway Meetup', date: '10 Aug 2024', location: 'Gateway of India, Mumbai', duration: '2 hrs', special: 'First Meetup', about: 'The very first Mumbai Sundarbans meetup, right at the iconic Gateway of India. A small founding group that set the tone for what Mumbai would become — the largest chapter.', attended: 14, photos: 22, tags: ['Gateway', 'Mumbai', 'Aug 2024', 'First Meetup'] },
        ],
      },
    }
  },
}
</script>
