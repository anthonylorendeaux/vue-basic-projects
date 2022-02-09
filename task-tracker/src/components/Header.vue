<template>
    <header class="flex justify-between">
        <h1 class="text-gray-800 text-3xl font-semibold"> {{title}} </h1>
        <Button text="Add Task" buttonStyle="add"/>
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