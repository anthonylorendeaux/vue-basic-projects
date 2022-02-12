<template>
    <form @submit="onSubmit">
        <label>Task</label>
        <input type="text" v-model="text" name="text" placeholder="Add Task" />
        <label>Day & Time</label>
        <input
            type="text"
            v-model="day"
            name="day"
            placeholder="Add Day & Time"
        />
        <label>Set Reminder</label>
        <input type="checkbox" v-model="reminder" name="reminder" />
        <input type="submit" value="Save Task"/>
    </form>
</template>

<script>
    export default {
        name: "AddTask",
        data() {
            return {
                text: '',
                day: '',
                reminder: false
            }
        },
        methods: {
            onSubmit(e) {
                e.preventDefault();

                if(!this.text) {
                    alert('Please add a task');
                    return
                }

                const newTask = {
                    id: Math.floor(Math.random() * 10000),
                    text: this.text,
                    day: this.day,
                    reminder: this.reminder
                }

                this.text = '';
                this.day = '';
                this.reminder = false;

                this.$emit('add-task',newTask);
            }
        }
    }
</script>