<template>
  <metainfo>
    <template v-slot:title="{ content }"></template>
  </metainfo>
  <div class="navbar">
    <div class="title">
      <router-link to="/">
        <div class="name">Newsroll</div>
      </router-link>
      <div class="slogan">Real News<br>for Real People</div>
    </div>
    <div>
      <router-link class="navbutton" to="/breaking-news/Rick-Astley-is-set-to-become-next-U%2ES%2E-President;-Here's-what-it-means-for-you:" exact-path>Breaking News</router-link>
      <router-link class="navbutton" to="/world/German-grandmas-are-rejoicing-after-new-%22Cheese-Law%22">World</router-link>
      <router-link class="navbutton" to="/mission">Our Mission</router-link>
    </div>
  </div>
  <div class="page">
    <router-view />
  </div>
</template>

<style>
  :root {
    --bg: #f9f9f9;
    --acc: white;
    --txt: black;
    --purpbg: #d2b4de;
    --purptxt: #6c3483;
  }

  .home-move,
  .home-enter-active {
    transition: all 0.5s ease;
  }
  .home-leave-active {
    transition: all 0.1s ease;
  }
  .home-enter-from,
  .home-leave-to {
    opacity: 0;
    transform: scale(0);
  }
  
  html, body {
    background-color: var(--bg);
    color: var(--txt);
    margin: 0;
    font-family: 'Manrope';
    overflow: auto;
    display: grid;
    height: 100vh;
    width: 100vw;
  }

  button, .button {
    background-color: var(--purpbg);
    border: none;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
  }

  .material-symbols-outlined {
    color: var(--txt);
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }

  .home {
    width: 95vw;
    display: flex;
    justify-content: center;
  }

  .home .article {
    height: fit-content;
    max-width: 80%;
    margin: 10px;
  }

  .link {
    color: var(--purptxt);
    cursor: pointer;
  }

  .copy {
    color: var(--txt);
    font-size: small;
    outline: 2px solid var(--txt);
    border-radius: 5px;
    margin-right: 5px;
    padding: 2px 5px;
    opacity: 20%;
  }

  .page {
    place-content: center;
    display: grid;
    height: fit-content;
  }

  .navbar {
    height: fit-content;
    background-color: var(--acc);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    display: flex;
    align-items: center;
  }

  .name {
    color: var(--txt);
    font-family: 'DM Serif Display';
    font-size: xxx-large;
    font-weight: bold;
    background-color: var(--purpbg);
    padding: 0 5px 0 30px;;
    margin-right: 5px;
  }

  .slogan {
    font-size: small;
  }

  .navbutton {
    margin: 10px;
  }

  .category {
    background-color: var(--purpbg);
    color: var(--purptxt);
    font-weight: bold;
    width: fit-content;
    padding: 3px 5px;
  }

  .article {
    background-color: var(--acc);
    display: grid;
    padding: 50px;
    border-radius: 30px;
    box-shadow: 0px 0px 30px -5px #0003;
    width: 50vw;
  }

  .content {
    display: flex;
    justify-content: center;
  }

  video {
    border-radius: 10px;
    width: 70%;
  }

  .read {
    background-color: var(--purpbg);
    color: var(--txt);
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 10px;
  }

  a {
    color: var(--purptxt);
    text-decoration: initial;
    display: initial;
  }

  textarea {
    background-color: var(--bg);
    color: var(--txt);
    border: none;
    resize: none;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
    box-shadow: 0px 0px 10px #0003;
    width: 100%;
    height: fit-content;
  }

  textarea:focus {
    outline: 2px solid var(--purptxt) !important;
  }

  @media only screen and (max-width: 800px) {
    .navbar {
      display: grid;
      justify-items: center;
      justify-content: center;
    }
    .title {
      margin-bottom: 10px;
    }
    .name {
      font-size: xx-large;
    }
    .home {
      display: grid;
    }
    textarea {
      width: auto;
    }
    .article {
      padding: 30px;
      width: 70vw;
    }
    .copy {
      display: block;
      width: fit-content;
    }
  }
</style>