import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export default class Service {

    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }
    get(route) {
        return Vue.http.get(this.apiUrl + route);
    }

    post(route, body) {
        return Vue.http.post(this.apiUrl + route, body);
    }

    put(route, body) {
        return Vue.http.put(this.apiUrl + route, body);
    }

    delete(route) {
        return Vue.http.delete(this.apiUrl + route);
    }
};
