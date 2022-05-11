<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <section>
            <b-button @click="clickMe">Click Me</b-button>
        </section>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'HomeView',
    components: {
        HelloWorld
    },
    methods: {
        clickMe() {
            this.$buefy.notification.open('Clicked!!');
        }
    }
};
</script>
