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
export declare type WarehouseUpdateFormInputValues = {};
export declare type WarehouseUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WarehouseUpdateFormOverridesProps = {
    WarehouseUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type WarehouseUpdateFormProps = React.PropsWithChildren<{
    overrides?: WarehouseUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    warehouse?: any;
    onSubmit?: (fields: WarehouseUpdateFormInputValues) => WarehouseUpdateFormInputValues;
    onSuccess?: (fields: WarehouseUpdateFormInputValues) => void;
    onError?: (fields: WarehouseUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WarehouseUpdateFormInputValues) => WarehouseUpdateFormInputValues;
    onValidate?: WarehouseUpdateFormValidationValues;
} & React.CSSProperties>;
export default function WarehouseUpdateForm(props: WarehouseUpdateFormProps): React.ReactElement;
