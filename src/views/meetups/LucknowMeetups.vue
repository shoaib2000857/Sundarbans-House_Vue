<template>
  <RegionMeetups :config="config" />
</template>

<script>
import RegionMeetups from '@/components/RegionMeetups.vue'

export default {
  name: 'LucknowMeetups',
  components: { RegionMeetups },
  data() {
    return {
      config: {
        chapterLabel: 'Lucknow Chapter',
        heroTitle: 'Lucknow',
        heroDesc: 'The City of Nawabs meets the city of learners. Lucknow\'s Sundarbans chapter blends Awadhi warmth with serious academic ambition.',
        stats: { total: 4, cities: 1, members: 200 },
        upcoming: {
          name: 'Hazratganj<br>Meetup',
          date: '05 April 2026',
          time: '4:00 PM – 7:00 PM',
          about: 'Lucknow\'s Hazratganj — the cultural heart of the city — hosts our next community meetup. Join IITM BS students from across the city for a warm evening of peer learning, mentoring, and Lucknowi tehzeeb.',
          venue: 'Hazratganj Market',
          address1: 'Mahatma Gandhi Marg, Hazratganj',
          address2: 'Lucknow, Uttar Pradesh – 226001',
          mapsUrl: 'https://maps.google.com/?q=Hazratganj+Lucknow',
          spots: 30,
          tags: ['🎓 Students', '🏛️ Lucknow', '☕ Networking', '📚 Study Tips', '🤝 Community'],
        },
        pastMeetups: [
          {
            id: 1,
            badge: 'January 2026',
            instaUrl: 'https://instagram.com/p/lko1',
            title: 'Gomti Nagar Meetup',
            date: '25 Jan 2026',
            location: 'Gomti Nagar, Lucknow',
            duration: '2.5 hrs',
            special: null,
            about: 'Gomti Nagar\'s modern township set the scene for a productive meetup. IT professionals and students came together for frank conversations about managing work, study, and career transitions.',
            attended: 38,
            photos: 43,
            tags: ['Gomti Nagar', 'Lucknow', 'Jan 2026'],
          },
          {
            id: 2,
            badge: 'October 2025',
            instaUrl: 'https://instagram.com/p/lko2',
            title: 'Aminabad Meetup',
            date: '12 Oct 2025',
            location: 'Aminabad, Lucknow',
            duration: '2 hrs',
            special: null,
            about: 'A buzzing afternoon in Aminabad where students gathered over chai and serious study strategy sessions. The old-city energy made for some unforgettable conversations.',
            attended: 29,
            photos: 35,
            tags: ['Aminabad', 'Lucknow', 'Oct 2025'],
          },
          {
            id: 3,
            badge: 'June 2025',
            instaUrl: 'https://instagram.com/p/lko3',
            title: 'Indira Nagar Meetup',
            date: '08 Jun 2025',
            location: 'Indira Nagar, Lucknow',
            duration: '2 hrs',
            special: null,
            about: 'Indira Nagar drew students from across the city\'s eastern zones. A mentoring-focused session where seniors walked newcomers through the programme\'s toughest terms.',
            attended: 22,
            photos: 27,
            tags: ['Indira Nagar', 'Lucknow', 'Jun 2025'],
          },
          {
            id: 4,
            badge: 'February 2025',
            instaUrl: 'https://instagram.com/p/lko4',
            title: 'Bara Imambara Meetup',
            date: '16 Feb 2025',
            location: 'Bara Imambara, Lucknow',
            duration: '1.5 hrs',
            special: 'First Meetup',
            about: 'Lucknow\'s first Sundarbans meetup at one of the city\'s most iconic landmarks. A symbolic beginning — the labyrinthine Bhulbhulaiya behind us, a clear path forward ahead of us.',
            attended: 13,
            photos: 19,
            tags: ['Bara Imambara', 'Lucknow', 'Feb 2025', 'First Meetup'],
          },
        ],
      },
    }
  },
}
</script>
