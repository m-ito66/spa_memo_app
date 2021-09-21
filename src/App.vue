<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
h1 {
  font-size: 40px;
}
header {
    position: fixed;
}
.index {
  position: fixed;
  top: 120px;
  width: 250px;
}
.form {
  position: fixed;
  top: 140px;
  left: 260px;
}
textarea {
  display: block;
  height: 150px;
  margin-bottom: 5px;
}
button {
  margin-right: 5px;
}
</style>
