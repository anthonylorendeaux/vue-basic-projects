<template>
    <header>
        <h1> {{title}} </h1>
        <Button />
    </header>
</template>

<script>
import Button from './Button'

    export default {
        name: 'Header',
        props: {
            title: {
                type: String,
                default: "Hello World"
            }
        },
        components: {
            Button
        }
    }    
</script>