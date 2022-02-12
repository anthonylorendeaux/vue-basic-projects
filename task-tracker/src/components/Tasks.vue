<template>
    <div class="flex flex-col justify-start align-middle overflow-y-auto" style="height:50vh">
        <Task :key="task.id" v-for="task in tasks" @toggle-reminder="$emit('toggle-reminder', task.id)" @delete-task="$emit('delete-task', task.id)" :task="task"/>
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
    },
    emits: ['delete-task', 'toggle-reminder']
}
</script>