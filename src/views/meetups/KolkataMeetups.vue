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
        heroDesc: 'The city of joy, culture, and intellectual tradition — Kolkata\'s Sundarbans chapter is where academic rigour meets warmth.',
        stats: { total: 6, cities: 1, members: 280 },
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
          { id: 1, badge: 'October 2025', instaUrl: 'https://instagram.com/p/kol1', title: 'Salt Lake Meetup', date: '11 Oct 2025', location: 'Salt Lake, Kolkata', duration: '2.5 hrs', special: null, about: 'Salt Lake\'s tech hub brought together IT professionals and full-time students for a rich discussion on balancing career growth with the degree programme.', attended: 43, photos: 48, tags: ['Salt Lake', 'Kolkata', 'Oct 2025'] },
          { id: 2, badge: 'June 2025', instaUrl: 'https://instagram.com/p/kol2', title: 'Gariahat Meetup', date: '21 Jun 2025', location: 'Gariahat, Kolkata', duration: '2 hrs', special: null, about: 'A lively meetup in South Kolkata where students debated course choices and shared their favourite study techniques over adda and mishti.', attended: 35, photos: 41, tags: ['Gariahat', 'Kolkata', 'Jun 2025'] },
          { id: 3, badge: 'February 2025', instaUrl: 'https://instagram.com/p/kol3', title: 'Victoria Memorial Meetup', date: '09 Feb 2025', location: 'Victoria Memorial, Kolkata', duration: '2 hrs', special: null, about: 'What better place for an academic community than the grounds of one of India\'s finest monuments? Students gathered for photos, chai, and serious study talk.', attended: 27, photos: 52, tags: ['Victoria Memorial', 'Kolkata', 'Feb 2025'] },
          { id: 4, badge: 'September 2024', instaUrl: 'https://instagram.com/p/kol4', title: 'New Town Meetup', date: '14 Sep 2024', location: 'New Town, Kolkata', duration: '1.5 hrs', special: 'First Meetup', about: 'Kolkata\'s first Sundarbans meetup in the city\'s newest district. A founding group that brought tremendous warmth and intellectual energy from day one.', attended: 12, photos: 15, tags: ['New Town', 'Kolkata', 'Sep 2024', 'First Meetup'] },
        ],
      },
    }
  },
}
</script>
