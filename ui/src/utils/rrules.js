import { RRule, RRuleSet, rrulestr } from 'rrule'

//highly recommended to use timestamps in UTC eg. new Date(Date.UTC(...))
// store all in UTC, convert to local on client
const transmogrifyFormDateToRule = () => {
  // start
}
// Create a rule:
const rule = new RRule({
  freq: RRule.WEEKLY,
  interval: 52,
  // byweekday: [RRule.MO, RRule.FR],
  dtstart: new Date(Date.UTC(2019, 10, 1)),
  until: new Date(Date.UTC(2022, 12, 12)),
})

console.log(rule.all())
console.log(rule.toText())

// const ruleSet = new RRuleSet()

// ruleSet.rrule(rule)
// ruleSet.rdate(new Date())
// ruleSet.exdate(
//   new Date('Fri May 17 2019 06:30:00 GMT-0400 (Eastern Daylight Time)')
// )
// console.log('in text....', ruleSet.toText())
// console.log(ruleSet.valueOf())
// export const rules = {
//   rule,
//   transmogrifyFormDateToRule,
// }
