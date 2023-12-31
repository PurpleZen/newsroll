<template>
  <div class="article">
    <div class="category">{{ this.$route.params.category.toUpperCase().replaceAll('-', ' ') }}</div>
    <h1>{{ this.$route.params.name.charAt(0).toUpperCase() + this.$route.params.name.slice(1).replaceAll('-', ' ') }}</h1>
    <div class="content">
      <video style="display:none" controls="" src="https://assets.scratch.mit.edu/f109b637e777bc2bd371ae178c06ecb8.mp4"></video>
      <div @click=play() class="read" id="read">Read Article</div>
    </div>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta'
  
  export default {
    created() {
      useMeta({
        title: 'Newsroll | ' + this.$route.params.category.toUpperCase().replaceAll('-', ' ') + ": " + this.$route.params.name.charAt(0).toUpperCase() + this.$route.params.name.slice(1).replaceAll('-', ' ')
      });

      this.$watch(
        () => this.$route.params,
        () => {
          if (this.$route.params.category && this.$route.params.name) {
            document.title = 'Newsroll | ' + this.$route.params.category.toUpperCase().replaceAll('-', ' ') + ": " + this.$route.params.name.charAt(0).toUpperCase() + this.$route.params.name.slice(1).replaceAll('-', ' ')
          }
        },
        { immediate: true }
      )
    },


    methods: {
      play() {
        document.getElementsByTagName("video")[0].style.setProperty("display", "initial");
        document.getElementsByTagName("video")[0].autoplay = "true";
        document.getElementById("read").style.display = 'none'
      }
    }
  }
</script>