const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);
const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => {
  return `
    Name: ${userName}
    GitHub: ${githubName}
  `;
};
console.log(name, github);
console.log(generatePage('Caleb', 'calebp80'));
