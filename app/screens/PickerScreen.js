import React, {useState} from "react";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppPicker from "../components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
  { label: "Food", value: 4 },
]

const PickerScreen = () => {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen style={{paddingHorizontal: 20}}>
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        icon="apps"
        placeholder="Categories"
        items={categories} />
      <AppTextInput icon="email" placeholder="Username" />
    </Screen>
  );
}

export default PickerScreen;