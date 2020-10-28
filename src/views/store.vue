<template>
  <div>
    <a-input v-model="stateValue"/>
    <!-- <p>{{ inputValue }} -> lastLetter is {{ inputValueLastLetter }}</p> -->
    <!-- <a-show :content="inputValue"/> -->
    <p>{{ stateValue }}</p>
    <p>{{appName}} / {{ appNameWithVersion }}</p>
    <!-- <p>{{userName}} firstLetter: {{ firstLetter }}</p> -->
    <button @click="handleChangeAppName">修改appName</button>
    <p>{{ appVersion }}</p>
    <button @click="changeUserName">修改用户名</button>
    {{ userName }}
  </div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// import { createNamespacedHelpers } from 'vuex'
// const { mapGetters, mapState } = createNamespacedHelpers('user')
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      // inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME',
      'SET_APP_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
   handleInput (val) {
    this.inputValue = val
   },
   handleChangeAppName () {
    // this.SET_APP_NAME({appName: 'newAppName'})
    this.updateAppName()
   },
   changeUserName () {
     this.SET_USER_NAME('vue-cource')
   },
      handleStateValueChange (val) {
      this.SET_STATE_VALUE(val)
    }
  },
  computed: {
    ...mapState({
      appName: state => state.appName,
      appVersion: state => state.appVersion,
      userName: state => state.user.userName
    }),
    stateValue: {
      get () {
        return this.$store.state.stateValue
      },
      set (value) {
        this.SET_STATE_VALUE(value)
      }
    },
    ...mapGetters([
      'appNameWithVersion'
    ]),
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    }
  }
}
</script>