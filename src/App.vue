<template>
  <div id="app">
    <app-title></app-title>
    <hr>

    <app-status :status="quoteCounter()"></app-status>

    <app-interface @newQuote="addQuote(data)"></app-interface>

    <div class="quotecontainer">
      <app-quote v-for="quote in quotes" :wholequote="quote" :quoteid="quote.quoteId"></app-quote>
    </div>

    <app-info></app-info>
  </div>
</template>

<script>
import Title from './components/Title.vue';
import Status from './components/Status.vue';
import Interface from './components/Interface.vue';
import Quote from './components/Quote.vue';
import Info from './components/Info.vue';
import {eventBus} from './main.js';


export default {
  name: 'app',
  data: function() {
    return {
      quotes: eventBus.quotes,
    }
  },
  components: {
    appTitle: Title,
    appStatus: Status,
    appInterface: Interface,
    appQuote: Quote,
    appInfo: Info
  },
  methods: {
    quoteCounter: function() {
      return this.quotes.length;
    },
    addQuote: function(quote) {
      this.quotes.push(quote);
    },
  }
}
</script>

<style lang="scss">
#app {
  margin: 0 50px;
}
</style>
