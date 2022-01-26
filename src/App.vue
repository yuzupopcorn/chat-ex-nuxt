<template>
  <v-app>
    <v-container>
      <chat
        :adminId="adminId"
        :adminRoute="adminRoute"
        :userId="userId"
        :userName="userName"
        :serverURL="serverURL"
        :recieve="recieve"
        :subscribe="subscribe"
      />
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    adminRoute: '',
    userId: '',
    userName: '',
    adminId: '',
    serverURL: '',
    recieve:'',
    subscribe:'',
    // recieve:'/receive',
    // subscribe:'/send',
  }),
};
</script>
