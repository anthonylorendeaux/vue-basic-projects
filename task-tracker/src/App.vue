<template>
  <div class="flex items-center justify-center h-screen bg-blue-100 p-24">
    <div
      class="bg-white items-center rounded-2xl border shadow-xl p-10 w-10/12"
    >
      <Header title="Task Tracker" />
      <AddTask />
      <Tasks class="mt-4" @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    deleteTask(id) {
      if (confirm("Are you sure ?")) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) => task.id == id ? {...task, reminder: !task.reminder} : task);
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Test 1",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Test 2",
        day: "March 2st at 2:30pm",
        reminder: false,
      },
      {
        id: 3,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: true,
      },
      {
        id: 4,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 5,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 6,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 7,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 8,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 9,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 10,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 11,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 12,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
      {
        id: 13,
        text: "Test 3",
        day: "March 3st at 2:30pm",
        reminder: false,
      },
    ];
  },
};
</script>
