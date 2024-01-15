/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      customerID
      accountRepresentativeID
      productID
      status
      amount
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      phoneNumber
      accountRepresentativeID
      ordersByDate {
        nextToken
        __typename
      }
      ordersByStatusDate {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phoneNumber
        accountRepresentativeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      name
      startDate
      phoneNumber
      warehouseID
      jobTitle
      newHire
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getWarehouse = /* GraphQL */ `
  query GetWarehouse($id: ID!) {
    getWarehouse(id: $id) {
      id
      employees {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listWarehouses = /* GraphQL */ `
  query ListWarehouses(
    $filter: ModelWarehouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWarehouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAccountRepresentative = /* GraphQL */ `
  query GetAccountRepresentative($id: ID!) {
    getAccountRepresentative(id: $id) {
      id
      customers {
        nextToken
        __typename
      }
      orders {
        nextToken
        __typename
      }
      orderTotal
      salesPeriod
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAccountRepresentatives = /* GraphQL */ `
  query ListAccountRepresentatives(
    $filter: ModelAccountRepresentativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccountRepresentatives(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderTotal
        salesPeriod
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($productID: ID!, $warehouseID: ID!) {
    getInventory(productID: $productID, warehouseID: $warehouseID) {
      productID
      warehouseID
      inventoryAmount
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInventories = /* GraphQL */ `
  query ListInventories(
    $productID: ID
    $warehouseID: ModelIDKeyConditionInput
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listInventories(
      productID: $productID
      warehouseID: $warehouseID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        productID
        warehouseID
        inventoryAmount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      orders {
        nextToken
        __typename
      }
      inventories {
        nextToken
        __typename
      }
      quantity
      description
      unit_price
      markup_percentage
      sale_price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        description
        unit_price
        markup_percentage
        sale_price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByCustomerIDAndStatusAndDate = /* GraphQL */ `
  query OrdersByCustomerIDAndStatusAndDate(
    $customerID: ID!
    $statusDate: ModelOrderByCustomerByStatusByDateCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCustomerIDAndStatusAndDate(
      customerID: $customerID
      statusDate: $statusDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByCustomerIDAndDate = /* GraphQL */ `
  query OrdersByCustomerIDAndDate(
    $customerID: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByCustomerIDAndDate(
      customerID: $customerID
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByAccountRepresentativeIDAndDate = /* GraphQL */ `
  query OrdersByAccountRepresentativeIDAndDate(
    $accountRepresentativeID: ID!
    $date: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByAccountRepresentativeIDAndDate(
      accountRepresentativeID: $accountRepresentativeID
      date: $date
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const ordersByProductIDAndId = /* GraphQL */ `
  query OrdersByProductIDAndId(
    $productID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByProductIDAndId(
      productID: $productID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        customerID
        accountRepresentativeID
        productID
        status
        amount
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const customersByAccountRepresentativeIDAndId = /* GraphQL */ `
  query CustomersByAccountRepresentativeIDAndId(
    $accountRepresentativeID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    customersByAccountRepresentativeIDAndId(
      accountRepresentativeID: $accountRepresentativeID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        phoneNumber
        accountRepresentativeID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const employeeByName = /* GraphQL */ `
  query EmployeeByName(
    $name: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeeByName(
      name: $name
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const employeesByWarehouseIDAndId = /* GraphQL */ `
  query EmployeesByWarehouseIDAndId(
    $warehouseID: ID!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByWarehouseIDAndId(
      warehouseID: $warehouseID
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const employeesByJobTitle = /* GraphQL */ `
  query EmployeesByJobTitle(
    $jobTitle: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesByJobTitle(
      jobTitle: $jobTitle
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const employeesNewHire = /* GraphQL */ `
  query EmployeesNewHire(
    $newHire: String!
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesNewHire(
      newHire: $newHire
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const employeesNewHireByStartDate = /* GraphQL */ `
  query EmployeesNewHireByStartDate(
    $newHire: String!
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeesNewHireByStartDate(
      newHire: $newHire
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        startDate
        phoneNumber
        warehouseID
        jobTitle
        newHire
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const repsByPeriodAndTotal = /* GraphQL */ `
  query RepsByPeriodAndTotal(
    $salesPeriod: String!
    $orderTotal: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountRepresentativeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    repsByPeriodAndTotal(
      salesPeriod: $salesPeriod
      orderTotal: $orderTotal
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        orderTotal
        salesPeriod
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const itemsByWarehouseID = /* GraphQL */ `
  query ItemsByWarehouseID(
    $warehouseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelInventoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByWarehouseID(
      warehouseID: $warehouseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        productID
        warehouseID
        inventoryAmount
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
