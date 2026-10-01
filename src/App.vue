<template>
    <div class="main-wrapper" :class="posWrapperClass">
      <template v-if="shouldShowHeaderAndSidebar">
        <layouts-header></layouts-header>
        <layouts-sidebar v-if="shouldShowSidebar"></layouts-sidebar>
      </template>
      <template v-if="shouldShowPosHeader">
        <pos-header></pos-header>
      </template>

        <router-view />

    </div>
</template>

<script>

export default {
  computed: {
    shouldShowHeaderAndSidebar() {
      const path = this.$route.path
      return !(
        path === "/" ||
        path.includes("/sign-in") ||
        path.includes("/sign-up") ||
        path.includes("/forgot-password") ||
        path.includes("/reset-password") ||
        path.includes("/otp") ||
        path.includes("/pos") ||
        path.includes("/pos-empty")
      )
    },
    shouldShowPosHeader() {
      return this.$route.path.includes("/pos")
    },
    shouldShowSidebar() {
      const path = this.$route.path
      return !(
        path.includes("/add-purchase-order") ||
        path.includes("/edit-purchase-order") ||
        path.includes("/add-purchase-returns") ||
        path.includes("/edit-purchase-returns") ||
        path.includes("/add-sales-return") ||
        path.includes("/edit-sales-return")
      )
    },
    posWrapperClass() {
      const path = this.$route.path
      if (path === "/pos" || path === "/pos-empty") {
        return "pos-wrapper"
      }
      return ""
    },
  },
};
</script>