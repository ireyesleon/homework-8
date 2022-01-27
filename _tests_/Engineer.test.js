const Engineer = require('../lib/Engineer');

test("Can getName()", () => {
    const name = "Fozzie";

    const e = new Engineer(name);
    expect(e.getName()).toBe(name)
});

test("Can getID()", () => {
    const id = 123;

    const e = new Engineer("Fozzie", id);
    expect(e.getID()).toBe(id)
});

test("Can getEmail()", () => {
    const email = "fozzie@gmail.com";

    const e = new Engineer("Fozzie", 123, email);
    expect(e.getEmail()).toBe(email)
});

test("Can getGithub()", () => {
    const github = "ireyesleon";

    const e = new Engineer("Fozzie", "123", "fozzie@gmail.com", github);
    expect(e.getGithub()).toBe(github)
});

test("Can getRole()", () => {
    const name = "Engineer"

    const e = new Engineer("Fozzie", 123, "fozzie@gmail.com");
    expect(e.getRole()).toBe(name)
});
