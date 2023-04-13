<template>
  <div class="wrapper">
    <nav>
      <RouterLink class="nav_link" to="/">首页</RouterLink>
      <RouterLink class="nav_link" to="/about">About</RouterLink>
      <RouterLink class="nav_link" to="/KeyFrames">KeyFrames</RouterLink>
    </nav>
    <main><RouterView /></main>
  </div>
</template>

<style scoped>
.nav_link {
  margin-right: 10px;
  color: #108ee9;
  text-decoration: none;
}
nav {
  box-sizing: border-box;
  padding-left: 5px;
}
main {
  box-sizing: border-box;
  padding: 5px;
}
</style>
