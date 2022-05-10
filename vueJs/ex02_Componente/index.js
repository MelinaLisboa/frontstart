Vue.component('user-profile', {
    props: {
        name: {
            type: String,
            default: 'Melina'
        },
        age: Number
    },
    template: '<span>{{name}} - {{age}}</span>'
})

var app = new Vue({
    el: '#app',
    data: {
        name: 'Carlos',
        age: 30
    }
});