import { Text, TextInput, View } from "react-native";
import { Formik } from "formik";
import { styles } from "../style/styles";
import * as yup from "yup";
import Button from "../shared/button";

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Please Enter Rating between 1 - 5", (val) => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    }),
});

const ReviewForm = ({ addReviews }) => {
  return (
    <View style={styles.screenContainer}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReviews(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Review Title..."
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
              onBlur={formikProps.handleBlur("title")}
            />
            <Text style={styles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              multiline
              style={styles.input}
              placeholder="Review Body..."
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
              onBlur={formikProps.handleBlur("body")}
            />
            <Text style={styles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={formikProps.handleChange("rating")}
              keyboardType="numeric"
              value={formikProps.values.rating}
              onBlur={formikProps.handleBlur("rating")}
            />
            <Text style={styles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
            <Button text="submit" onPress={formikProps.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
