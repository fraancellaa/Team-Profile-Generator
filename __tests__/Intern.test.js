const Intern = require('../lib/Intern'); 

test ('get intern school via method', () => {
    const school = 'UM';
    const newIntern = new Intern(1, 'francella', 'francella@hotmail.com', school);
    expect(newIntern.getSchool()).toBe(school)
});