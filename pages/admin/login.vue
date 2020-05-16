<template>
  <el-card
    shadow="always"
    :style="{width: '500px'}"
  >
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h2>Enter to admin panel</h2>

      <el-form-item label="Login" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>

      <div class="mb2">
        <el-form-item label="Password" prop="password">
          <el-input v-model.trim="controls.password" type="password" />
        </el-form-item>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Login
        </el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Enter login', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Enter password', trigger: 'blur' },
          { min: 6, message: 'Min length for password is 6 characters', trigger: 'blur' }
        ]
      }
    }
  },

  mounted() {
    // Вызывается тогда, когда DOM дерево готово для работы
    // Вызывается только на клиенте. А Created() вызывается и на сервере и на клиенте
    // Если есть сообщение в Get параметре, то мы покажем его пользователю. А то типо простой Redirect без пояснений
    // выглядит как баг
    const {message} = this.$route.query

    if(message === 'pleaseLogin') {
      this.$message.info('Please login - to see other pages of admin')
    }
  },

  methods: {
    onSubmit() {
        this.$refs.form.validate(async valid => {
            if(valid) {
                this.loading = true

                    try {
                    const formData = {
                        login: this.controls.login,
                        password: this.controls.password
                    }
                    // then we should dispatch this data
                    // Название модуля / названия экшена
                    // debugger 

                    await this.$store.dispatch('auth/login', formData)
                    // Чтобы писать await - функция должна быть асинхронной. - это понятно ) 
                    // И дальше: "функция" начинается здесь "validate(valid => " логично) но если бы я сам делал..
                    // старался бы до this.$refs этот async лепить... ) Такой вот учебный момент. Делюсь "недопониманием" пока своим 
                    this.$router.push('/admin')
                }
                catch(e) {
                    this.loading = false
                }
            }
        })
    }
  }
}
</script>
