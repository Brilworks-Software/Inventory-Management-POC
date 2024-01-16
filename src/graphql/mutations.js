/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createWarehouse = /* GraphQL */ `
  mutation CreateWarehouse(
    $input: CreateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    createWarehouse(input: $input, condition: $condition) {
      id
      name
      description
      location
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateWarehouse = /* GraphQL */ `
  mutation UpdateWarehouse(
    $input: UpdateWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    updateWarehouse(input: $input, condition: $condition) {
      id
      name
      description
      location
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteWarehouse = /* GraphQL */ `
  mutation DeleteWarehouse(
    $input: DeleteWarehouseInput!
    $condition: ModelWarehouseConditionInput
  ) {
    deleteWarehouse(input: $input, condition: $condition) {
      id
      name
      description
      location
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createProducts = /* GraphQL */ `
  mutation CreateProducts(
    $input: CreateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    createProducts(input: $input, condition: $condition) {
      id
      name
      quantity
      description
      unit_price
      markup_percentage
      sale_price
      is_deleted
      type
      product_images
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateProducts = /* GraphQL */ `
  mutation UpdateProducts(
    $input: UpdateProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    updateProducts(input: $input, condition: $condition) {
      id
      name
      quantity
      description
      unit_price
      markup_percentage
      sale_price
      is_deleted
      type
      product_images
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteProducts = /* GraphQL */ `
  mutation DeleteProducts(
    $input: DeleteProductsInput!
    $condition: ModelProductsConditionInput
  ) {
    deleteProducts(input: $input, condition: $condition) {
      id
      name
      quantity
      description
      unit_price
      markup_percentage
      sale_price
      is_deleted
      type
      product_images
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
