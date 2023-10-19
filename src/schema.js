import * as yup from "yup";

export const gurdianSchema = yup.object().shape({
  guardianfirstname: yup.string().required("guardFirstName is required"),
  guardianlastname: yup.string().required("guardlastName is required"),
  contactAddress: yup.string().required("guardian contact address is required"),
  contactNumber: yup.string().required("guard contact number is required"),
  guardianEmail: yup.string().required("guardemail is required"),
  consentletter: yup
    .mixed()
    .required("Consent letter is required")
    .test("fileSize", "File size is too large", (value) => {
      if (value && value.size) {
        return value.size <= 1024 * 1024;
      }
      return true;
    }),
});

export const athleteSchema = yup.object().shape({
  firstname: yup.string().required("FirstName is required"),
  lastname: yup.string().required("lastName is required"),
  dob: yup.date().required("Date of birth is required"),
  height: yup.number("must be a number").required("Height is required"),
  passport: yup.mixed().test("fileRequired", "File is required", (value) => {
    return value;
  }),

  validmeansofid: yup
    .mixed()
    .test("fileRequired", "File is required", (value) => {
      return value;
    }),
  state: yup.string().required("State is required"),
  localGovernment: yup.string().required("Local government is required"),
  stateOfResidence: yup.string().required("State of residence is required"),
  proofOfEnrollment: yup.string().required("Proof of enrollment is required"),
  fitnessReport: yup
    .mixed()
    .test("fileRequired", "File is required", (value) => {
      return value;
    }),
  emailAddress: yup.string().email().required("Email address is required"),
  sportsHistory: yup.string().required("Sports history is required"),
});
