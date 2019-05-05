<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>ToDo-o-Matic</span>
        <span class="font-weight-light"> Make more todos</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/Lynne-Daniels/todo-o-matic"
        target="_blank"
      >
        <span class="mr-2">See Code</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <Scheduler />
    </v-content>
  </v-app>
</template>

<script>
import Scheduler from './components/Scheduler'

export default {
  name: 'App',
  components: {
    Scheduler,
  },
  data() {
    return {
      //
    }
  },
}
</script>
