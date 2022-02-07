<template>
  <div class="container">
      <Header title="Task Tracker"/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Test 1',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Test 2',
        day: 'March 2st at 2:30pm',
        reminder: false,
      },
      {
        id: 3,
        text: 'Test 3',
        day: 'March 3st at 2:30pm',
        reminder: false,
      },
    ]
  }
}
</script>
