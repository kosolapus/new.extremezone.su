<template>
  <section class="tech-item" :class="{ inverted: inverted }">
    <div class="row p-4" :class="{ 'flex-row-reverse': inverted }">
      <div v-if="item.img" class="col-5 d-flex flex-column justify-content-center">
        <img class="tech-item__img" :src="item.img" :alt="item.name" />
      </div>
      <div v-if="!item.img" class="d-none d-sm-block col-sm-2"></div>
      <div :class="['d-flex flex-column justify-content-center py-5', `col-sm-${item.img ? 6 : 8}`]">
        <h2 class="text-white">{{ item.name }}</h2>
        <p class="text-white small">{{ item.description }}</p>
      </div>
      <div :class="`d-none d-sm-block col-sm-${item.img ? 1 : 2}`"></div>
    </div>
    <div class="shadow" />
    <div class="shadow bg" />
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'TechItem',
    props: {
      item: {
        type: Object,
        default: () => {},
      },
      inverted: {
        type: Boolean,
        default: false,
      },
    },
  })
</script>

<style lang="scss" scoped>
  .tech-item {
    position: relative;
    overflow: visible;
    transition: all 0.2s ease;
    .shadow {
      transition: all 0.2s ease;
      position: absolute;
      width: 100%;
      height: 100%;
      clip-path: polygon(0 0, 100% 15%, 95% 75%, 10% 96%);
      background-color: black;
      z-index: -1;
      top: 20px;
      right: 20px;

      &.bg {
        background: #{$main-gradient};
        top: 0;
        right: 0;
        left: 0;
      }
    }

    &.inverted {
      .shadow {
        clip-path: polygon(100% 0, 0% 15%, 5% 75%, 90% 96%);
        right: 0;
        left: 20px;
        top: 20px;
        &.bg {
          background: #{$main-gradient};
          top: 0;
          right: 0;
          left: 0;
        }
      }
    }

    &__img {
      transition: all 0.2s ease;
    }

    &:hover {
      .tech-item {
        &__img {
          transform: scale(1.2);
        }
      }
      .shadow {
        right: 15px;
        top: 15px;
        &.bg {
          background-color: #db4a4a;
          top: 0;
          right: 0;
          left: 0;
        }
      }
      &.inverted {
        .shadow {
          right: 15px;
          top: 15px;
          &.bg {
            background-color: #db4a4a;
            top: 0;
            right: 0;
            left: 0;
          }
        }
      }
    }
  }
</style>
