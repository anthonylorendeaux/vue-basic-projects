<template>
    <button v-on:click="onClick()"> {{text}} </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            text: String,
            color: String
        },
        methods: {
            onClick() {
                console.log('Click')
            }
        }
    }
</script>