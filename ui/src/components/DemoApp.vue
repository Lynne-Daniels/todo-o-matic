<template>
  <v-container class="demo-app">
    <v-layout>
      <v-flex xs12 md4>
        <div class="demo-app-top">
          <v-btn @click="toggleWeekends">toggle weekends</v-btn>
          <v-btn @click="gotoPast">go to a date in the past</v-btn>
          (also, click a date/time to add an event)
        </div>
      </v-flex>
    </v-layout>
    <FullCalendar
      class="demo-app-calendar"
      ref="fullCalendar"
      defaultView="dayGridMonth"
      :header="{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      }"
      :plugins="calendarPlugins"
      :weekends="calendarWeekends"
      :events="calendarEvents"
      @dateClick="handleDateClick"
    />
  </v-container>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import rrulePlugin from '@fullcalendar/rrule'
export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  props: {
    addedCalendarEvents: {
      type: Array,
    },
  },
  data: function() {
    return {
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        rrulePlugin,
        timeGridPlugin,
        interactionPlugin, // needed for dateClick
      ],
      calendarWeekends: true,
      initialCalendarEvents: [
        // initial event data
        { title: 'Event Now', start: new Date() },
        {
          // standard property
          title: 'my recurring event',

          // rrule:
          //   'DTSTART:20120201T103000Z\nRRULE:FREQ=WEEKLY;INTERVAL=5;UNTIL=20120601;BYDAY=MO,FR',
          // ...or, an object...
          rrule: {
            freq: 'weekly',
            interval: 1,
            byweekday: ['fr'],
            dtstart: '2019-05-08T10:30:00',
            until: '2019-06-01',
          },

          // for specifying the end time of each instance
          duration: '02:00',
        },
      ],
    }
  },
  computed: {
    calendarEvents: function() {
      console.log('this?', [
        ...this.initialCalendarEvents,
        ...this.addedCalendarEvents,
      ])
      return [...this.initialCalendarEvents, ...this.addedCalendarEvents]
    },
  },
  methods: {
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends // update a property
    },
    gotoPast() {
      let calendarApi = this.$refs.fullCalendar.getApi() // from the ref="..."
      calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
    },
    handleDateClick(arg) {
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.initialCalendarEvents.push({
          // add new event data
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay,
        })
      }
    },
  },
}
</script>

<style lang="css">

@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-top {
  margin: 0 0 3em;
}
.demo-app-calendar {
  margin: 0 auto;
  max-width: 900px;
}
</style>
