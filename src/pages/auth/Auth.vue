<template>
  <q-page class="flex flex-center auth-bg">
    <q-card class="auth">
      <q-tabs
        v-model="mode"
        class="text-primary"
      >
        <q-tab name="signin" label="登录" />
        <q-tab name="signup" label="注册" />
      </q-tabs>
       <q-separator />
      <q-tab-panels v-model="mode" animated>
        <q-tab-panel name="signin">
          <q-input v-model="text" label="用户名 / 邮箱 / 手机号" />
          <q-input v-model="text" label="密码" />
          <div class="flex flex-center">
            <q-btn class="btn-md q-mt-xl" color="primary" label="登录" unelevated />
          </div>
        </q-tab-panel>

        <q-tab-panel name="signup">
          <q-input v-model="text" label="用户名 / 邮箱 / 手机号" />
          <q-input v-model="text" label="密码" />
          <q-input v-model="text" label="确认密码" />
          <div class="flex flex-center">
            <q-btn class="btn-md q-mt-md" color="primary" label="注册" />
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script lang="ts">
const defaultMode = 'signin'
export default {
  name: 'Auth',
  data () {
    return {
      mode: defaultMode
    }
  }
}
</script>

<style lang="sass">
.auth-bg
  background: url('/statics/auth/auth-bg.jpg') center center
  background-size: cover
.auth
  width: 100%
  max-width: 26rem
  height: 20rem
</style>
