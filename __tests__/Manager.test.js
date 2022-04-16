const Manager = require('../lib/Manager');

test('get manager office number via method', () => {
    const officeNumber = 7854;
    const newManager = new Manager(1, 'francella', 'francella@hotmail.com', officeNumber);
    expect(newManager.getOfficeNumber()).toBe(officeNumber);
});