<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'DelhiMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Delhi NCR Chapter',
        heroTitle: 'Delhi',
        heroDesc: 'Connecting students across Delhi, Noida & Gurgaon. Real conversations, real community — built around India\'s top online degree programme.',
        stats: { total: 9, cities: 3, members: 200 },
        upcoming: {
          name: 'Pari Chowk<br>Meetup',
          date: '24 January 2026',
          time: '4:00 PM – 7:00 PM',
          about: 'Join us for an evening of connection, conversation, and community at the iconic Pari Chowk junction. Whether you\'re deep into your IITM BS coursework or just discovered the programme, this is your tribe. Expect ice-breakers, peer study strategies, Q&A sessions with seniors, and a whole lot of good vibes.',
          venue: 'Pari Chowk Junction',
          address1: 'Near Pari Chowk Metro Station, Sector Alpha 1',
          address2: 'Greater Noida, Uttar Pradesh – 201310',
          mapsUrl: 'https://maps.google.com/?q=Pari+Chowk+Greater+Noida',
          spots: 32,
          tags: ['🎓 Students', '☕ Networking', '📚 Study Tips', '🤝 Community', '🏙️ Delhi NCR'],
        },
        pastMeetups: [
          { id: 1, badge: 'October 2025', instaUrl: 'https://instagram.com/p/example1', title: 'Connaught Place Meetup', date: '12 Oct 2025', location: 'Connaught Place, Delhi', duration: '3 hrs', special: null, about: 'CP came alive with IITM BS energy! Students from all semesters gathered at this historic hub, sharing semester experiences, discussing upcoming exams, and forming study groups.', attended: 47, photos: 38, tags: ['CP Meetup', 'Delhi', 'Oct 2025'] },
          { id: 2, badge: 'August 2025', instaUrl: 'https://instagram.com/p/example2', title: 'Hauz Khas Village Meetup', date: '18 Aug 2025', location: 'Hauz Khas Village, Delhi', duration: '2.5 hrs', special: null, about: 'Set amidst the artsy alleys of Hauz Khas Village, this meetup was all about creativity, collaboration, and community. Juniors got candid advice from seniors.', attended: 34, photos: 52, tags: ['HKV', 'Delhi', 'Aug 2025'] },
          { id: 3, badge: 'June 2025', instaUrl: 'https://instagram.com/p/example3', title: 'Cyber Hub Meetup', date: '07 Jun 2025', location: 'Cyber Hub, Gurgaon', duration: '3.5 hrs', special: null, about: 'Our biggest NCR meetup so far! Cyber Hub\'s buzzing atmosphere matched the energy of 50+ IITM BS students. Deep dives into data science tracks and placement prep.', attended: 52, photos: 61, tags: ['Gurgaon', 'Cyber Hub', 'Jun 2025'] },
          { id: 4, badge: 'March 2025', instaUrl: 'https://instagram.com/p/example4', title: 'India Gate Meetup', date: '22 Mar 2025', location: 'India Gate, New Delhi', duration: '2 hrs', special: null, about: 'An iconic location for an iconic community. Students gathered near India Gate at sunset for a relaxed meetup that doubled as a study strategy session.', attended: 29, photos: 44, tags: ['India Gate', 'Delhi', 'Mar 2025'] },
          { id: 5, badge: 'January 2025', instaUrl: 'https://instagram.com/p/example5', title: 'Nehru Place Meetup', date: '11 Jan 2025', location: 'Nehru Place, Delhi', duration: '2 hrs', special: null, about: 'Kicking off 2025 with a bang at Nehru Place! Students shared resolutions, semester goals, and connected over the shared challenge of balancing work and study.', attended: 22, photos: 28, tags: ['Nehru Place', 'Delhi', 'Jan 2025'] },
          { id: 6, badge: 'November 2024', instaUrl: 'https://instagram.com/p/example6', title: 'Sector 18 Meetup', date: '03 Nov 2024', location: 'Sector 18, Noida', duration: '2.5 hrs', special: null, about: 'Noida\'s student community showed up strong for our inaugural Sector 18 meetup. Foundation students got first-hand guidance from degree programme veterans.', attended: 18, photos: 21, tags: ['Noida', 'Sector 18', 'Nov 2024'] },
          { id: 7, badge: 'September 2024', instaUrl: 'https://instagram.com/p/example7', title: 'Lodi Garden Meetup', date: '15 Sep 2024', location: 'Lodi Garden, Delhi', duration: '2 hrs', special: null, about: 'Our first outdoor meetup! Surrounded by Lodi Garden\'s serene greenery, students had open conversations about the IITM BS journey.', attended: 15, photos: 19, tags: ['Lodi Garden', 'Delhi', 'Sep 2024'] },
          { id: 8, badge: 'July 2024', instaUrl: 'https://instagram.com/p/example8', title: 'Vasant Kunj Meetup', date: '20 Jul 2024', location: 'Vasant Kunj, Delhi', duration: '1.5 hrs', special: 'First Meetup', about: 'The very first Delhi NCR Sundarbans meetup! A small but mighty group kicked off what would become one of the most active student chapters in the country.', attended: 11, photos: 14, tags: ['Vasant Kunj', 'Delhi', 'Jul 2024', 'First Meetup'] },
        ],
      },
    }
  },
}
</script>
