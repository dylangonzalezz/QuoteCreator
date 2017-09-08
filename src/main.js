import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data: {
    quotes: [
      {quote:'Make things as simple as possible, but not simpler.', author:'Albert Einstein', quoteId: '1'},
      {quote:'Kekerino', author:'Dylonski', quoteId: '2'}
    ],
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
