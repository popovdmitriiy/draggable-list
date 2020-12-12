<template>
  <div
      id="app"
      class="app-container-wrapper"
  >
    <div class="app-container-inner">
      <router-view/>
    </div>
  </div>
</template>

<script>
import '@/assets/scss/index.scss';

export default {
  name: 'App',
};
</script>
