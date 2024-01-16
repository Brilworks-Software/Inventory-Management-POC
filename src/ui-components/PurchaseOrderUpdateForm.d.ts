/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { PurchaseOrder } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PurchaseOrderUpdateFormInputValues = {};
export declare type PurchaseOrderUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PurchaseOrderUpdateFormOverridesProps = {
    PurchaseOrderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type PurchaseOrderUpdateFormProps = React.PropsWithChildren<{
    overrides?: PurchaseOrderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    purchaseOrder?: PurchaseOrder;
    onSubmit?: (fields: PurchaseOrderUpdateFormInputValues) => PurchaseOrderUpdateFormInputValues;
    onSuccess?: (fields: PurchaseOrderUpdateFormInputValues) => void;
    onError?: (fields: PurchaseOrderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PurchaseOrderUpdateFormInputValues) => PurchaseOrderUpdateFormInputValues;
    onValidate?: PurchaseOrderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PurchaseOrderUpdateForm(props: PurchaseOrderUpdateFormProps): React.ReactElement;
