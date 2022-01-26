import chat from '../lib/Chat.vue'
import chatAdmin from '../lib/ChatAdmin.vue'

const components = [
  chat,
  chatAdmin
]

const vChat = {
  install(Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })
  }
}

export default vChat