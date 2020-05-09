<template>
  <q-list class="drawer-menus">
    <q-item
      v-for="menu in menus"
      :class="itemClass"
      :key="menu.label"
      :to="menu.path"
      exact
      clickable
      v-ripple
    >
      <q-item-section class="flex flex-center" avatar>
        <q-icon :size="iconSize" :name="menu.icon" />
      </q-item-section>
      <q-item-section>
        {{ menu.label }}
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script lang="ts">
export default {
  name: 'SidebarMenus' as string,
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    iconSize: {
      type: String,
      default: '1.3rem'
    },
    itemClass: {
      type: String,
      default: ''
    }
  }
}
</script>
