"use client";
import React, { useState } from "react";
import * as Form from "@radix-ui/react-form";
import { Box, Button, Heading } from "@radix-ui/themes";
import { Checkbox } from "@radix-ui/react-checkbox";
import Style from "./formStyle.module.css";
import { EyeClosedIcon, EyeNoneIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import prisma from "@/prisma/client";
import adminCheck from "./adminCheck";
const ValidationPage = () => {
  const [visible, setVisible] = useState(false);
  
  return (
    <Box className={Style.body}>
      <Form.Root className={Style.formContainer}>
        <Heading className="p-6 text-center text-gray-800 font-thin">
          التحقق من الصلاحية
        </Heading>
        <Box>
          <Form.Field name="Email">
            <Form.Control
              type="email"
              placeholder="البريد الإلكتروني"
              className={Style.formInput}
            />
          </Form.Field>
          <Form.Field name="Password" aria-required>
            <Box className={Style.inputWrapper}>
              <Form.Control
                className={Style.formInput}
                type={visible ? "text" : "password"}
                placeholder="كلمة المرور"
                
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
        <Form.FormSubmit className={Style.formSubmit}>
          تسجيل الدخول
        </Form.FormSubmit>
      </Form.Root>
    </Box>
  );
};

export default ValidationPage;
