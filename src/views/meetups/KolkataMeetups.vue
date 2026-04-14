<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'KolkataMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Kolkata Chapter',
        heroTitle: 'Kolkata',
        heroDesc: 'Sundarbans Kolkata chapter meetup archive and activity timeline.',
        stats: { total: 5, cities: 1, members: 113 },
        upcoming: {
          name: 'Park Street<br>Meetup',
          date: '08 March 2026',
          time: '4:00 PM – 7:00 PM',
          about: 'Kolkata\'s iconic Park Street sets the scene for our next community meetup. Join fellow IITM BS students for an evening of conversation, mentoring, and chai.',
          venue: 'Oxford Bookstore Café',
          address1: '17, Park Street',
          address2: 'Kolkata, West Bengal – 700016',
          mapsUrl: 'https://maps.google.com/?q=Oxford+Bookstore+Park+Street+Kolkata',
          spots: 28,
          tags: ['🎓 Students', '📖 Kolkata', '☕ Chai & Chat', '📚 Study Tips', '🤝 Community'],
        },
        pastMeetups: [
          { id: 1, badge: 'Date TBA', instaUrl: 'https://photos.app.goo.gl/MavTJLoFZ6c4Mhmu9', title: 'Museum Visit', date: 'Date TBA', location: 'Kolkata', duration: 'Community Meetup', special: 'Meetup #260', about: 'Explored history and art at the Birla Museum. A day full of learning, bonding, and good vibes.', attended: '33', photos: 'NA', tags: ['Sundarbans House', 'Kolkata'] },
          { id: 2, badge: 'Date TBA', instaUrl: '#', title: 'Brahmputra Resort Meetup', date: 'Date TBA', location: 'Kolkata', duration: 'Community Meetup', special: 'Meetup #283', about: 'Adventure with a 2 km uphill walk. Soaked in peaceful vibes and had meaningful academic discussions surrounded by nature.', attended: '16', photos: 'NA', tags: ['Sundarbans House', 'Kolkata'] },
          { id: 3, badge: 'Date TBA', instaUrl: 'https://photos.app.goo.gl/D5oYAtAoBsuk8C3C9', title: 'Kolkata City Pandal Hopping', date: 'Date TBA', location: 'Kolkata', duration: 'Community Meetup', special: 'Meetup #355', about: 'Began at IB Block Puja. Explored pandals, clicked pictures, and admired the art of Durga Puja in Kolkata.', attended: '18', photos: 'NA', tags: ['Sundarbans House', 'Kolkata'] },
          { id: 4, badge: 'Date TBA', instaUrl: 'https://photos.app.goo.gl/9ujrwMwC7T7ChYCm7', title: 'Eco Park Meetup', date: 'Date TBA', location: 'Kolkata', duration: 'Community Meetup', special: 'Meetup #443', about: 'Meetup filled with warmth, laughter, deep conversations, and the joy of meeting familiar names in person at Eco Park, Sodepur.', attended: '30', photos: 'NA', tags: ['Sundarbans House', 'Kolkata'] },
          { id: 5, badge: 'Date TBA', instaUrl: 'https://photos.app.goo.gl/JwAg8zLJcDH4pcr89', title: 'Turf Cricket Meetup', date: 'Date TBA', location: 'Kolkata', duration: 'Community Meetup', special: 'Meetup #534', about: '4 teams clashed at Copa Arena Turf. Unforgettable cricket, battles on the pitch, and bonds off it.', attended: '16', photos: 'NA', tags: ['Sundarbans House', 'Kolkata'] },
        ],
      },
    }
  },
}
</script>
