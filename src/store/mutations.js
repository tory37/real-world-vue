export default {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_TOTAL_EVENTS(state, count) {
    state.totalEvents = count;
  },
  SET_EVENT(state, event) {
    state.event = event;
  }
};
