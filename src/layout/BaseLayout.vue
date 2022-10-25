<template>
  <header>
    <slot name="header"></slot>
  </header>
  <div class="main-content">
    <slot name="sidebar"></slot>
    <main>
      <slot name="main"></slot>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>