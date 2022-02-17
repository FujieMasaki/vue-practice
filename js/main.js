const app = Vue.createApp({
    data: () => ({
        
    }),
    // computed: {
    //     reversedMessage: function () {
    //         return this.message.split('').reverse().join('')
    //     }
    // },
    // methods: {
    //     reversedMessageMethod: function () {
    //         return this.message.split('').reverse().join('')
    //     }
    // }
    // computed: {
    //     taxIncludedPrice: {
    //         get: function () {
    //             return this.basePrice * 1.1
    //         },
    //         set: function (value) {
    //             this.basePrice = value / 1.1
    //         }
    //     }
    // }

    computed: {
        computedNumber: function() {
            return Math.random()
        }
    },
    methods: {
        methodsNumber: function () {
            return Math.random()
        }
    }
    })
app.mount('#app')