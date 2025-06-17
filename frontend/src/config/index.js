const registerFormControls = [
  {
    name: "userName",
    label: "用户名",
    type: "text",
    placeholder: "请输入用户名",
    componentType: "input",
  },
  {
    name: "email",
    label: "邮箱",
    type: "email",
    placeholder: "请输入邮箱",
    componentType: "input",
  },
  {
    name: "password",
    label: "密码",
    type: "password",
    placeholder: "请输入密码",
    componentType: "input",
  },
];

const loginFormControls = {
  email: {
    name: "email",
    label: "邮箱",
    type: "email",
    placeholder: "请输入邮箱",
    componentType: "input",
  },
  password: {
    name: "password",
    label: "密码",
    type: "password",
    placeholder: "请输入密码",
    componentType: "input",
  },
};

exports.modules({
  registerFormControls,
  loginFormControls,
});
