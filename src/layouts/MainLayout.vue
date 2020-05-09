<template>
  <q-layout view="hHh lpR fFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          Quasar Components
        </q-toolbar-title>
        <div>Version v1</div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-1"
      show-if-above
      bordered
      :width="200"
    >
      <SidebarMenus :menus="menus" />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import SidebarMenus from '../components/sidebar/SidebarMenus'
import menus from '../config/menus'
export default {
  name: 'MainLayout',
  props: {
    //
  },
  components: {
    SidebarMenus
  },
  data () {
    return {
      leftDrawerOpen: false,
      menus
    }
  }
}
</script>
