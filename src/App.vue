<script>
export default {
  methods: {
    getRoute() {
      return this.$route.name;
    }
  }
}
</script>

<template>
  <ul class="nav nav-tabs" style="background-color: #e3f2fd; width: 100%;">
    <li class="nav-item">
      <router-link class="nav-link" :class="getRoute()=='champions'?'active':''" to="/">Champions</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="getRoute()=='championsPool'?'active':''" to="champions-pool">Champions pool</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="getRoute()=='teamComp'?'active':''" to="team-comp">Team comp</router-link>
    </li>
  </ul>
  <router-view/>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
