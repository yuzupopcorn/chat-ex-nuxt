<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-text-field 
      class="pa-3" 
      solo dense 
      clearable 
      hide-details
      v-model="query"
      prepend-inner-icon="mdi-magnify"
    >
    </v-text-field>
    <v-list three-line v-for="(room, index) in rooms" :key="index">
      <v-list-item-title class="pl-4 pb-4">{{ room.category }}</v-list-item-title>
      <v-list-item 
        link v-for="user in room.users" :key="user.userId" 
        @click="clickItem(user)" 
        v-show="user.userId.includes(query)"
      >
        <v-list-item-avatar>
          <v-img :src="user.avatar"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title> {{ user.userId }} </v-list-item-title>
          <v-list-item-subtitle> {{ user.currentMessage }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider
        :inset="room.inset"
      ></v-divider>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'ChatList',
  props: {
    rooms: {
      type: Array,
    }
  },
  data: () => ({
    drawer: true,
    query: '',
  }),
  methods: {
    clickItem(user) {
      this.$emit('click-item', user)
      // this.setRoomInfo(user)
    }
  }
}
</script>

<style>

</style>