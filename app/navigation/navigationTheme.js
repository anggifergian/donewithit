import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    secondary: colors.secondary
  }
}

export default myTheme;