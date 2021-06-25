import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  Form,
  FormField,
  FormPicker,
  SubmitButton
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image.")
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "apps" },
  { label: "Cameras", value: 3, backgroundColor: "yellow", icon: "apps" },
  { label: "Food", value: 4, backgroundColor: "blue", icon: "apps" },
]

const initialValues = {
  title: "",
  price: "",
  description: "",
  category: null,
  images: []
}

function ListingEditScreen() {
  return (
    <Screen style={{paddingHorizontal: 16}}>
      <Form
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField
          name="title"
          placeholder="Title"
          maxLength={255}
        />
        <FormField
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          maxLength={8}
          width={120}
        />
        <FormPicker
          name="category"
          items={categories}
          numberOfColumns={3}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
          width="50%"
        />
        <FormField
          name="description"
          placeholder="Description"
          maxLength={255}
          multiline
          numberOfLines={3}
        />
        <SubmitButton title="POST" />
      </Form>
    </Screen>
  )
}

export default ListingEditScreen;