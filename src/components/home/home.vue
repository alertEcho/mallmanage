<template>
<el-container class="container">
    <el-header class="header">
        <el-row>
            <el-col :span="4">
                <div class="grid-content bg-purple">
                    <img src="../../assets/logo.png" alt="" style="width:100%;height:60px;text-align:center;margin-left:-20px;">
                </div>
            </el-col>
            <el-col :span="18">
                <div class="grid-content bg-purple-light" style="text-align:center;line-height:60px;">
                    后台管理系统
                </div>
            </el-col>
            <el-col :span="2">
                <div class="grid-content bg-purple">
                    <a href="javascript:" class="logout" @click.prevent="handleSignOut()">退出</a>
                </div>
            </el-col>
        </el-row>
    </el-header>
    <el-container>
        <el-aside width="200px" class="aside">
            <el-menu :unique-opened=false>
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">用户管理</span>
                    </template>

                    <el-menu-item index="1-1">
                        <i class="el-icon-location"></i>
                        <span>用户列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 2 -->
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">权限管理</span>
                    </template>

                    <el-menu-item index="2-1">
                        <i class="el-icon-location"></i>
                        <span>角色列表</span>
                    </el-menu-item>

                    <el-menu-item index="2-2">
                        <i class="el-icon-location"></i>
                        <span>权限列表</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 3 -->
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">商品管理</span>
                    </template>

                    <el-menu-item index="3-1">
                        <i class="el-icon-location"></i>
                        <span>商品列表</span>
                    </el-menu-item>

                    <el-menu-item index="3-2">
                        <i class="el-icon-location"></i>
                        <span>分类参数</span>
                    </el-menu-item>

                    <el-menu-item index="3-3">
                        <i class="el-icon-location"></i>
                        <span>商品分类</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 4 -->
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">订单管理</span>
                    </template>

                    <el-menu-item index="4-1">
                        <i class="el-icon-location"></i>
                        <span>订单列表</span>
                    </el-menu-item>
                </el-submenu>

                <!-- 5 -->
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">数据统计</span>
                    </template>

                    <el-menu-item index="5-1">
                        <i class="el-icon-location"></i>
                        <span>数据报表 </span>
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main class="main">Main</el-main>
    </el-container>
</el-container>
</template>

<script>
export default {
    beforeCreate() {
        const token = localStorage.getItem('token')
        if (!token) {
            this.$router.push({
                name: 'login'
            })
        }
    },
    methods: {
        handleSignOut(){
            localStorage.clear()
            this.$message.success('退出成功！')
            this.$router.push({name:'login'})
        }
    }

}
</script>

<style>
.container {
    height: 100%;
}

.header {
    background-color: #b3c0d1
}

.aside {
    background-color: #d3dec6
}

.main {
    background-color: #e9eef3
}

.middle {
    text-align: center
}

.logout {
    line-height: 60px;
    text-decoration: none;
}
</style>
