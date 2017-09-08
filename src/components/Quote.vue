<template>
  <div class="quote__container" @click="removeQuote()">
    <p class="quote__text"> {{ wholequote.quote }} </p>
    <h4 class="quote__author"> {{ wholequote.author }} </h4>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

  export default {
    data: function() {
      return {
      }
    },
    props: ['wholequote','quoteid'],
    methods: {
      removeQuote: function() {
        var index = eventBus.quotes.findIndex(x => x.quoteId==this.quoteid);
        eventBus.quotes.splice(index,1);
      }
    }
  }
</script>

<style scoped lang="scss">
.quote__{
  &container{
    width: 21%;
    margin: auto 2% 20px 2%;
    border-radius: 2px;
    padding: 5px;
    border: solid 1px lightgray;
    float: left;
    display:block;
    &:hover{
      background-color: rgb(254, 243, 241)
    }
  }
  &text{
    font-style: italic;
    font-size: 20px;
  }
  &author{
    font-size: 15px;
    font-weight: bold;
  }
}
</style>
