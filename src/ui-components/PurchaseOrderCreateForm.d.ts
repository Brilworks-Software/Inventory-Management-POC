/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
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
export declare type PurchaseOrderCreateFormInputValues = {};
export declare type PurchaseOrderCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PurchaseOrderCreateFormOverridesProps = {
    PurchaseOrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type PurchaseOrderCreateFormProps = React.PropsWithChildren<{
    overrides?: PurchaseOrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PurchaseOrderCreateFormInputValues) => PurchaseOrderCreateFormInputValues;
    onSuccess?: (fields: PurchaseOrderCreateFormInputValues) => void;
    onError?: (fields: PurchaseOrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PurchaseOrderCreateFormInputValues) => PurchaseOrderCreateFormInputValues;
    onValidate?: PurchaseOrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function PurchaseOrderCreateForm(props: PurchaseOrderCreateFormProps): React.ReactElement;
