<template>
    <div :key="task.id" v-for="task in tasks" class="flex justify-between align-middle">
        <Task :task="task"/>
    </div>
</template>

<script>
import Task from './Task'

export default {
    name: 'Tasks',
    props: {
        tasks: Array
    },
    components: {
        Task
    }
}
</script>