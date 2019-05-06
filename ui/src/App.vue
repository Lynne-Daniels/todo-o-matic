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
      <Scheduler :handleSubmit="handleSubmit" />
      <DemoApp v-bind:addedCalendarEvents="addedCalendarEvents" />
    </v-content>
  </v-app>
</template>

<script>
import Scheduler from './components/Scheduler'
import DemoApp from './components/DemoApp'

export default {
  name: 'App',
  components: {
    Scheduler,
    DemoApp,
  },
  data() {
    return {
      addedCalendarEvents: [],
    }
  },
  methods: {
    calcDate(offsetInDays) {
      const nowInMS = Date.now()
      const offsetInMS = offsetInDays * 1000 * 60 * 60 * 24
      console.log(nowInMS, offsetInMS)
      return new Date(nowInMS + offsetInMS)
    },
    calenderizeFormInput(formData) {
      console.log(this.calcDate(formData.oneTimeDD))
      /*
      TODO Figure out why when adding items betewen 11 and midnight
      items were showing as taking 2 days(double length bars in the calendar)
      This happened to all the form generated events, but the hard coded
      recurring events were ok.  
      */
      return {
        title: formData.description,
        start: this.calcDate(formData.oneTimeDD), // covers 2 days idk why
        // start: '2019-05-08T10:30', // shows as 1 day -- good
        // start: 'Mon May 06 2019 10:56:33 GMT-0400', // no worky
        // end: this.calcDate(formData.oneTimeDD + 1),
        duration: '01:00',
      }
    },
    handleSubmit(formData) {
      console.log('rcvd: ', formData)
      const calItem = this.calenderizeFormInput(formData)
      this.addedCalendarEvents = [...this.addedCalendarEvents, calItem]
    },
  },
}
</script>
