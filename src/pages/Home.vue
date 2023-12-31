<template>
  <div class="home">
    <TransitionGroup name="home">
    <div class="article">
      <div class="category">NEWSROLL</div>
      <span><h4>Rickroll your friends by creating a ridiculous news article that'll be sure to trick them into clicking that <button class="read">Read Article</button> button</h4>Want to see some examples? Click "Breaking News" or "World" in the navbar!<br><br></span>
      <textarea @keyup="getUrl()" placeholder="Write the category your article is under. (i.e: 'Politics')" v-model="category"></textarea>
      <textarea @keyup="getUrl()" placeholder="Write the title describing the article. (i.e: 'Is Biden secretly a catboy?')" v-model="post"></textarea>
      <div @mouseover="this.hover = true" @mouseleave="this.hover = false" @click="copy()" class="link" v-if="category || post"><span class="copy" v-if="hover == true">Copy Link</span><span class="copy" v-if="hover == 'copy'">Copied!</span>https://{{ this.url }}/{{ this.categoryUrl }}/{{ this.postUrl }}</div>
    </div>
    
    <div v-if="category || post" class="article">
      <sup>PREVIEW</sup>
      <div v-html="this.category.toUpperCase()" class="category"></div>
      <h1 v-html="this.post"></h1>
      <div class="content">
        <video style="display:none" controls="" src="https://assets.scratch.mit.edu/f109b637e777bc2bd371ae178c06ecb8.mp4"></video>
        <div @click=play() class="read" id="read">Read Article</div>
      </div>
    </div>
    </TransitionGroup>
  </div>
</template>

<script>
  import { useMeta } from 'vue-meta'
  import replace from "@/data/charReplace.json";
  export default {
    data() {
      return {
        url: null,
        hover: false,
        category: "",
        post: "",
        categoryUrl: "",
        postUrl: ""
      }
    },

    created() {
      this.url = document.location.host
      useMeta({
        title: 'Newsroll | Home'
      });
    },
    
    methods: {
      getUrl() {
        this.categoryUrl = this.category
        for (var i = 0; i < this.categoryUrl.length; i++) {
          var char = this.categoryUrl[i]
          if (replace[char]) {
            this.categoryUrl = this.categoryUrl.replace(char, replace[char]);
          }
        }
        this.postUrl = this.post
        for (var i = 0; i < this.postUrl.length; i++) {
          var char = this.postUrl[i]
          if (replace[char]) {
            this.postUrl = this.postUrl.replace(char, replace[char]);
          }
        }
      },

      copy() {
         navigator.clipboard.writeText("https://" + this.url + "/" + this.categoryUrl + "/" + this.postUrl);
        this.hover = "copy"
      },
      
      play() {
        document.getElementsByTagName("video")[0].style.setProperty("display", "initial");
        document.getElementsByTagName("video")[0].autoplay = "true";
        document.getElementById("read").style.display = 'none'
      }
    }
  }
</script>