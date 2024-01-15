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
import { getProduct } from "../graphql/queries";
import { updateProduct } from "../graphql/mutations";
const client = generateClient();
export default function ProductUpdateForm(props) {
  const {
    id: idProp,
    product: productModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    quantity: "",
    description: "",
    unit_price: "",
    markup_percentage: "",
    sale_price: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [unit_price, setUnit_price] = React.useState(initialValues.unit_price);
  const [markup_percentage, setMarkup_percentage] = React.useState(
    initialValues.markup_percentage
  );
  const [sale_price, setSale_price] = React.useState(initialValues.sale_price);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = productRecord
      ? { ...initialValues, ...productRecord }
      : initialValues;
    setName(cleanValues.name);
    setQuantity(cleanValues.quantity);
    setDescription(cleanValues.description);
    setUnit_price(cleanValues.unit_price);
    setMarkup_percentage(cleanValues.markup_percentage);
    setSale_price(cleanValues.sale_price);
    setErrors({});
  };
  const [productRecord, setProductRecord] = React.useState(productModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProduct.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getProduct
        : productModelProp;
      setProductRecord(record);
    };
    queryData();
  }, [idProp, productModelProp]);
  React.useEffect(resetStateValues, [productRecord]);
  const validations = {
    name: [{ type: "Required" }],
    quantity: [],
    description: [],
    unit_price: [],
    markup_percentage: [],
    sale_price: [],
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
          name,
          quantity: quantity ?? null,
          description: description ?? null,
          unit_price: unit_price ?? null,
          markup_percentage: markup_percentage ?? null,
          sale_price: sale_price ?? null,
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
            query: updateProduct.replaceAll("__typename", ""),
            variables: {
              input: {
                id: productRecord.id,
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
      {...getOverrideProps(overrides, "ProductUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              quantity,
              description,
              unit_price,
              markup_percentage,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quantity: value,
              description,
              unit_price,
              markup_percentage,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              quantity,
              description: value,
              unit_price,
              markup_percentage,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Unit price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={unit_price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quantity,
              description,
              unit_price: value,
              markup_percentage,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.unit_price ?? value;
          }
          if (errors.unit_price?.hasError) {
            runValidationTasks("unit_price", value);
          }
          setUnit_price(value);
        }}
        onBlur={() => runValidationTasks("unit_price", unit_price)}
        errorMessage={errors.unit_price?.errorMessage}
        hasError={errors.unit_price?.hasError}
        {...getOverrideProps(overrides, "unit_price")}
      ></TextField>
      <TextField
        label="Markup percentage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={markup_percentage}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quantity,
              description,
              unit_price,
              markup_percentage: value,
              sale_price,
            };
            const result = onChange(modelFields);
            value = result?.markup_percentage ?? value;
          }
          if (errors.markup_percentage?.hasError) {
            runValidationTasks("markup_percentage", value);
          }
          setMarkup_percentage(value);
        }}
        onBlur={() =>
          runValidationTasks("markup_percentage", markup_percentage)
        }
        errorMessage={errors.markup_percentage?.errorMessage}
        hasError={errors.markup_percentage?.hasError}
        {...getOverrideProps(overrides, "markup_percentage")}
      ></TextField>
      <TextField
        label="Sale price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={sale_price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quantity,
              description,
              unit_price,
              markup_percentage,
              sale_price: value,
            };
            const result = onChange(modelFields);
            value = result?.sale_price ?? value;
          }
          if (errors.sale_price?.hasError) {
            runValidationTasks("sale_price", value);
          }
          setSale_price(value);
        }}
        onBlur={() => runValidationTasks("sale_price", sale_price)}
        errorMessage={errors.sale_price?.errorMessage}
        hasError={errors.sale_price?.hasError}
        {...getOverrideProps(overrides, "sale_price")}
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
          isDisabled={!(idProp || productModelProp)}
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
              !(idProp || productModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
