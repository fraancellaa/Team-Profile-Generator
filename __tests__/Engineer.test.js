const Engineer = require('../lib/Engineer');

test('get engineer github via method', () => {
    const github = 'fraancellaa';
    const newEngineer = new Engineer(1, 'francella', 'francellal@hotmail.com', github);
    expect(newEngineer.getGithub()).toBe(github);
});