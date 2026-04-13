<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'
export default {
  name: 'PatnaMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Patna Chapter',
        heroTitle: 'Patna',
        heroDesc: 'One of the fastest-growing Sundarbans chapters — Patna proves that geography is no barrier to academic excellence and community.',
        stats: { total: 4, cities: 1, members: 180 },
        upcoming: {
          name: 'Gandhi Maidan<br>Meetup',
          date: '22 March 2026',
          time: '4:00 PM – 6:30 PM',
          about: 'Patna\'s community gathers again at Gandhi Maidan for an open-air meetup focused on foundation programme strategies, peer support, and Q&A with degree programme seniors.',
          venue: 'Gandhi Maidan',
          address1: 'Gandhi Maidan Road',
          address2: 'Patna, Bihar – 800001',
          mapsUrl: 'https://maps.google.com/?q=Gandhi+Maidan+Patna',
          spots: 25,
          tags: ['🎓 Students', '🏙️ Patna', '☕ Networking', '📚 Study Tips', '🤝 Community'],
        },
        pastMeetups: [
          { id: 1, badge: 'December 2025', instaUrl: 'https://instagram.com/p/pat1', title: 'Boring Road Meetup', date: '13 Dec 2025', location: 'Boring Road, Patna', duration: '2.5 hrs', special: null, about: 'Despite the name, Boring Road was anything but! Students gathered for an energetic year-end meetup full of laughs, learning, and planning for the year ahead.', attended: 37, photos: 41, tags: ['Boring Road', 'Patna', 'Dec 2025'] },
          { id: 2, badge: 'August 2025', instaUrl: 'https://instagram.com/p/pat2', title: 'Patna Sahib Meetup', date: '17 Aug 2025', location: 'Patna Sahib, Patna', duration: '2 hrs', special: null, about: 'A serene gathering near the historic Patna Sahib Gurudwara. Students reflected on their journeys and encouraged each other through the demanding terms ahead.', attended: 29, photos: 34, tags: ['Patna Sahib', 'Patna', 'Aug 2025'] },
          { id: 3, badge: 'April 2025', instaUrl: 'https://instagram.com/p/pat3', title: 'Bailey Road Meetup', date: '06 Apr 2025', location: 'Bailey Road, Patna', duration: '2 hrs', special: null, about: 'Bailey Road meetup drew students from across the city. A focused session on time management and balancing competitive exams with the IITM degree.', attended: 22, photos: 26, tags: ['Bailey Road', 'Patna', 'Apr 2025'] },
          { id: 4, badge: 'November 2024', instaUrl: 'https://instagram.com/p/pat4', title: 'Dak Bungalow Meetup', date: '03 Nov 2024', location: 'Dak Bungalow Chowk, Patna', duration: '1.5 hrs', special: 'First Meetup', about: 'Patna\'s founding meetup at the city\'s historic central square. A modest beginning that grew into one of the country\'s most passionate chapters.', attended: 11, photos: 13, tags: ['Dak Bungalow', 'Patna', 'Nov 2024', 'First Meetup'] },
        ],
      },
    }
  },
}
</script>
