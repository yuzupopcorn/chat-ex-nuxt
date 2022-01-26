<template>
  <v-app-bar flat app>
    <v-avatar size="36" class="mr-2">
      <v-img :src="avatar" />
    </v-avatar>
    <v-toolbar-title> {{ userName }} </v-toolbar-title>
    <v-spacer/>
    <v-btn icon @click="closeBtn">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AdminToolbar',
  props: {
    avatar: {
      type: String,
      default : '',
    },
    userName: {
      type: String,
      default : '',
    }
  },
  methods: {
    closeBtn() {
      this.$emit("closeBtn")
    }
  }
}
</script>

<style>

</style>