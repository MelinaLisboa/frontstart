//Exemplo 1--------------------------------
// var app = new Vue ({
//     el: '#app',
//     data: {
//         counter: 0
//     },
//     methods: {
//         increase() {
//             this.counter++;
//         },
//         decrease() {
//             if(this.counter === 0) return;
//             this.counter--;
//         },
//         clearcounter() {
//             this.counter = 0;
//         }
//     }
// });

//Exemplo 2 (v-for)
// var app = new Vue ({
//     el: '#app',
//     data: {
//         list: [
//             {id: 1, name: 'Melina'},
//             {id: 2, name: 'Gustavo'},
//             {id: 3, name: 'Luna'},
//             {id: 4, name: 'Alberto'}
//         ],

//         list2 : {
//             name: 'Melina',
//             age: '39',
//             graduation: 'cienca da computacao'
//         }
//     }
// });


//Exemplo 3 v-if
// var app = new Vue ({
//     el: '#app',
//     data: {
//         show: false
//     },
//     methods: {
//         onShowClick() {
//             this.show = !this.show;
//         }
//     }
// });


//Exemplo 4 v-else

var app = new Vue ({
    el: '#app',
    data: {
        isUnderAge: true,
        age: 20,
        list: [
            {name: 'melina', age: '39'},
            {name: 'jordao', age: '16'},
            {name: 'raphael', age: '45'}
        ],
        product: '',
        completeNameProduct: ''
    },
    methods: {
        verify(){
            this.isUnderAge = !this.isUnderAge;
        },
        fillCompleteProductName() {
            this.completeNameProduct = this.product + ' Lisboa';
        }
    },
    // computed => é como se fosse uma variavel e vai sempre retornar algo
    computed: {
        isNewer() {
            return this.age < 18;
        },
        isOld() {
            return this.age > 60;
        },
        adultUsers() {
            return this.list.filter(el => el.age > 18);
        }
    },
    watch: {//observador
        product() {
            console.log('mudou');
            this.fillCompleteProductName();
        }
    }
});