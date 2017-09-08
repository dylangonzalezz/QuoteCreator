<template>
  <div class="interface__container">
    <div class="container container__quote">
      <h5 class="interface__subtitle interface__subtitle--quote">Quote</h5>
      <textarea class="interface__input interface__input--quote" v-model="quote"></textarea>
    </div>
    <div class="container container__author">
      <h5 class="interface__subtitle interface__subtitle--author">Author</h5>
      <input type="text" class="interface__input interface__input--author" v-model="author">
      <p>{{ wholequote.quote }}</p>
    </div>
    <button class="interface__input interface__input--submit" @click="addQuote()">Add Quote</button>
  </div>
</template>

<script>

import {eventBus} from '../main.js';

  export default {
    data: function() {
      return {
        quote: "",
        author: "",
        quoteNr: eventBus.quotes.length,
        wholequote: function() {
          return {quote: this.quote, author: this.author, quoteId: this.getQuoteId()}
        },
        getQuoteId: function() {
          var quoteNr = eventBus.quotes.length;
          return quoteNr+1;
        }
      }
    },
    methods: {
      addQuote: function() {
        var quoteNr = eventBus.quotes.length;
        if (quoteNr >= 10) {
          return;
        }
        eventBus.quotes.push(this.wholequote());
      }
    }
  }
</script>

<style scoped lang="scss">
.interface__container {
  margin: 10px auto 10px auto;
  width:700px;
}
.container {
  float: none;
  width: 100%;
  padding: 0 0 10px 0;
}
.interface__input{
  width: 100%;

  &--submit{
    width: 20%;
    margin: 0 40% 0 40%;
  }
}

</style>
