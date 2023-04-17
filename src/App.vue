<script setup>
// @ts-nocheck
import Loadding from "@/components/Loadding.vue";
</script>
<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <transition mode="nested">
        <suspense>
          <template #default>
            <div class="wrapper">
              <nav>
                <RouterLink class="nav_link" to="/">首页</RouterLink>
                <RouterLink class="nav_link" to="/about">About</RouterLink>
                <RouterLink class="nav_link" to="/KeyFrames">KeyFrames</RouterLink>
                <RouterLink class="nav_link" to="/authRouter">AuthRouter</RouterLink>
              </nav>
              <main>
                <component :is="Component"></component>
              </main>
            </div>
          </template>
          <template #fallback>
            <Loadding />
          </template>
        </suspense>
      </transition>
    </template>
  </router-view>
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
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
