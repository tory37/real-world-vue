import EventService from '@/services/EventService';

export default {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event);
    });
  },
  fetchEvents({ commit }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data);
        commit('SET_TOTAL_EVENTS', response.headers['x-total-count']);
      })
      .catch(error => {
        console.log('There was an error:', error.response); // Logs out the error
      });
  },
  fetchEvent({ commit, getters }, id) {
    var event = getters.getEventById(id);

    if (event) {
      commit('SET_EVENT', event);
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data);
        })
        .catch(error => {
          console.log('There was an error: ', error.response);
        });
    }
  }
};
