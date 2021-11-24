const welcome = {
    data() {
        return {
            firstNumber: null,
            secondNumber: null,
            result: 0
        }
    },
    methods: {
        addition() {
            this.result = parseInt(this.firstNumber) + parseInt(this.secondNumber)
        },
        clearResult() {
            this.result = null
        }
    }
}


Vue.createApp(welcome).mount('#app')