import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton
} from "../components/forms";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
  { label: "Food", value: 4 },
]

const initialValues = {
  title: "",
  price: "",
  description: "",
  category: null,
}

function ListingEditScreen() {
  return (
    <Screen style={{paddingHorizontal: 16}}>
      <AppForm
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          placeholder="Title"
          maxLength={255}
        />
        <AppFormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
        />
        <AppFormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="POST" />
      </AppForm>
    </Screen>
  )
}

export default ListingEditScreen;