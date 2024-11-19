"use client";
import { Checkbox } from "@radix-ui/react-checkbox";
import * as Form from "@radix-ui/react-form";
import { Box, Heading } from "@radix-ui/themes";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import Style from "./formStyle.module.css";
const SignIn = () => {
  const [visible, setVisible] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      userName: userName,
      password: password,
      redirect: false,
    });
    console.log(result);
  };

  return (
    <Box className={Style.body}>
      <Form.Root onSubmit={handleSubmit} className={Style.formContainer}>
        <Heading className="p-6 text-center text-gray-800 font-thin">
          التحقق من الصلاحية
        </Heading>
        <Box>
          <Form.Field name="UserName">
            <Form.Control
              type="text"
              placeholder="اسم المستخدم"
              className={Style.formInput}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </Form.Field>
          <Form.Field name="Password">
            <Box className={Style.inputWrapper}>
              <Form.Control
                required
                className={Style.formInput}
                type={visible ? "text" : "password"}
                placeholder="كلمة المرور"
                onChange={(e) => setPassword(e.target.value)}
              />

              <Checkbox
                className={Style.showPasswordCheckbox}
                checked={visible}
                onCheckedChange={() => setVisible((v) => !v)}
              >
                {visible ? (
                  <VscEye className={Style.passwordIcon} />
                ) : (
                  <VscEyeClosed className={Style.passwordIcon} />
                )}
              </Checkbox>
            </Box>
          </Form.Field>
        </Box>
        <Form.FormSubmit type="submit" className={Style.formSubmit}>
          تسجيل الدخول
        </Form.FormSubmit>
      </Form.Root>
    </Box>
  );
};

export default SignIn;
