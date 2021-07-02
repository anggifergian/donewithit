import React, { useState } from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";

import {
  Form,
  FormField,
  FormImagePicker,
  FormPicker,
  SubmitButton
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import useLocation from "../hooks/useLocation";

import listingsApi from "../api/listings";
import UploadScreen from "./UploadScreen";

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
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const result = await listingsApi.addListing(
      {...listing, location},
      (progress) => setProgress(progress)
    );

    if (!result.ok) {
      setUploadVisible(false);
      return alert('Could not save the listing.')
    };

    resetForm();
  }

  return (
    <Screen>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        visible={uploadVisible}
        progress={progress}
      />
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
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