<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'
export default {
  name: 'ChennaiMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Chennai Chapter',
        heroTitle: 'Chennai',
        heroDesc: 'The city closest to IIT Madras — Chennai\'s chapter carries a special pride. Students, alumni, and aspirants united under one academic family.',
        stats: { total: 7, cities: 1, members: 260 },
        upcoming: {
          name: 'T. Nagar<br>Meetup',
          date: '20 February 2026',
          time: '5:00 PM – 7:30 PM',
          about: 'Chennai\'s next chapter meetup is at the buzzing heart of T. Nagar. Come connect with fellow IITM BS students — the programme\'s home city community is one of a kind.',
          venue: 'Ampa Skywalk Mall',
          address1: 'Nelson Manickam Road, Aminjikarai',
          address2: 'Chennai, Tamil Nadu – 600029',
          mapsUrl: 'https://maps.google.com/?q=Ampa+Skywalk+Chennai',
          spots: 30,
          tags: ['🎓 Students', '🌴 Chennai', '☕ Networking', '📚 Study Tips', '🤝 Community'],
        },
        pastMeetups: [
          { id: 1, badge: 'September 2025', instaUrl: 'https://instagram.com/p/chn1', title: 'Marina Beach Meetup', date: '27 Sep 2025', location: 'Marina Beach, Chennai', duration: '2.5 hrs', special: null, about: 'The world\'s second-longest beach as our backdrop — this was a meetup to remember. Students gathered at sunset for open conversations about the IITM BS journey.', attended: 41, photos: 67, tags: ['Marina Beach', 'Chennai', 'Sep 2025'] },
          { id: 2, badge: 'May 2025', instaUrl: 'https://instagram.com/p/chn2', title: 'Anna Nagar Meetup', date: '03 May 2025', location: 'Anna Nagar, Chennai', duration: '2 hrs', special: null, about: 'A classic Chennai evening in Anna Nagar — idli, chai, and intense conversations about data science electives and placement strategies.', attended: 33, photos: 38, tags: ['Anna Nagar', 'Chennai', 'May 2025'] },
          { id: 3, badge: 'December 2024', instaUrl: 'https://instagram.com/p/chn3', title: 'Velachery Meetup', date: '15 Dec 2024', location: 'Velachery, Chennai', duration: '2 hrs', special: null, about: 'Year-end meetup where students reflected on their progress and set targets for the next semester. A warm, celebratory gathering to close out 2024.', attended: 24, photos: 29, tags: ['Velachery', 'Chennai', 'Dec 2024'] },
          { id: 4, badge: 'August 2024', instaUrl: 'https://instagram.com/p/chn4', title: 'Adyar Meetup', date: '04 Aug 2024', location: 'Adyar, Chennai', duration: '1.5 hrs', special: 'First Meetup', about: 'Chennai\'s first Sundarbans meetup — right next to IITM\'s home city. The founding group had a special energy knowing they were just miles from the campus.', attended: 13, photos: 17, tags: ['Adyar', 'Chennai', 'Aug 2024', 'First Meetup'] },
        ],
      },
    }
  },
}
</script>
