<template>
  <div class="flex items-center justify-center h-100 bg-blue-100 p-24">
    <div
      class="bg-white items-center rounded-2xl border shadow-xl p-10 w-10/12"
    >
      <Header title="Task Tracker" />
      <Tasks :tasks="tasks" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Tasks from "./components/Tasks";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
  },
  data() {
    return {
      tasks: [],
    };
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
        reminder: false,
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
    ];
  },
};
</script>
