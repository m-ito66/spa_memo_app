<template>
  <header>
    <h1>メモアプリ</h1>
    <div id="nav">
      <ul>
        <router-link to="/">
          <li>Home</li>
        </router-link>|
        <router-link to="/new">
          <li>New</li>
        </router-link>
      </ul>
    </div>
  </header>
</template>

<style scoped>
  h1 {
    margin: 20px 0 0 20px;
  }
  ul {
    display: inline-block;
    list-style-type: none;
    margin-top: 0;
  }
  ul li {
    display: inline-block;
    margin: 0 10px;
  }
</style>
