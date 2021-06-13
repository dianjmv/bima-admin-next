import React from "react";
import {Form, Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useLogin} from "@/store/auth/authHooks";
import cn from 'classnames';
import {useRouter} from "next/router";


export default function Login(){
    const router = useRouter()
    const loginUser = useLogin();
    const initialValues = () => ({
        username: '',
        password: '',
        remember_me: true,
    });
    const validationForm = Yup.object({
        username: Yup.string().email('El email no tiene el formato correcto').required('El email es requerído'),
        password: Yup.string().required('La contraseña es requerida'),
        remember_me: Yup.boolean().required('')
    });
    const login = (values: any, { setSubmitting, setErrors, setStatus, resetForm }: any) => {
        try {
            loginUser(values.username, values.password)
        }
        catch (e) {
            console.error(e)
        }
    };
    return(
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <div className={'flex'}>
                        <h1 className={'mr-4 text-4xl font-extrabold text-gray-900'}>Acceda a BIMA</h1>
                        <img
                            className="h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                    </div>

                    <h2 className="mt-6 text-3xl font-semibold text-gray-900">Iniciando sesión en tu cuenta</h2>
                </div>

                <div className="mt-8">
                    <div className="mt-6">
                        <Formik initialValues={initialValues()} onSubmit={login} validationSchema={validationForm}>
                            <Form className={"space-y-6"} >
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <div className="mt-1">
                                        <Field
                                            id="username"
                                            name="username"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className={cn("appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm")}
                                        />
                                        <div className={'text-sm text-red-600'}>
                                            <ErrorMessage name="username"  />
                                        </div>

                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Contraseña
                                    </label>
                                    <div className="mt-1">
                                        <Field
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                        <div className={'text-sm text-red-600'}>
                                            <ErrorMessage name="password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Field
                                            id="remember_me"
                                            name="remember_me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                            Recuerdame
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Iniciar Sesión
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}
