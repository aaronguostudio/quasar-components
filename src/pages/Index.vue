<template>
  <q-page class="q-pa-md">
    <div>
      <Avatar
        firstName="Aaron"
        lastName="Guo"
        showName
        color="primary"
        initialColor="white"
      />
    </div>
  </q-page>
</template>

<script>
import Avatar from '../components/Avatar'
export default {
  name: 'PageIndex',
  components: {
    Avatar
  }
}
</script>
