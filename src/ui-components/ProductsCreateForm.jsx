/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createProducts } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ProductsCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    is_deleted: false,
    type: "",
    product_images: [],
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
  const [is_deleted, setIs_deleted] = React.useState(initialValues.is_deleted);
  const [type, setType] = React.useState(initialValues.type);
  const [product_images, setProduct_images] = React.useState(
    initialValues.product_images
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setQuantity(initialValues.quantity);
    setDescription(initialValues.description);
    setUnit_price(initialValues.unit_price);
    setMarkup_percentage(initialValues.markup_percentage);
    setSale_price(initialValues.sale_price);
    setIs_deleted(initialValues.is_deleted);
    setType(initialValues.type);
    setProduct_images(initialValues.product_images);
    setCurrentProduct_imagesValue("");
    setErrors({});
  };
  const [currentProduct_imagesValue, setCurrentProduct_imagesValue] =
    React.useState("");
  const product_imagesRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    quantity: [],
    description: [],
    unit_price: [],
    markup_percentage: [],
    sale_price: [],
    is_deleted: [],
    type: [{ type: "Required" }],
    product_images: [],
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
          quantity,
          description,
          unit_price,
          markup_percentage,
          sale_price,
          is_deleted,
          type,
          product_images,
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
            query: createProducts.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductsCreateForm")}
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
              is_deleted,
              type,
              product_images,
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
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quantity: value,
              description,
              unit_price,
              markup_percentage,
              sale_price,
              is_deleted,
              type,
              product_images,
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
              is_deleted,
              type,
              product_images,
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
              is_deleted,
              type,
              product_images,
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
              is_deleted,
              type,
              product_images,
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
              is_deleted,
              type,
              product_images,
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
      <SwitchField
        label="Is deleted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={is_deleted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              quantity,
              description,
              unit_price,
              markup_percentage,
              sale_price,
              is_deleted: value,
              type,
              product_images,
            };
            const result = onChange(modelFields);
            value = result?.is_deleted ?? value;
          }
          if (errors.is_deleted?.hasError) {
            runValidationTasks("is_deleted", value);
          }
          setIs_deleted(value);
        }}
        onBlur={() => runValidationTasks("is_deleted", is_deleted)}
        errorMessage={errors.is_deleted?.errorMessage}
        hasError={errors.is_deleted?.hasError}
        {...getOverrideProps(overrides, "is_deleted")}
      ></SwitchField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              quantity,
              description,
              unit_price,
              markup_percentage,
              sale_price,
              is_deleted,
              type: value,
              product_images,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Product"
          value="PRODUCT"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Service"
          value="SERVICE"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              quantity,
              description,
              unit_price,
              markup_percentage,
              sale_price,
              is_deleted,
              type,
              product_images: values,
            };
            const result = onChange(modelFields);
            values = result?.product_images ?? values;
          }
          setProduct_images(values);
          setCurrentProduct_imagesValue("");
        }}
        currentFieldValue={currentProduct_imagesValue}
        label={"Product images"}
        items={product_images}
        hasError={errors?.product_images?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("product_images", currentProduct_imagesValue)
        }
        errorMessage={errors?.product_images?.errorMessage}
        setFieldValue={setCurrentProduct_imagesValue}
        inputFieldRef={product_imagesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Product images"
          isRequired={false}
          isReadOnly={false}
          value={currentProduct_imagesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.product_images?.hasError) {
              runValidationTasks("product_images", value);
            }
            setCurrentProduct_imagesValue(value);
          }}
          onBlur={() =>
            runValidationTasks("product_images", currentProduct_imagesValue)
          }
          errorMessage={errors.product_images?.errorMessage}
          hasError={errors.product_images?.hasError}
          ref={product_imagesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "product_images")}
        ></TextField>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
