import {ChangeHandler, Message, MultipleFieldErrors, Ref} from "react-hook-form";
import React from "react";

export interface IRegister {
    name: string,
    email: string,
    password: string,
    repeatPassword: string,
}

export enum NameIFiendSignIn {
    email = 'email',
    password = 'password',
}

export enum NameIField {
    name = 'name',
    email = 'email',
    password = 'password',
    repeatPassword = 'repeatPassword',
}

export enum TypeInput {
    text = 'text',
    password = 'password',
}

export interface IField {
    name: NameIField,
    placeholder: string,
    type: TypeInput,
}

export interface IFieldSign {
    name: NameIFiendSignIn,
    placeholder: string,
    type: TypeInput,
}

export type FieldError = {
    type: string,
    ref?: Ref,
    types?: MultipleFieldErrors,
    message?: Message,
}
export interface IRegisterHook {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    name: string;
    ref: React.Ref<any>;
}
export interface IForTest {
    testId?: string,
    errorTestId: string,
}

export enum RegOrSig {
    signIn = 'signIn',
    signUp = 'signUp'
}