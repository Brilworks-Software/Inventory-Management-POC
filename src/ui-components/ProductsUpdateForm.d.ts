/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ProductsUpdateFormInputValues = {
    name?: string;
    quantity?: number;
    description?: string;
    unit_price?: number;
    markup_percentage?: number;
    sale_price?: number;
    is_deleted?: boolean;
    type?: string;
    product_images?: string[];
};
export declare type ProductsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    description?: ValidationFunction<string>;
    unit_price?: ValidationFunction<number>;
    markup_percentage?: ValidationFunction<number>;
    sale_price?: ValidationFunction<number>;
    is_deleted?: ValidationFunction<boolean>;
    type?: ValidationFunction<string>;
    product_images?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductsUpdateFormOverridesProps = {
    ProductsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    unit_price?: PrimitiveOverrideProps<TextFieldProps>;
    markup_percentage?: PrimitiveOverrideProps<TextFieldProps>;
    sale_price?: PrimitiveOverrideProps<TextFieldProps>;
    is_deleted?: PrimitiveOverrideProps<SwitchFieldProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    product_images?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProductsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    products?: any;
    onSubmit?: (fields: ProductsUpdateFormInputValues) => ProductsUpdateFormInputValues;
    onSuccess?: (fields: ProductsUpdateFormInputValues) => void;
    onError?: (fields: ProductsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProductsUpdateFormInputValues) => ProductsUpdateFormInputValues;
    onValidate?: ProductsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProductsUpdateForm(props: ProductsUpdateFormProps): React.ReactElement;
