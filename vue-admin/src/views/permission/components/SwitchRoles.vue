<template>
  <div>
    <div style="margin-bottom:15px;">
      {{ $t('role.yourRole') }} {{ roles }}
    </div>
    {{ $t('role.switchRole') }}
    <el-radio-group v-model="switchRoles">
      <el-radio-button label="admin">{{ $t('role.roles.admin') }}</el-radio-button>
      <el-radio-button label="editor">{{ $t('role.roles.editor') }}</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  computed: {
    roles() {
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        console.log(val);
        this.$store.dispatch('user/changeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>
