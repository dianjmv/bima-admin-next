// @flow
import * as React from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiSelector } from "@react-icons/all-files/hi/HiSelector";
import { Fragment } from "react";
import { HiCheck } from "@react-icons/all-files/hi/HiCheck";
import { ErrorMessage, Field } from "formik";

type Props = {
  name: string;
  label?: string;
  options: any;
};
export default function FormFieldSelect(props: Props) {
  return (
    <>
      <div className="sm:col-span-2">
        <div className="mt-1">
          <Field
            as="select"
            id={props?.name}
            name={props.name}
            className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option
              value={0}
              className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              Selecciona una opción
            </option>
            {props?.options?.map((optn, index) => (
              <option
                value={optn.id}
                label={optn.name}
                key={index}
                className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
              />
            ))}
          </Field>
          <ErrorMessage
            name={props.name}
            render={(msg) => (
              <div className="text-red-500 font-semibold">{msg}</div>
            )}
          />
        </div>
      </div>
    </>
  );
}
