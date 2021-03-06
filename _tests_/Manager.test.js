const Manager = require('../lib/Manager');

test("Can getName()", () => {
    const name = "Fozzie";

    const e = new Manager(name);
    expect(e.getName()).toBe(name)
});

test("Can getID()", () => {
    const id = 123;

    const e = new Manager("Fozzie", id);
    expect(e.getID()).toBe(id)
});

test("Can getEmail()", () => {
    const email = "fozzie@gmail.com";

    const e = new Manager("Fozzie", 123, email);
    expect(e.getEmail()).toBe(email)
});

test("Can getOffice()", () => {
    const office = 123;

    const e = new Manager("Fozzie", "123", "fozzie@gmail.com", office);
    expect(e.getOffice()).toBe(office)
});

test("Can getRole()", () => {
    const name = "Manager"

    const e = new Manager("Fozzie", 123, "fozzie@gmail.com");
    expect(e.getRole()).toBe(name)
});
