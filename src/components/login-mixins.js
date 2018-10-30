export default {
  data() {
    return {
      ispwd: true,
      loginForm: {
        username: '',
        password: ''
      },
      //登陆表单验证规则
      loginFormRules: {
        //用户名的校验规则
        username: [{
            required: true,
            message: '请输入登陆名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 6,
            message: '长度在 3 到 6 个字符',
            trigger: 'blur'
          }
        ],
        password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
      reset() {
          this.$refs.loginFormRef.resetFields()
      },
      //登录的方法
      login() {
        this.$refs.loginFormRef.validate(async val => {
            if(!val) return this.$message.error('请填写完整的登录信息!')
            //发起登录请求
                const {data:res} = await this.$http.post('login',this.loginForm)
                //登陆失败
                if(res.meta.status !== 200) return this.$message.error('登陆失败!')
                this.$message.success('登陆成功!')
                //把登陆成功胡后,服务器颁发的
                sessionStorage.setItem('token',res.data.token)
                //
                this.$router.push('/home')
        })
      }
  }
}
