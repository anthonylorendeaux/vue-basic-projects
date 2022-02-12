<template>
    <form>
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
        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>
<script>
    export default {
        Name: "AddTask",
    }
</script>