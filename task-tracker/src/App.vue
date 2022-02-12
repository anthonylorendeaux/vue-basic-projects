<template>
  <div class="flex items-center justify-center h-screen bg-blue-100 p-24">
    <div
      class="bg-white items-center rounded-2xl border shadow-xl p-10 w-10/12"
    >
      <Header
        @toggle-add-task="toggleAddTask"
        title="Task Tracker"
        :showAddTask="showAddTask"
      />
      <router-view :showAddTask="showAddTask"></router-view>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  }
};
</script>
