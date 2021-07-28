const { mockGrades } = require('./tests/gradeMocks')

const calculateAverageByAssignment = (mockGrades) => {
  let assignmentAvg = {}
  let newArray = []

  mockGrades.forEach(grade => {
    if (assignmentAvg[grade.assignment]) {
      assignmentAvg[grade.assignment].push(grade.score)
    } else {
      assignmentAvg[grade.assignment] = [grade.score]
    }
  })

  for (const [assignment, grade] of Object.entries(assignmentAvg)) {
    newArray.push({ name: assignment, average: average(grade) })
  }

  return newArray
}

const calculateAverageByStudent = (mockGrades) => {
  let studentAvg = {}
  let newArray = []

  mockGrades.forEach(grade => {
    if (studentAvg[grade.student]) {
      studentAvg[grade.student].push(grade.score)
    } else {
      studentAvg[grade.student] = [grade.score]
    }
  })

  for (const [student, grade] of Object.entries(assignmentAvg)) {
    newArray.push({ name: student, average: average(grade) })
  }

  return newArray
}

// Average
const average = (array) => array.reduce((a, b) => a + b) / array.length;

module.exports = { calculateAverageByAssignment, calculateAverageByStudent }

// console.log(calculateAverageByAssignment(mockGrades))