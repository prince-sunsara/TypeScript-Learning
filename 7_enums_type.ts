//* ENUMS TYPE
// > commonly used when you want to represent a set of related values and choose one value from multiple option
// > provide convenient way to define set of named value and associate them with specific meaning.

enum Roles {
  admin = "admin",
  user = "user",
}

type Login = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const s1: Login = {
  email: "prince@test.com",
  password: "1234",
  role: Roles.admin,
};

const s2: Login = {
  email: "prince@test.com",
  password: "1234",
  role: Roles.user,
};

const intro = (user: Login): string => {
  const { email, role } = user;
  return role === "admin" ? "Admin" : "User";
};

console.log(intro(s1));
console.log(intro(s2));
