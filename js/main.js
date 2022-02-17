const app = Vue.createApp({
    data: () => ({
        km: 0,
        m: 0
    }),
    watch: {
        // 値が変更されたら、走る処理
        km: function (value) {
            this.km = value
            this.m = value * 1000
        },
        m: function (value) {
            this.km = value / 1000
            this.m = value
        }
    }
    })
app.mount('#app')