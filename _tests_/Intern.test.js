const Intern = require('../lib/Intern');

test("Can getName()", () => {
    const name = "Fozzie";

    const e = new Intern(name);
    expect(e.getName()).toBe(name)
});

test("Can getID()", () => {
    const id = 123;

    const e = new Intern("Fozzie", id);
    expect(e.getID()).toBe(id)
});

test("Can getEmail()", () => {
    const email = "fozzie@gmail.com";

    const e = new Intern("Fozzie", 123, email);
    expect(e.getEmail()).toBe(email)
});

test("Can getSchool()", () => {
    const school = "MIT";

    const e = new Intern("Fozzie", "123", "fozzie@gmail.com", school);
    expect(e.getSchool()).toBe(school)
});

test("Can getRole()", () => {
    const name = "Intern"

    const e = new Intern("Fozzie", 123, "fozzie@gmail.com");
    expect(e.getRole()).toBe(name)
});
