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
    mapDaysOfWeek(days) {
      const mapOfDays = {
        0: 'su',
        1: 'mo',
        2: 'tu',
        3: 'we',
        4: 'th',
        5: 'fr',
        6: 'sa',
      }
      // TODO handle null values for preferred day and begin
      console.log('MAPPPING', days, days.map(day => {
        return mapOfDays[day]
      }))
      return days.map(day => {
        return mapOfDays[day]
      })
    },
    calcDate(offsetInDays) {
      const nowInMS = Date.now()
      const offsetInMS = offsetInDays * 1000 * 60 * 60 * 24
      console.log(nowInMS, offsetInMS)
      return new Date(nowInMS + offsetInMS)
    },
    calenderizeFormInput(formData) {
      console.log(this.calcDate(formData.oneTimeDD))
      if (formData.isRepeating === false) {
        return [
          {
            title: formData.description,
            start: this.calcDate(formData.oneTimeDD),
            duration: '00:01',
          },
        ]
      }
      // TODO daysOfWeek throws error
      //Error in callback for watcher "fullCalendarOptions": "Error: Invalid options: daysOfWeek"
      if (formData.isRepeating === true) {
        // handle repeat every weekday
        let byWeekDay = [formData.preferredDay]
        if (formData.repeatInterval === 0) {
          formData.repeatInterval = 1
          byWeekDay = [1, 2, 3, 4, 5]
        }
        return [
          {
            title: formData.description,
            duration: '00:01',
            rrule: {
              freq: 'weekly',
              interval: formData.repeatInterval,
              byweekday: this.mapDaysOfWeek(byWeekDay),
              dtstart: this.calcDate(formData.beginRepeating),
              until: this.calcDate(777), // project just 2 - 3 years from now
            },
          },
        ]
      }
    },
    handleSubmit(formData) {
      console.log('rcvd: ', formData)
      const calItems = this.calenderizeFormInput(formData)
      this.addedCalendarEvents = [...this.addedCalendarEvents, ...calItems]
    },
  },
}
</script>
