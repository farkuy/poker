import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import {IField, NameIField, TypeInput} from "../models/IAuth";
import {FormSchemaSigUp, signUpSchema} from "../models/model";
import InputForSignUp from "../../../mini/InputForSignUp/UI/InputForSignUp";
import Buttons from "../../../mini/Button/Buttons";


const authField: IField[] = [
    {
        name: NameIField.name,
        placeholder: 'Ваше имя',
        type: TypeInput.text,
    },
    {
        name: NameIField.email,
        placeholder: 'Ваш email',
        type: TypeInput.text,
    },
    {
        name: NameIField.password,
        placeholder: 'Ваш пароль',
        type: TypeInput.password,
    },
    {
        name: NameIField.repeatPassword,
        placeholder: 'Повторите пароль',
        type: TypeInput.password,
    },
]

const AuthModal = () => {
    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        trigger,
        formState: { isDirty, isSubmitting, errors },} = useForm<FormSchemaSigUp>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: '',
        }
    });

    const registerSubmit: SubmitHandler<FormSchemaSigUp> = (data) => {
        alert('Вы зарегестрировались')
    };

    return (
        <div>
            <div className={'w-screen h-screen bg-[#985ACE] backdrop-opacity-10'}>
            </div>
            <form
                data-testid="add_new_user"
                onSubmit={handleSubmit(registerSubmit)}
                className={'absolute top-1/2 left-1/2 max-w-[500px] w-full px-[50px] py-[60px] z-50 rounded-md bg-white'}
            >
                {
                    authField.map((item, index) => {
                        return (
                            <InputForSignUp
                                placeholder={item.placeholder}
                                register={register(item.name)}
                                typeInputForSignUp={item.type}
                                error={errors[item.name]}
                                testId={`new_user_${item.name}`}
                                errorTestId={`error_message_${item.name}`}
                                key={index}
                            />
                        )
                    })
                }
                <div>
                    <Buttons
                        style={'text-white min-h-[40px] bg-[#985ACE]'}
                    >
                        Регистрация
                    </Buttons>
                </div>
            </form>
        </div>
    );
}

export default AuthModal;
