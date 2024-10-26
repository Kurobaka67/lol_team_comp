<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const themeDark = ref(true) 
if(localStorage.getItem('isDark')){
  themeDark.value = localStorage.getItem('isDark')=="true";
}
const getRoute = ()=>{
  return route.name;
}
const changeTheme = ()=>{
  themeDark.value=!themeDark.value;
  localStorage.setItem('isDark', themeDark.value);
}
</script>

<template>
  <div class="d-flex justify-content-between" :class="themeDark?'dark':'light'" style="height: 50px;">
    <ul class="nav nav-tabs menu-nav" style="width: 100%;">
      <li class="nav-item">
        <router-link class="nav-link d-flex justify-content-center align-items-center" :class="getRoute()=='champions'?'active':''" to="/">Champions</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link d-flex justify-content-center align-items-center" :class="getRoute()=='championsPool'?'active':''" to="champions-pool">Champions pool</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link d-flex justify-content-center align-items-center" :class="getRoute()=='teamComp'?'active':''" to="team-comp">Team comp</router-link>
      </li>
    </ul>
    <div class="form-check form-switch menu-nav" style="padding-top: 10px; padding-right: 10px;">
      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" :checked="themeDark" @click="changeTheme()">
      <label class="form-check-label" for="flexSwitchCheckDefault"><font-awesome-icon :icon="themeDark?['fas', 'moon']:['fas', 'sun']"/></label>
    </div>
  </div>
  <div :class="themeDark?'dark':'light'" style="height: 100%;">
    <router-view/>
  </div>
</template>

<style scoped>
.nav-link{
  color: var(--text-menu-color) !important;
  width: 160px;
}

.menu-nav{
  height: 100%;
  color: var(--text-menu-color) !important;
  border-bottom: none;
}
</style>