import Transactions from './components/transactions.vue'
import Devices from './components/devices.vue'
import Settings from './components/settings.vue'
import MQTT from './components/mqtt.vue'


export default [
  { path: '/', component: Transactions },
  { path: '/devices', component: Devices },
  { path: '/settings', component: Settings },
  { path: '/mqtt', component: MQTT }
]