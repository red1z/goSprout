import * as Yup from "yup";
import { selectValues, states, employment, schools } from "../Data";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(4).required().label("FirstName"),
  lastName: Yup.string().required().label("LastName"),
  linkedin: Yup.string().required().label("Linkedin"),
  preferredFirstName: Yup.string().label("PreferredFirstName").required(),
  DD: Yup.string().label("DD").required(),
  MM: Yup.string().label("MM").required(),
  YY: Yup.string().label("YY").required(),
  mailingAddress1: Yup.string().label("MailingAddress1").required(),
  mailingAddress2: Yup.string().label("MailingAddress2").required(),
  zipCode: Yup.string().label("ZipCode").required(),
  phoneNumber: Yup.string().label("phoneNumber").required(),
  email: Yup.string().label("Email").required(),
  city: Yup.string().label("City").required(),
  referralCode: Yup.string().label("ReferralCode").required(),
  genderSelect: Yup.string()
    .oneOf(
      selectValues.map(({ value }) => value),
      "Invalid value"
    )
    .label("Gender")
    .required(),
  state: Yup.string()
    .oneOf(
      states.map(({ value }) => value),
      "InvalidValue"
    )
    .label("State")
    .required(),
  schools: Yup.string()
    .oneOf(
      schools.map(({ value }) => value),
      "InvalidValue"
    )
    .label("Schools")
    .required(),
  employment: Yup.string()
    .oneOf(
      employment.map(({ value }) => value),
      "InvalidValue"
    )
    .label("Employment")
    .required(),
});

export const tradeInfoPage = Yup.object().shape({
  currentPosition: Yup.string().required().label("CurrentPosition"),
  registered: Yup.string().required().label("Registere"),
  ifWhere: Yup.string().required().label("This"),
  services: Yup.string().required().label("Services"),
});

export const gosProutPage = Yup.object().shape({
  expertise: Yup.string().required().label("This"),
  achieve: Yup.string().required().label("This"),
  currentRole: Yup.string().required().label("This"),
  disciplines: Yup.string().required().label("This"),
  professional: Yup.string().required().label("This"),
  softSkills: Yup.string().required().label("This"),
  hardSkills: Yup.string().required().label("This"),
});
