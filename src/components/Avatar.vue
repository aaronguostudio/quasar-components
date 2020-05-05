<template>
  <div class="flex items-center">
    <q-avatar :color="color" :size="size">
      <img v-if="showAvatar" src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
      <div v-else>{{initials}}</div>
    </q-avatar>
    <div v-if="showName" class="q-ml-sm">{{name}}</div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    color: {
      type: String,
      default: 'grey'
    },
    size: {
      type: String,
      default: '1.6rem'
    },
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    showAvatar: {
      type: Boolean,
      default: false
    },
    showName: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    name () {
      return `${this.firstName} ${this.lastName}`
    },
    initials () {
      return `${this.firstName.charAt(0)}${this.lastName.charAt(0)}`
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>

</style>
