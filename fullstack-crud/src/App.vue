
<template>
  <HeaderMenu title="Contacts"/>
  <router-view>
  </router-view>
</template>

<script>
// eslint-disable-next-line vue/multi-word-component-names
import HeaderMenu from './components/HeaderMenu.vue'

export default {
  name: 'App',
  components: {
    HeaderMenu
  }
}
</script>

<style>

</style>