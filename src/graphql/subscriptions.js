/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateWarehouse = /* GraphQL */ `
  subscription OnCreateWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
    $owner: String
  ) {
    onCreateWarehouse(filter: $filter, owner: $owner) {
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
export const onUpdateWarehouse = /* GraphQL */ `
  subscription OnUpdateWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
    $owner: String
  ) {
    onUpdateWarehouse(filter: $filter, owner: $owner) {
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
export const onDeleteWarehouse = /* GraphQL */ `
  subscription OnDeleteWarehouse(
    $filter: ModelSubscriptionWarehouseFilterInput
    $owner: String
  ) {
    onDeleteWarehouse(filter: $filter, owner: $owner) {
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
export const onCreateProducts = /* GraphQL */ `
  subscription OnCreateProducts(
    $filter: ModelSubscriptionProductsFilterInput
    $owner: String
  ) {
    onCreateProducts(filter: $filter, owner: $owner) {
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
export const onUpdateProducts = /* GraphQL */ `
  subscription OnUpdateProducts(
    $filter: ModelSubscriptionProductsFilterInput
    $owner: String
  ) {
    onUpdateProducts(filter: $filter, owner: $owner) {
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
export const onDeleteProducts = /* GraphQL */ `
  subscription OnDeleteProducts(
    $filter: ModelSubscriptionProductsFilterInput
    $owner: String
  ) {
    onDeleteProducts(filter: $filter, owner: $owner) {
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
