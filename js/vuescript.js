const myApp = new Vue({
    el: '#root',
    data: {
        tab1: [],
    },
    created() {
        this.fetchTabs();
    },

    methods: {
        fetchTabs() {
            fetch('./assets/tab1.json')
                .then(res => res.json()) //returning a promise To extract the JSON body content from the response
                .then(resJson => {
                    this.tab1 = resJson
                    console.log(resJson);
                })
        }
    }
})