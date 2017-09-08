<template>
  <div class="status__container">
    <h2>Quotes Added</h2>
    <div class="progress">
     <div class="progress-bar" :style="countPercent()">
       <p> {{status}} /10</p>
     </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['status'],
    methods: {
        countPercent: function() {
          return {
            width: this.status + "0%"
          }
        }
    }
  }
</script>

<style scoped lang="scss">
</style>
