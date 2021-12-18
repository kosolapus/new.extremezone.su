<template>
  <div v-if="shown" class="overlay" @click.self="$emit('close')">
    <div class="modal fade overflow-hidden" aria-hidden="true" :class="{ 'show d-block': shown }">
      <div class="modal-dialog w-auto modal-dialog-centered">
        <div class="modal-content position-relative z-depth-2">
          <div
            class="modal-header position-absolute right rounded-0 border-0 py-2 px-3 w-auto end-0"
            @click="$emit('close')"
          >
            <button type="button" class="btn-close fs-6 w-auto" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: {
      shown: {
        type: Boolean,
        default: false,
      },
    },
    data: () => ({
      scrollPos: null,
    }),
    head() {
      const offset = typeof window !== 'undefined' ? window.scrollY : 0
      return {
        bodyAttrs: {
          class: this.shown ? 'modal-open' : '',
          'aria-hidden': true,
          style: `top: -${offset}px`,
        },
      }
    },
    mounted() {
      this.scrollPos = typeof window !== 'undefined' ? window.scrollY : 0
    },
    destroyed() {
      setTimeout(() => {
        window.scroll({
          top: this.scrollPos,
          behavior: 'instant',
        })
      }, 25)
    },
  }
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 100050;
  }
  .modal {
    pointer-events: all;

    &-dialog {
      max-width: 100%;
    }
    &-header {
      cursor: pointer;
      z-index: 2;

      button {
        outline: none;
        pointer-events: all;
      }
    }
    &-content {
      width: fit-content;
      margin: 0 auto;
      pointer-events: none;
      z-index: 2;
    }
  }
</style>
