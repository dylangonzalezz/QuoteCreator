<template>
  <div class="info__container">
    <p class="info__text">
      Info: <b>Click</b> on a Quote to delete it
    </p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
.info__container {
  background-color: rgb(207, 230, 255);
  border-radius: 10px;
  text-align: center;
  border: solid 1px rgb(120, 178, 255);
  height: 50px;
  padding: 15px;
  display: block;
  position: fixed;
  width: 92%;
  bottom: 0;
  margin-bottom: 20px;
}

.info__text {
  color: rgb(0, 0, 0);
}
</style>
