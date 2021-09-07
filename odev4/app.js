const fs = require('fs');

fs.writeFile(
  'employees.json',
  '{"name": "Employee 1 Name", "salary": 2000}',
  'utf8',
  (err) => {
    if (err) console.log(err);
    console.log('Veri basariyla eklendi.');
  }
);

fs.readFile('employees.json', 'utf8', (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

fs.appendFile(
  'employees.json',
  '\n{"name": "Employee 2 Name", "salary": 4000}',
  'utf8',
  (err) => {
    if (err) console.log(err);
    console.log('Veri basariyla eklendi.');
  }
);
