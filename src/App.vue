<template>
  <div id="app" ref="app" class="app">
    <div class="main-wrap">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
  },
  methods:{
  },
  components:{
  }
}
</script>

<style scoped>
.app{
  width: 100%;
}
</style>
