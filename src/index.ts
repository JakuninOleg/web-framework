import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "name", age: 20 });

const root = document.getElementById("root");


if (root) {
  const userForm = new UserForm(root, user);

  console.log()

  userForm.render();
} else {
  throw new Error("Root element wasn't found");
}
