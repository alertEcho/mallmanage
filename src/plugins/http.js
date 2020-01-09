import axios from 'axios'

const MyHttpServer = {}

MyHttpServer.install = (Vue) => {
   
   axios.defaults.baseURL = 'http://vue.test/api/v1'

    Vue.prototype.$http = axios

}

export default MyHttpServer