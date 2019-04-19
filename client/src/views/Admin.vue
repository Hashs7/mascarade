<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Admin login</span>
      </v-toolbar-title>
    </v-toolbar>
    <AdminLogin />
  </v-app>
</template>

<script>
import AdminLogin from '../components/AdminLogin'

export default {
  name: 'App',
  components: {
    AdminLogin
  }
}
</script>
