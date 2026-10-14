import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '280_User.json');
console.log(filePath);

const fileData = fs.readFileSync(filePath, 'utf-8');
const datajsObject = JSON.parse(fileData);
console.log(datajsObject);
console.log(datajsObject.username);
console.log(datajsObject.password);

const  user = {
    name : 'buddha',
    role : 'QA Engineer'
}

const jsonData = JSON.stringify(user);
fs.writeFileSync('output.json', jsonData);