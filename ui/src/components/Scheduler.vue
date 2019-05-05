<template>
  <v-form onsubmit="submit">
    <v-container>
      <v-layout>
        <v-flex xs12 md4>
          <v-textarea
            outline
            v-model="description"
            :rules="descriptionRules"
            :counter="255"
            label="Description"
            required
          ></v-textarea>
          <v-radio-group v-model="isRepeating">
            <v-radio :key="0" :label="`One-time`" :value="false"></v-radio>
            <v-radio :key="1" :label="`Repeating`" :value="true"></v-radio>
          </v-radio-group>
        </v-flex>
        <v-flex xs12 md4>
          <v-select
            v-model="firstDDinDaysFromStart"
            :items="optionsFirstDDinDaysFromStart"
            label="Begin"
            outline
          ></v-select>
          <v-select
            v-model="repeat"
            :items="optionsRepeat"
            label="Repeat"
            outline
          ></v-select>
          <v-select
            v-model="preferredDay"
            :items="optionsPreferredDay"
            label="Preferred Day"
            outline
          ></v-select>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-btn @click="submit" color="purple" light outline round>
            Submit
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'Scheduler',
  data: () => ({
    // valid: false,
    description: '',
    descriptionRules: [
      v => !!v || 'Description is required',
      v => v.length <= 255 || 'Description must be less than 255 characters',
    ],
    isRepeating: false,
    firstDDinDaysFromStart: null,
    optionsFirstDDinDaysFromStart: [
      {
        value: 1,
        text: 'Day One',
      },
      {
        value: 2,
        text: 'Days 2 - 3',
      },
      {
        value: 4,
        text: 'Days 4 - 5',
      },
      {
        value: 8,
        text: 'Week 2',
      },
      {
        value: 15,
        text: 'Week 3',
      },
      {
        value: 22,
        text: 'Week 4',
      },
      {
        value: 29,
        text: 'Week 5',
      },
      {
        value: 36,
        text: 'Week 6',
      },
      {
        value: 43,
        text: 'Week 7',
      },
      {
        value: 50,
        text: 'Week 8',
      },
      {
        value: 57,
        text: 'Week 9',
      },
      {
        value: 64,
        text: 'Week 10',
      },
      {
        value: 71,
        text: 'Week 11',
      },
      {
        value: 78,
        text: 'Week 12',
      },
    ],
    preferredDay: null,
    optionsPreferredDay: [
      {
        value: 0,
        text: 'Sunday',
      },
      {
        value: 1,
        text: 'Monday',
      },
      {
        value: 2,
        text: 'Tuesday',
      },
      {
        value: 3,
        text: 'Wednesday',
      },
      {
        value: 4,
        text: 'Thursday',
      },
      {
        value: 5,
        text: 'Friday',
      },
      {
        value: 6,
        text: 'Saturday',
      },
    ],
    repeat: null,
    optionsRepeat: [
      {
        value: 0,
        text: 'Every Day',
      },
      {
        value: 1,
        text: 'Every Week',
      },
      {
        value: 2,
        text: 'Every 2 Weeks',
      },
      {
        value: 3,
        text: 'Every 3 Weeks',
      },
      {
        value: 3,
        text: 'Every Month',
      },
      {
        value: 4,
        text: 'Every Quarter',
      },
      {
        value: 5,
        text: 'Every Year',
      },
    ],
  }),
  methods: {
    submit() {
      const todo = {
        isRepeating: this.isRepeating,
        firstDDinDaysFromStart: this.firstDDinDaysFromStart,
        repeat: this.repeat,
        preferredDay: this.preferredDay,
      }
      console.log('Submitting!', todo)
    },
  },
}
</script>

<style></style>
