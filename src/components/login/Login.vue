<template>
<div class="login-wrap">
    <el-form label-position="top" label-width="80px" :model="formdata" class="login-form">
        <h2>登录</h2>
        <el-form-item label="姓名">
            <el-input v-model="formdata.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="formdata.password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" class="login-btn" @click.prevent="handleLogin()">登录</el-button>
    </el-form>

</div>
</template>

<script>
export default {
    data() {
        return {
            formdata: {
                name: '',
                password: '',
            }
        };
    },
    methods: {
        handleLogin() {
            this.$http.post('login', this.formdata).then(res => {
                // eslint-disable-next-line no-console
                const {code,message} = res.data
                // eslint-disable-next-line no-console

                
                if(code === 200) {
                    this.$message.success('登录成功！');
                }else{
                    this.$message.error(message)
                } 
            })
        }
    }
}
</script>

<style scoped>
.pri {
    background-color: blue;
}

.login-wrap {
    height: 100%;
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-wrap .login-form {
    width: 400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 30px;
}

.login-wrap .login-btn {
    width: 100%;
}
</style>>
