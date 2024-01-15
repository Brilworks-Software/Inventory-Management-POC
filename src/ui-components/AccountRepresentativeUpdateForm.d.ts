/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AccountRepresentativeUpdateFormInputValues = {
    orderTotal?: number;
    salesPeriod?: string;
};
export declare type AccountRepresentativeUpdateFormValidationValues = {
    orderTotal?: ValidationFunction<number>;
    salesPeriod?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AccountRepresentativeUpdateFormOverridesProps = {
    AccountRepresentativeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderTotal?: PrimitiveOverrideProps<TextFieldProps>;
    salesPeriod?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AccountRepresentativeUpdateFormProps = React.PropsWithChildren<{
    overrides?: AccountRepresentativeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    accountRepresentative?: any;
    onSubmit?: (fields: AccountRepresentativeUpdateFormInputValues) => AccountRepresentativeUpdateFormInputValues;
    onSuccess?: (fields: AccountRepresentativeUpdateFormInputValues) => void;
    onError?: (fields: AccountRepresentativeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AccountRepresentativeUpdateFormInputValues) => AccountRepresentativeUpdateFormInputValues;
    onValidate?: AccountRepresentativeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AccountRepresentativeUpdateForm(props: AccountRepresentativeUpdateFormProps): React.ReactElement;
