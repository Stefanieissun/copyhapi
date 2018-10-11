// const students=[];
// const n=50;
// const heightRanges={
// 	male:[155,180],
// 	female:[145,170]
// };
// function getRandomInt(min,max){
// 	return Math.round(min+Math.random()*(max-min));
// }

// for(let i=0;i<50;++i){
// 	const gender=Math.random()>0.5?'male':'female';
// 	const [min,max]=heightRanges[gender];

// 	const student = {
//     id: i + 1,
//     gender: gender,
//     height: getRandomInt(min, max)
//   }
//    students.push(student)
// }
// console.log(students)


const empsRows = [
  { RowId: '001', EmpId: '10', Lastname: 'Smith', Firstname: 'Joe', Salary: 40000 },
  { RowId: '002', EmpId: '12', Lastname: 'Jones', Firstname: 'Mary', Salary: 50000 },
  { RowId: '003', EmpId: '11', Lastname: 'Johnson', Firstname: 'Cathy', Salary: 44000 },
  { RowId: '004', EmpId: '22', Lastname: 'Jones', Firstname: 'Bob', Salary: 55000 },
  { RowId: '005', EmpId: '24', Lastname: 'Steve', Firstname: 'Mike', Salary: 62000 }
]

const option = {
  dataset: {
    source: empsRows
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    type: 'value'
  },
  series: {
    type: 'scatter',
    encode: {
      x: 'Firstname',
      y: 'Salary'
    }
  }
}