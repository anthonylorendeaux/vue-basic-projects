const app = Vue.createApp({
    data () {
        return {
            firstName: 'Anthony',
            lastName: 'Lorendeaux',
            email: 'anthony.lorendeaux@icloud.com',
            gender: 'male',
            picture: 'https://image.shutterstock.com/image-photo/closeup-portrait-handsome-smiling-young-260nw-1687157521.jpg',
        }
    },
    methods: {
        async getUser() {
            const response = await fetch('https://randomuser.me/api');
            const { results } = await response.json();

            this.firstName = results[0].name.first;
            this.lastName = results[0].name.last;
            this.email = results[0].email;
            this.gender = results[0].gender;
            this.picture = results[0].picture.large;
        }
    }
})

app.mount('#app')