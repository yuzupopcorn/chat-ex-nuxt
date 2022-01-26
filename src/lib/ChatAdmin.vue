<template>
  <v-container class="fill-height pa-0">
    <chat-list
      :rooms="rooms"
    />
    <chat-contents>
      <template v-slot:appBar>
        <admin-toolbar
          :avatar="avatar"
          :userName="userName"
          @closeBtn="closeBtn()"
        />
      </template>
    </chat-contents>
  </v-container>
</template>

<script>
import ChatContents from './messages/ChatContents.vue'
import AdminToolbar from './admin/AdminToolbar.vue'
import ChatList from './admin/ChatList.vue'

export default {
  name: 'ChatAdmin',
  props: {
    avatar: {
      type: String,
      default: '',
    },
    userName: {
      type: String,
      default: '',
    },
    rooms: {
      type: Array,
    }
  },
  data: () => ({
  }),
  components: { ChatContents, AdminToolbar, ChatList },
  methods: {
    closeBtn() {
      // $router.go(-1)
    }
  }
}
</script>

<style>

</style>