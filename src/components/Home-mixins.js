export default {
    data() {
        return {}
    },
    methods: {
        //点击按钮退出登录
        logout() {
            sessionStorage.removeItem('token')
            this.$router.push('/login')
        }
    }
} 