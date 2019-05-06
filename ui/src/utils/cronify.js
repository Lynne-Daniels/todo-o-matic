const CronJob = require('cron').CronJob
const CronTime = require('cron').CronTime

// https://crontab.guru/#15_14_1_5_*   -- play around with this to see that day of month used first, then day of week comes second
// so next day of week after the day of month is the chosen date

// Monitor chron jobs:  Check out https://cronitor.io/?utm_source=crontabguru&utm_campaign=cronitor_top
// has free tier

// new CronJob('* * * * * *', function() {
//   console.log('You will see this message every second', Date.now());
// }, null, true, 'America/New_York');

// const job = new CronJob(
// 	'0 0 15 * 2 *',
// 	function() {
// 		console.log('ChronJob says Date: ', new Date());
// 	},
// 	null,
// 	true
// );

// console.log('System TZ next 5: ', job.nextDates(5));

// imagine start date is today
// const start = Date.now()

// first instance is the first cron date where date > start Date

// const jobUTC = new CronJob(
//   '0 0 0 15 * 3', //cronTime
//   function() {
//     //onTick
//     console.log('Chron Jobs says...Date: ', new Date())
//   },
//   null, // onComplete
//   false, // start running the series of jobs
//   'UTC' // timezone
// )
const jobUTC = new CronJob({
  cronTime: '0 0 0 15 5 3',
  onTick: () => console.log('ticking: ', new Date()),
  start: new Date('2019-12-17T03:24:00'),
})

console.log('UTC next 30: ', jobUTC.nextDates(30).map(v => v._d))
// process.exit(0)

// (8) ["source", "second", "minute", "hour", "dayOfMonth", "month", "dayOfWeek", "realDate"]
// const testTime = Object.keys(new CronTime(new Date('1995-12-17T03:24:00')))

// console.log(testTime)

// const testTime = new CronTime(new Date('2020-03-22'))
// console.log(testTime.sendAt())
exports = {
  jobUTC,
  // testTime,
}

// console.log('Before job instantiation')
// const job = new CronJob('* 4-22 * * 1-5', function() {
//   const d = new Date()
//   console.log('Every Minute Between hours 4-22, Monday through Friday:', d)
// })
// console.log('After job instantiation')
// job.nextDates(30).map(v => v._d)
