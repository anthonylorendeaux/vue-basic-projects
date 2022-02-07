<template>
    <header>
        <h1> {{title}} </h1>
        <Button text="Add Task" color="blue"/>
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