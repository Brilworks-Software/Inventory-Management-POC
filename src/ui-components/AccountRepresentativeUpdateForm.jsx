/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAccountRepresentative } from "../graphql/queries";
import { updateAccountRepresentative } from "../graphql/mutations";
const client = generateClient();
export default function AccountRepresentativeUpdateForm(props) {
  const {
    id: idProp,
    accountRepresentative: accountRepresentativeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    orderTotal: "",
    salesPeriod: "",
  };
  const [orderTotal, setOrderTotal] = React.useState(initialValues.orderTotal);
  const [salesPeriod, setSalesPeriod] = React.useState(
    initialValues.salesPeriod
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = accountRepresentativeRecord
      ? { ...initialValues, ...accountRepresentativeRecord }
      : initialValues;
    setOrderTotal(cleanValues.orderTotal);
    setSalesPeriod(cleanValues.salesPeriod);
    setErrors({});
  };
  const [accountRepresentativeRecord, setAccountRepresentativeRecord] =
    React.useState(accountRepresentativeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAccountRepresentative.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAccountRepresentative
        : accountRepresentativeModelProp;
      setAccountRepresentativeRecord(record);
    };
    queryData();
  }, [idProp, accountRepresentativeModelProp]);
  React.useEffect(resetStateValues, [accountRepresentativeRecord]);
  const validations = {
    orderTotal: [],
    salesPeriod: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          orderTotal: orderTotal ?? null,
          salesPeriod: salesPeriod ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateAccountRepresentative.replaceAll("__typename", ""),
            variables: {
              input: {
                id: accountRepresentativeRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AccountRepresentativeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Order total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={orderTotal}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              orderTotal: value,
              salesPeriod,
            };
            const result = onChange(modelFields);
            value = result?.orderTotal ?? value;
          }
          if (errors.orderTotal?.hasError) {
            runValidationTasks("orderTotal", value);
          }
          setOrderTotal(value);
        }}
        onBlur={() => runValidationTasks("orderTotal", orderTotal)}
        errorMessage={errors.orderTotal?.errorMessage}
        hasError={errors.orderTotal?.hasError}
        {...getOverrideProps(overrides, "orderTotal")}
      ></TextField>
      <TextField
        label="Sales period"
        isRequired={false}
        isReadOnly={false}
        value={salesPeriod}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderTotal,
              salesPeriod: value,
            };
            const result = onChange(modelFields);
            value = result?.salesPeriod ?? value;
          }
          if (errors.salesPeriod?.hasError) {
            runValidationTasks("salesPeriod", value);
          }
          setSalesPeriod(value);
        }}
        onBlur={() => runValidationTasks("salesPeriod", salesPeriod)}
        errorMessage={errors.salesPeriod?.errorMessage}
        hasError={errors.salesPeriod?.hasError}
        {...getOverrideProps(overrides, "salesPeriod")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || accountRepresentativeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || accountRepresentativeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
