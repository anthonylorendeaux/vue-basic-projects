<template>
  <div v-if="showAddTask"><AddTask @add-task="addTask" /></div>
  <Tasks
    class="mt-4"
    @toggle-reminder="toggleReminder"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";

export default {
    name: 'Home',
    props: {
        showAddTask: Boolean,
    },
  components: {
    AddTask,
    Tasks,
  },
  data() {
    return {
        tasks: [],
    }
  },
  methods: {
    async deleteTask(id) {
      if (confirm("Are you sure ?")) {
        const response = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });

        response.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert("Error deleting the  task !");
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id);
      const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const response = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      const data = await response.json();

      this.tasks = this.tasks.map((task) =>
        task.id == id ? { ...task, reminder: data.reminder } : task
      );
    },
    async addTask(task) {
      const response = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();

      this.tasks = [...this.tasks, data];
    },
    async fetchTasks() {
      const response = await fetch("api/tasks");

      const data = await response.json();

      return data;
    },
    async fetchTask(id) {
      const response = await fetch(`api/tasks/${id}`);

      const data = await response.json();

      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
};
</script>
