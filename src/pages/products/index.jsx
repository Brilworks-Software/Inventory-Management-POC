import {
  Alert,
  Button,
  Card,
  Flex,
  Heading,
  Icon,
  Loader,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { FaPlus } from "react-icons/fa";
import { ProductsCreateForm, ProductsCollection } from "../../ui-components";
import { useState } from "react";

function Products({ signOut, user }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  return (
    <>
      <Flex direction="column" gap="5px">
        <Card variation="elevated">
          <Flex
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
          >
            <Heading level={3}>Products</Heading>
            <Button
              gap="0.5rem"
              size="small"
              onClick={() => setShowAddProductForm(!showAddProductForm)}
            >
              <FaPlus /> Add
            </Button>
          </Flex>
        </Card>

        <Card variation="elevated">
          {showAddProductForm ? (
            <>
              <ProductsCreateForm
                onSubmit={(fields) => {
                  setIsSubmitting(true);
                  return fields;
                }}
                onSuccess={() => {
                  setIsSubmitting(false);
                }}
              />
              {isSubmitting && <Loader size="large" variation="linear" />}
            </>
          ) : (
            <ProductsCollection />
          )}
        </Card>
      </Flex>
    </>
  );
}

export default withAuthenticator(Products);
