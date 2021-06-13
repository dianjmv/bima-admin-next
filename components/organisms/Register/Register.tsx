
import * as Yup from "yup";
import {Formik} from "formik";
import React from "react";
import FormRegister from "@/components/molecules/FormRegister/";

function Register(){

    const initialValues = () => ({
        username: '',
        password: '',
        name:'',
        last_name:'',
        email: '',
        password_confirmation: '',
        country:'',
        city:'',
    });
    const validationForm = Yup.object({
        email: Yup.string().email('El email no tiene el formato correcto').required('El email es requerído'),
        password: Yup.string().required('La contraseña es requerida').min(3, 'La contraseña debe tener 3 valores mínimos'),
        username : Yup.string().required('El username es requerido'),
        password_confirmation: Yup.string().required('Repita la contraseña').oneOf([Yup.ref('password'), null], 'La contraseña no coincide'),
        country: Yup.string().required('Debe seleccionar un País'),
        city: Yup.string().required('Debe seleccionar una ciudad'),
        name: Yup.string().required('El nombre es requerido'),
        last_name: Yup.string().required('El apellido es requerido'),
    });
    const register = (values: any, { setSubmitting, setErrors, setStatus, resetForm }: any) => {
        console.log(values)
    };
    return(
        <div className={'max-w-xl bg-white px-10 py-6 rounded-md my-auto'}>
            <h1 className={'text-3xl text-center mb-4 font-semibold'}>Registrate en BIMA</h1>
            <Formik initialValues={initialValues()} onSubmit={register} validationSchema={validationForm}>
                {props => <FormRegister formik={props}/>}
            </Formik>
        </div>
    )
}
export default Register
