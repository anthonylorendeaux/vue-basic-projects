<template>
    <header class="flex justify-between">
        <h1 class="text-gray-800 text-3xl font-semibold"> {{title}} </h1>
        <Button v-show="homePage" @toggle-add-task="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add task'" :buttonStyle="showAddTask ? 'close' : 'add'"/>
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
            },
            showAddTask: Boolean
        },
        components: {
            Button
        },
        computed: {
            homePage() {
                if(this.$route.path === '/') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }    
</script>