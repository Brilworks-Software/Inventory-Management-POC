/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWarehouseInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  location?: string | null,
};

export type ModelWarehouseConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelWarehouseConditionInput | null > | null,
  or?: Array< ModelWarehouseConditionInput | null > | null,
  not?: ModelWarehouseConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Warehouse = {
  __typename: "Warehouse",
  id: string,
  name: string,
  description?: string | null,
  location?: string | null,
  products?: ModelProductsWarehouseConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelProductsWarehouseConnection = {
  __typename: "ModelProductsWarehouseConnection",
  items:  Array<ProductsWarehouse | null >,
  nextToken?: string | null,
};

export type ProductsWarehouse = {
  __typename: "ProductsWarehouse",
  id: string,
  warehouseId: string,
  productsId: string,
  warehouse: Warehouse,
  products: Products,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Products = {
  __typename: "Products",
  id: string,
  name: string,
  quantity?: number | null,
  description?: string | null,
  unit_price?: number | null,
  markup_percentage?: number | null,
  sale_price?: number | null,
  is_deleted?: boolean | null,
  type: ProductType,
  product_images: Array< string | null >,
  Warehouses?: ModelProductsWarehouseConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export enum ProductType {
  PRODUCT = "PRODUCT",
  SERVICE = "SERVICE",
}


export type UpdateWarehouseInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  location?: string | null,
};

export type DeleteWarehouseInput = {
  id: string,
};

export type CreateProductsInput = {
  id?: string | null,
  name: string,
  quantity?: number | null,
  description?: string | null,
  unit_price?: number | null,
  markup_percentage?: number | null,
  sale_price?: number | null,
  is_deleted?: boolean | null,
  type: ProductType,
  product_images: Array< string | null >,
};

export type ModelProductsConditionInput = {
  name?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  description?: ModelStringInput | null,
  unit_price?: ModelFloatInput | null,
  markup_percentage?: ModelFloatInput | null,
  sale_price?: ModelFloatInput | null,
  is_deleted?: ModelBooleanInput | null,
  type?: ModelProductTypeInput | null,
  product_images?: ModelStringInput | null,
  and?: Array< ModelProductsConditionInput | null > | null,
  or?: Array< ModelProductsConditionInput | null > | null,
  not?: ModelProductsConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelProductTypeInput = {
  eq?: ProductType | null,
  ne?: ProductType | null,
};

export type UpdateProductsInput = {
  id: string,
  name?: string | null,
  quantity?: number | null,
  description?: string | null,
  unit_price?: number | null,
  markup_percentage?: number | null,
  sale_price?: number | null,
  is_deleted?: boolean | null,
  type?: ProductType | null,
  product_images?: Array< string | null > | null,
};

export type DeleteProductsInput = {
  id: string,
};

export type CreateProductsWarehouseInput = {
  id?: string | null,
  warehouseId: string,
  productsId: string,
};

export type ModelProductsWarehouseConditionInput = {
  warehouseId?: ModelIDInput | null,
  productsId?: ModelIDInput | null,
  and?: Array< ModelProductsWarehouseConditionInput | null > | null,
  or?: Array< ModelProductsWarehouseConditionInput | null > | null,
  not?: ModelProductsWarehouseConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductsWarehouseInput = {
  id: string,
  warehouseId?: string | null,
  productsId?: string | null,
};

export type DeleteProductsWarehouseInput = {
  id: string,
};

export type ModelWarehouseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelWarehouseFilterInput | null > | null,
  or?: Array< ModelWarehouseFilterInput | null > | null,
  not?: ModelWarehouseFilterInput | null,
};

export type ModelWarehouseConnection = {
  __typename: "ModelWarehouseConnection",
  items:  Array<Warehouse | null >,
  nextToken?: string | null,
};

export type ModelProductsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  description?: ModelStringInput | null,
  unit_price?: ModelFloatInput | null,
  markup_percentage?: ModelFloatInput | null,
  sale_price?: ModelFloatInput | null,
  is_deleted?: ModelBooleanInput | null,
  type?: ModelProductTypeInput | null,
  product_images?: ModelStringInput | null,
  and?: Array< ModelProductsFilterInput | null > | null,
  or?: Array< ModelProductsFilterInput | null > | null,
  not?: ModelProductsFilterInput | null,
};

export type ModelProductsConnection = {
  __typename: "ModelProductsConnection",
  items:  Array<Products | null >,
  nextToken?: string | null,
};

export type ModelProductsWarehouseFilterInput = {
  id?: ModelIDInput | null,
  warehouseId?: ModelIDInput | null,
  productsId?: ModelIDInput | null,
  and?: Array< ModelProductsWarehouseFilterInput | null > | null,
  or?: Array< ModelProductsWarehouseFilterInput | null > | null,
  not?: ModelProductsWarehouseFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionWarehouseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWarehouseFilterInput | null > | null,
  or?: Array< ModelSubscriptionWarehouseFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProductsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  unit_price?: ModelSubscriptionFloatInput | null,
  markup_percentage?: ModelSubscriptionFloatInput | null,
  sale_price?: ModelSubscriptionFloatInput | null,
  is_deleted?: ModelSubscriptionBooleanInput | null,
  type?: ModelSubscriptionStringInput | null,
  product_images?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProductsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductsFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionProductsWarehouseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  warehouseId?: ModelSubscriptionIDInput | null,
  productsId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionProductsWarehouseFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductsWarehouseFilterInput | null > | null,
};

export type CreateWarehouseMutationVariables = {
  input: CreateWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type CreateWarehouseMutation = {
  createWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    products?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateWarehouseMutationVariables = {
  input: UpdateWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type UpdateWarehouseMutation = {
  updateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    products?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteWarehouseMutationVariables = {
  input: DeleteWarehouseInput,
  condition?: ModelWarehouseConditionInput | null,
};

export type DeleteWarehouseMutation = {
  deleteWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    products?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProductsMutationVariables = {
  input: CreateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type CreateProductsMutation = {
  createProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    quantity?: number | null,
    description?: string | null,
    unit_price?: number | null,
    markup_percentage?: number | null,
    sale_price?: number | null,
    is_deleted?: boolean | null,
    type: ProductType,
    product_images: Array< string | null >,
    Warehouses?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProductsMutationVariables = {
  input: UpdateProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type UpdateProductsMutation = {
  updateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    quantity?: number | null,
    description?: string | null,
    unit_price?: number | null,
    markup_percentage?: number | null,
    sale_price?: number | null,
    is_deleted?: boolean | null,
    type: ProductType,
    product_images: Array< string | null >,
    Warehouses?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProductsMutationVariables = {
  input: DeleteProductsInput,
  condition?: ModelProductsConditionInput | null,
};

export type DeleteProductsMutation = {
  deleteProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    quantity?: number | null,
    description?: string | null,
    unit_price?: number | null,
    markup_percentage?: number | null,
    sale_price?: number | null,
    is_deleted?: boolean | null,
    type: ProductType,
    product_images: Array< string | null >,
    Warehouses?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProductsWarehouseMutationVariables = {
  input: CreateProductsWarehouseInput,
  condition?: ModelProductsWarehouseConditionInput | null,
};

export type CreateProductsWarehouseMutation = {
  createProductsWarehouse?:  {
    __typename: "ProductsWarehouse",
    id: string,
    warehouseId: string,
    productsId: string,
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      quantity?: number | null,
      description?: string | null,
      unit_price?: number | null,
      markup_percentage?: number | null,
      sale_price?: number | null,
      is_deleted?: boolean | null,
      type: ProductType,
      product_images: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProductsWarehouseMutationVariables = {
  input: UpdateProductsWarehouseInput,
  condition?: ModelProductsWarehouseConditionInput | null,
};

export type UpdateProductsWarehouseMutation = {
  updateProductsWarehouse?:  {
    __typename: "ProductsWarehouse",
    id: string,
    warehouseId: string,
    productsId: string,
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      quantity?: number | null,
      description?: string | null,
      unit_price?: number | null,
      markup_percentage?: number | null,
      sale_price?: number | null,
      is_deleted?: boolean | null,
      type: ProductType,
      product_images: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProductsWarehouseMutationVariables = {
  input: DeleteProductsWarehouseInput,
  condition?: ModelProductsWarehouseConditionInput | null,
};

export type DeleteProductsWarehouseMutation = {
  deleteProductsWarehouse?:  {
    __typename: "ProductsWarehouse",
    id: string,
    warehouseId: string,
    productsId: string,
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      quantity?: number | null,
      description?: string | null,
      unit_price?: number | null,
      markup_percentage?: number | null,
      sale_price?: number | null,
      is_deleted?: boolean | null,
      type: ProductType,
      product_images: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetWarehouseQueryVariables = {
  id: string,
};

export type GetWarehouseQuery = {
  getWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    products?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListWarehousesQueryVariables = {
  filter?: ModelWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWarehousesQuery = {
  listWarehouses?:  {
    __typename: "ModelWarehouseConnection",
    items:  Array< {
      __typename: "Warehouse",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductsQueryVariables = {
  id: string,
};

export type GetProductsQuery = {
  getProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    quantity?: number | null,
    description?: string | null,
    unit_price?: number | null,
    markup_percentage?: number | null,
    sale_price?: number | null,
    is_deleted?: boolean | null,
    type: ProductType,
    product_images: Array< string | null >,
    Warehouses?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductsConnection",
    items:  Array< {
      __typename: "Products",
      id: string,
      name: string,
      quantity?: number | null,
      description?: string | null,
      unit_price?: number | null,
      markup_percentage?: number | null,
      sale_price?: number | null,
      is_deleted?: boolean | null,
      type: ProductType,
      product_images: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProductsWarehouseQueryVariables = {
  id: string,
};

export type GetProductsWarehouseQuery = {
  getProductsWarehouse?:  {
    __typename: "ProductsWarehouse",
    id: string,
    warehouseId: string,
    productsId: string,
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      quantity?: number | null,
      description?: string | null,
      unit_price?: number | null,
      markup_percentage?: number | null,
      sale_price?: number | null,
      is_deleted?: boolean | null,
      type: ProductType,
      product_images: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProductsWarehousesQueryVariables = {
  filter?: ModelProductsWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsWarehousesQuery = {
  listProductsWarehouses?:  {
    __typename: "ModelProductsWarehouseConnection",
    items:  Array< {
      __typename: "ProductsWarehouse",
      id: string,
      warehouseId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsWarehousesByWarehouseIdQueryVariables = {
  warehouseId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsWarehousesByWarehouseIdQuery = {
  productsWarehousesByWarehouseId?:  {
    __typename: "ModelProductsWarehouseConnection",
    items:  Array< {
      __typename: "ProductsWarehouse",
      id: string,
      warehouseId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ProductsWarehousesByProductsIdQueryVariables = {
  productsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductsWarehouseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsWarehousesByProductsIdQuery = {
  productsWarehousesByProductsId?:  {
    __typename: "ModelProductsWarehouseConnection",
    items:  Array< {
      __typename: "ProductsWarehouse",
      id: string,
      warehouseId: string,
      productsId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
  owner?: string | null,
};

export type OnCreateWarehouseSubscription = {
  onCreateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    products?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWarehouseSubscription = {
  onUpdateWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    products?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionWarehouseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWarehouseSubscription = {
  onDeleteWarehouse?:  {
    __typename: "Warehouse",
    id: string,
    name: string,
    description?: string | null,
    location?: string | null,
    products?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductsSubscription = {
  onCreateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    quantity?: number | null,
    description?: string | null,
    unit_price?: number | null,
    markup_percentage?: number | null,
    sale_price?: number | null,
    is_deleted?: boolean | null,
    type: ProductType,
    product_images: Array< string | null >,
    Warehouses?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductsSubscription = {
  onUpdateProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    quantity?: number | null,
    description?: string | null,
    unit_price?: number | null,
    markup_percentage?: number | null,
    sale_price?: number | null,
    is_deleted?: boolean | null,
    type: ProductType,
    product_images: Array< string | null >,
    Warehouses?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProductsSubscriptionVariables = {
  filter?: ModelSubscriptionProductsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductsSubscription = {
  onDeleteProducts?:  {
    __typename: "Products",
    id: string,
    name: string,
    quantity?: number | null,
    description?: string | null,
    unit_price?: number | null,
    markup_percentage?: number | null,
    sale_price?: number | null,
    is_deleted?: boolean | null,
    type: ProductType,
    product_images: Array< string | null >,
    Warehouses?:  {
      __typename: "ModelProductsWarehouseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProductsWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionProductsWarehouseFilterInput | null,
  owner?: string | null,
};

export type OnCreateProductsWarehouseSubscription = {
  onCreateProductsWarehouse?:  {
    __typename: "ProductsWarehouse",
    id: string,
    warehouseId: string,
    productsId: string,
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      quantity?: number | null,
      description?: string | null,
      unit_price?: number | null,
      markup_percentage?: number | null,
      sale_price?: number | null,
      is_deleted?: boolean | null,
      type: ProductType,
      product_images: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProductsWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionProductsWarehouseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProductsWarehouseSubscription = {
  onUpdateProductsWarehouse?:  {
    __typename: "ProductsWarehouse",
    id: string,
    warehouseId: string,
    productsId: string,
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      quantity?: number | null,
      description?: string | null,
      unit_price?: number | null,
      markup_percentage?: number | null,
      sale_price?: number | null,
      is_deleted?: boolean | null,
      type: ProductType,
      product_images: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProductsWarehouseSubscriptionVariables = {
  filter?: ModelSubscriptionProductsWarehouseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProductsWarehouseSubscription = {
  onDeleteProductsWarehouse?:  {
    __typename: "ProductsWarehouse",
    id: string,
    warehouseId: string,
    productsId: string,
    warehouse:  {
      __typename: "Warehouse",
      id: string,
      name: string,
      description?: string | null,
      location?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    products:  {
      __typename: "Products",
      id: string,
      name: string,
      quantity?: number | null,
      description?: string | null,
      unit_price?: number | null,
      markup_percentage?: number | null,
      sale_price?: number | null,
      is_deleted?: boolean | null,
      type: ProductType,
      product_images: Array< string | null >,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
