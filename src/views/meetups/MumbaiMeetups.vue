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
        heroDesc: 'Sundarbans Mumbai chapter meetup archive and activity timeline.',
        stats: { total: 2, cities: 1, members: 40 },
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
          { id: 1, badge: 'Date TBA', instaUrl: 'https://www.instagram.com/p/DNtFbaO0C5b/?igsh=MXgyajhnaGtpZDNwdQ==', title: 'Sanjay Gandhi National Park Meetup', date: 'Date TBA', location: 'Mumbai', duration: 'Community Meetup', special: 'Meetup #264', about: 'Icebreakers, exploring Kanheri Caves, an engaging treasure hunt game, and singing the National Anthem.', attended: '25+', photos: 'NA', tags: ['Tricolor Trails 2.0 (Sundarbans x Boundless x Nallamala)', 'Mumbai'] },
          { id: 2, badge: 'Date TBA', instaUrl: 'https://www.instagram.com/...', title: 'Squash Event Meetup', date: 'Date TBA', location: 'Mumbai', duration: 'Community Meetup', special: 'Meetup #533', about: 'Squash Event at Rashtriya Khel Mahotsav 2026. Thrilling matches and pure sportsmanship.', attended: '15+', photos: 'NA', tags: ['Sportify Society x Nallamala x Sundarbans x Kaziranga House', 'Mumbai'] },
        ],
      },
    }
  },
}
</script>
