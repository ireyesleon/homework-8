const Employee = require('../lib/Employee');


test("Can getName()", () => {
    const name = "Fozzie";

    const e = new Employee(name);
    expect(e.getName()).toBe(name)
});

test("Can getID()", () => {
    const id = 123;

    const e = new Employee("Fozzie", id);
    expect(e.getID()).toBe(id)
});

test("Can getEmail()", () => {
    const email = "fozzie@gmail.com";

    const e = new Employee("Fozzie", 123, email);
    expect(e.getEmail()).toBe(email)
});

test("Can getRole()", () => {
    const name = "Employee"

    const e = new Employee("Fozzie", 123, "fozzie@gmail.com");
    expect(e.getRole()).toBe(name)
});