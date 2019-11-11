<template>
  <div>
    <h1>Events for {{ user.user.name }}</h1>
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >|
    </template>
    <template v-if="shouldShowNextLink">
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
        >Next Page</router-link
      >
    </template>
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    EventCard
  },
  created() {
    this.fetchEvents({
      perPage: this.perPage,
      page: this.page
    });
  },
  data() {
    return {
      perPage: 3
    };
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    shouldShowNextLink() {
      return this.page * this.perPage < this.event.totalEvents;
    },
    ...mapState(['event', 'user'])
  },
  methods: mapActions('event', ['fetchEvents'])
};
</script>
