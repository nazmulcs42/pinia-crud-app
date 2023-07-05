<template>
  <div class="container bg-secondary text-white p-3 h-100">
    <Header></Header>
    <TheAlert :alert="alert"></TheAlert>
    <Todos></Todos>
    <CreateTodo></CreateTodo>

  </div>
</template>

<script>
  import Header from "./components/layouts/Header.vue"
  import TheAlert from "./components/common/TheAlert.vue"
  import Todos from "./components/Todos.vue"
  import CreateTodo from "./components/CreateTodo.vue"

  import { useCommonStore } from "./stores/common";

  //  const { alert } = useCommonStore();

  export default {
    setup () {
      return {
        alert: {
          status: "warning",
          message: "Please add a valid task name with current status"
        }
      }
    },
    components: {
      Header,
      TheAlert,
      Todos,
      CreateTodo
    }

  }
</script>

<style scoped>

</style>