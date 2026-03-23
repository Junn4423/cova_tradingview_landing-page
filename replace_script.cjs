const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'components', 'Education', 'Education.jsx');
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/const accessForms = \{[\s\S]*?\n\};\n\n/, '');
content = content.replace(/const AccessFormModal = \(\{ formKey, onClose \}\) => \{[\s\S]*?;\n\};\n\n/, '');

fs.writeFileSync(file, content);
console.log('Fixed Education.jsx block drops');
