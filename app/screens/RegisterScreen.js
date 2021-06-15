import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  SubmitButton
} from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(2).max(255).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
})

function RegisterScreen() {
  return (
    <Screen style={{paddingHorizontal: 16}}>
      <AppForm
        initialValues={{ name: '', email: '', password: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          placeholder="Name"
          icon="account"
        />
        <AppFormField
          name="email"
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppFormField
          name="password"
          placeholder="Password"
          icon="lock"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="REGISTER" />
      </AppForm>
    </Screen>
  )
}

export default RegisterScreen;