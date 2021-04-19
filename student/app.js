//TODO vue App
const app = Vue.createApp({
    data() {
        return {
            newStudentName: '',
            newStarID: '',
            students: [
                { name: 'A. Student', starID: 'aaa1234bb', present: false },
                { name: 'B. Student', starID: 'bbb1234cc', present: false },
                { name: 'C. Student', starID: 'ccc1234ee', present: true }

            ],
            errors: [],
            mostRecentStudent: {}
        }

    },
    methods: {
        addStudent() {
            this.errors = []
            // Validate input are both entered
            if (!this.newStudentName) {
                this.errors.push('Student name must be entered')
            }
            if (!this.newStarID) {
                this.errors.push('StarID must be entered')
            }

            // If  errors
            if (this.errors.length === 0) {
                let student = { name: this.newStudentName, starID: this.newStarID, present: false }
                this.students.push(student)
                this.newStudentName = ''
                this.newStarID = ''
            }
        },
        arrivedOrLeft(student) {
            this.mostRecentStudent = student
        }
    }
})


app.mount('#app')
