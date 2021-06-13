// @flow
import * as React from 'react';
import {useRouter} from "next/router";
import {useAuthInfo} from "@/store/auth/authHooks";
import {useSetEnterprise} from "@/store/enterprise/enterpriseHooks";
import {useEffect, useState} from "react";
import {Enterprises} from "@/types/Enterprises";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {Form, Formik} from "formik";
import FormFieldSelect from "@/components/atoms/FormFieldSelect";
import ButtonBima from "@/components/atoms/ButtonBima";


export const Chose = () => {
    const router = useRouter();
    const userStore = useAuthInfo();
    const setEnterprise = useSetEnterprise()
    const [enterprises, setEnterprises] = useState([]);
    const [selected, setSelected] = useState<Enterprises | any>({
        name: "Empresas",
    });

    const validationSchema = Yup.object().shape({
        enterprise: Yup.string().required("Debe seleccionar un elemento"),
    });
    useEffect(() => {
        setEnterprises(userStore?.userLogged?.enterprises);
    }, [userStore]);
    if (enterprises?.length === 1) {
        router.push("/auth/signin");
    }

    async function onSubmit(values, {setSubmitting, resetForm, setStatus}) {
        if (values.enterprise === "0" || !values.enterprise) {
            toast.error('Debe seleccionar una empresa');
        } else {
            const [enterprise] = enterprises.filter((item) =>
                item.id === parseInt(values.enterprise)
            )
            await setEnterprise(enterprise);
            await router.push("/");
        }
    }

    return (
        <div
            className={"container mx-auto flex justify-center h-screen items-center"}
        >
            <div className={"grid grid-cols-1 gap-y-4"}>
                <h1 className={"font-semibold text-center text-4xl"}>
                    Selecciona una empresa
                </h1>
                <Formik
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    isInitialValid={false}
                    initialValues={[]}
                >
                    <Form>
                        <FormFieldSelect
                            name={"enterprise"}
                            options={enterprises ? enterprises : []}
                            label={"Empresas"}
                        />
                        <ButtonBima type="submit" typeButton={"primary"} className={"mt-6"}>
                            Continuar
                        </ButtonBima>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};
export default Chose;
