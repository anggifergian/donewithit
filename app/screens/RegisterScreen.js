import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  Form,
  FormField,
  SubmitButton
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(255).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

function RegisterScreen() {
  return (
    <Screen>
      <Form
        initialValues={{ name: '', email: '', password: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="name"
          placeholder="Name"
          icon="account"
        />
        <FormField
          name="email"
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <FormField
          name="password"
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="REGISTER" />
      </Form>
    </Screen>
  )
}

export default RegisterScreen;