<template>
    <form @submit="onSubmit" class="mt-10 flex flex-col justify-center align-middle">
        <label class="text-gray-700 text-lg font-semibold">Task</label>
        <input class="border-2 border-gray-500 rounded-md p-2" type="text" v-model="text" name="text" placeholder="Add Task" />
        <label class="mt-4 text-gray-700 text-lg font-semibold">Day & Time</label>
        <input
            type="text"
            v-model="day"
            name="day"
            placeholder="Add Day & Time"
            class="border-2 border-gray-500 rounded-md p-2"
        />
        <div class="flex justify-between mt-4">
            <label class="text-gray-700 text-md font-semibold">Set Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder" />
        </div>
        <input class="rounded-xl p-1 mt-4 text-md font-semibold text-white bg-black hover:bg-gray-800" type="submit" value="Save Task"/>
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