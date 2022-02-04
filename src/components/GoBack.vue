<template>
  <div class="go_back">
    <button class="btn" @click="$router.back()">go back</button>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/scss/style.scss';

.go_back {
  margin: 4rem 0 12rem 0;
  text-align: right;

  button {
    color: #000;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      right: 0;
      height: 1px;
      width: 100%;
      background-color: #000;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: -4px;
      right: 0;
      height: 2px;
      width: 100%;
      z-index: 99;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.8s ease;
    }

    &:hover {
      &::before {
        transform-origin: left;
        transform: scaleX(1);
        left: 0;
        background-color: #fff;
      }
    }
  }
}
</style>
