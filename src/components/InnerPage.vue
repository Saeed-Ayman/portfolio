<template>
  <div class="flex-grow relative bg-gray-900 rounded-md overflow-hidden pb-2">
    <div class="scroll-shadows h-80">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.scroll-shadows {
  --bgRGB: 17, 24, 39;
  --bg: rgb(var(--bgRGB));
  --bgTrans: rgba(var(--bgRGB), 0);

  --shadow: rgba(165, 180, 252, 0.25);

  overflow: auto;

  background:
    /* Shadow Cover TOP */ linear-gradient(
        var(--bg) 30%,
        var(--bgTrans)
      )
      center top,
    /* Shadow Cover BOTTOM */ linear-gradient(var(--bgTrans), var(--bg) 70%)
      center bottom,
    /* Shadow TOP */
      radial-gradient(farthest-side at 50% 0, var(--shadow), rgba(0, 0, 0, 0))
      center top,
    /* Shadow BOTTOM */
      radial-gradient(
        farthest-side at 50% 100%,
        var(--shadow),
        rgba(0, 0, 0, 0)
      )
      center bottom;

  background-repeat: no-repeat;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
}
</style>
