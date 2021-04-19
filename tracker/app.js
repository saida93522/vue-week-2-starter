let app = Vue.createApp({
    data() {
        return {
            activity: 'Practice Art', //headline name
            activityRecords: [], //all activity records
            //forming inputs using v-model
            dateString: '',
            hours: 1,
            type: 'sketching',
            medium: 'Traditional',

            //select options for form
            types: ['Sketching', 'Drawing', 'Painting'],

            //Handle Errors
            errors: []
        }
    },
    methods: {
        submitBtn() {
            this.errors = []

            //convert date into object
            let date = new Date(this.dateString)
            //validating dates
            if (!this.dateString || this.dateString == 'Invalid Date' || date > new Date()) {
                this.errors.push('Select a Valid date, today or in the past')
            }
            if (this.hours <= 0 || this.hours > 24) {
                this.errors.push('The number of hours must be greater or less than 0 and 24')
            }
            if (!this.type) {
                this.errors.push('Select a type')
            }
            if (!this.medium) {
                this.errors.push('Select a media')
            }

            if (this.errors.length == 0) {
                let record = {
                    date: date,
                    hours: this.hours,
                    type: this.type,
                    medium: this.medium
                }
                this.activityRecords.push(record)
                this.activityRecords.sort(function (r1, r2) {
                    return r1.date.getTime() - r2.date.getTime()
                })
            }
        },
        shortDate(date) {
            return new Intl.DateTimeFormat('en-US', { timeZone: 'UTC' }).format(date)
        }
    },
    computed: {
        totalRecordsMessage() {
            let numOfRecords = this.activityRecords.length

            if (numOfRecords === 1) {
                return '1 record'
            } else {
                return numOfRecords + ' records'
            }
        },
        totalHours() {
            let total = 0
            this.activityRecords.forEach(record => {
                total = total + record.hours
            })
            return total
        }
    }
})

app.mount('#app')