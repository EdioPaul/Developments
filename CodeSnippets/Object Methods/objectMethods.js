
const data = {
  username: 'Sloba',
  id: 15000,
  pw: 'CodewithSloba'
}

Object.freeze(data);

data.id = 10000;
console.log(data);
// {username: 'Sloba', id: 15000, pw: 'CodewithSloba'}

console.log(keys);
// {'username', 'id', 'pw'}

const values = Object.values(data);
console.log(values);
// ['Sloba', '15000', 'CodewithSloba']

const allData = Object.entries(data);
console.log(allData);
// [['username', 'Sloba'], ['id', '15000'], ['pw', 'CodewithSloba']]

const complain = {
  complainId: 2209863
}

const complainData = Object.assign(data, complain);
console.log(complainData);
// {username: 'Sloba', id: '15000', pw: 'CodewithSloba', complainId: '2209863'}