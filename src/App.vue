<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" title="Task tracker"></Header>
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>

    <router-view></router-view>
    <Footer />
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="task" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
    Footer
  },
  methods: {
    deleteTask(taskId) {
      if (confirm('Are you sure ?')) {
        this.task = this.task.filter((item) => item.id !== taskId);
      }
    },
    toggleReminder(taskId) {
      this.task = this.task.map((item) => item.id === taskId ? {...item, reminder: !item.reminder} : item);
    },
    addTask(newTask) {
      this.task = [...this.task, newTask];
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    }
  },
  data() {
    return {
      task: [],
      showAddTask: false
    };
  },
  created() {
    this.task = [
      {
        id: 1,
        text: "Doctor appointment",
        day: "March 1st at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Meeting at school",
        day: "March 3rd at 1:30pm",
        reminder: true,
      },
      {
        id: 3,
        text: "Fooding shop",
        day: "March 3rd at 11:30am",
        reminder: false,
      },
    ];
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
