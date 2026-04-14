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
        heroDesc: 'Sundarbans Bangalore chapter meetup archive and activity timeline.',
        stats: { total: 1, cities: 1, members: 27 },
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
          { id: 1, badge: 'Date TBA', instaUrl: 'https://www.instagram.com/p/DVFbTLNiVmS/?igsh=MTlicjMzZmc1dHBlYw==', title: 'Bangalore Meetup', date: 'Date TBA', location: 'Bangalore', duration: 'Community Meetup', special: 'Meetup #521', about: 'Details will be updated soon.', attended: '27', photos: 'NA', tags: ['Sundarbans X Kaziranga X Namalla X Sportify', 'Bangalore'] },
        ],
      },
    }
  },
}
</script>
