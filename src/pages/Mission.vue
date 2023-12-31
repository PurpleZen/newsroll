<template>
  <div class="article">
    <div class="category">NEWSROLL</div>
    <h1>Our Mission: To Never Give You Up</h1>
    <span>In case you didn't click the <button class="read">Read Article</button> button on that news article you were probably just sent, and are confused about the likely outrageous title of it, this site is a silly hobby project made to Rickroll others. <i>This is *not* an actual news site.</i><br><br>Head to the <router-link to="/">homepage</router-link> to make your own outrageously titled news article, send it to a friend, and see if you can fool them! >:]<br><br></span>
    <a href="https://github.com/PurpleZen/newsroll" target="_blank"><div style="width: fit-content;" class="read">Made with &lt;3 by PurpleZen</div></a>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta'
  export default {
    created() {
      useMeta({
        title: 'Newsroll | Our Misson: To Never Give You Up'
      });
    }
  }
</script>