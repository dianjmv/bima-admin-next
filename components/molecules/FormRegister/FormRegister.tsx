import {Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {useAuthInfo} from "@/store/auth/authHooks";

function FormRegister({formik}: any) {

    const authState = useAuthInfo();
    const [countrySelected, setCountrySelected] = useState(null);
    const [cities, setCities] = useState([])
    const [citySelected, setCitySelected] = useState(null)
    function handleCountryChange(data) {
        setCountrySelected(data.target.value)
        formik.values.country = data.target.value;
        if (data.target.value === 'CO') {
            const cities = [
                {name: 'Bogotá', value: 'BGTA'},
                {name: 'Cali', value: 'CAL'},
                {name: 'Medellin', value: 'MEDL'},
            ]
            setCities(cities)
            setCitySelected(cities[0].value)
            formik.values.city = countrySelected
        }
        if (data.target.value === 'EC') {
            const cities = [
                {name: 'Quito', value: 'UIO'},
                {name: 'Guayaquil', value: 'GYE'},
                {name: 'Cuenca', value: 'CUE'},
            ]
            setCities(cities)
            setCitySelected(cities[0].value)
        }
        if (data.target.value === 'PE') {
            const cities = [
                {name: 'Bogotá', value: 'PE1'},
                {name: 'Cali', value: 'PE2'},
                {name: 'Medellin', value: 'PE3'},
            ]
            setCities(cities)
            setCitySelected(cities[0].value)
        }
    }

    function handleCityChange(data) {
        setCitySelected(data.target.value)
        formik.values.city = data.target.value
    }
    console.log(!!(formik.isValid || formik.errors))

    return (
        <form className={'grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-3'} onSubmit={formik.handleSubmit}>
            <TextField id="name" label="Nombre" variant="outlined"
                       error={!!(formik.touched.name && formik.errors.name)}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.name}
                       helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
            />
            <TextField id="last_name" label="Apellido" variant="outlined"
                       error={!!(formik.touched.last_name && formik.errors.last_name)}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.last_name}
                       helperText={formik.touched.last_name && formik.errors.last_name ? formik.errors.last_name : null}
            />
            <TextField id="email" label="Email" variant="outlined"
                       error={!!(formik.touched.email && formik.errors.email)}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.email}
                       helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
            />
            <TextField id="username" label="Username" variant="outlined"
                       error={!!(formik.touched.username && formik.errors.username)}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.username}
                       helperText={formik.touched.username && formik.errors.username ? formik.errors.username : null}
            />
            <TextField id="password" label="Contraseña" type={'password'} variant="outlined"
                       error={!!(formik.touched.password && formik.errors.password)}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.password}
                       helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
            />
            <TextField id="password_confirmation" label="Repite la Contraseña" type={'password'} variant="outlined"
                       error={!!(formik.touched.password_confirmation && formik.errors.password_confirmation)}
                       onChange={formik.handleChange}
                       onBlur={formik.handleBlur}
                       value={formik.values.password_confirmation}
                       helperText={formik.touched.password_confirmation && formik.errors.password_confirmation ? formik.errors.password_confirmation : null}
            />

            <select id="country"
                    onChange={handleCountryChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.country}

            >
                <option value={'EC'}>Ecuador</option>
                <option value={'CO'}>Colombia</option>
                <option value={'PE'}>Perú</option>
            </select>
            <select id="city"
                    onChange={handleCityChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.city}
            >
                {
                    cities.length > 0 ?
                        cities.map((city, index) =>
                            <option key={index} value={city.value}>{city.name}</option>
                        ) :
                        <option value={""}>---</option>
                }
            </select>




            {/*<FormControl variant="outlined" >*/}
            {/*    <InputLabel id="demo-simple-select-outlined-label">Pais</InputLabel>*/}
            {/*    <Select*/}
            {/*        labelId="demo-simple-select-outlined-label"*/}
            {/*        id="country"*/}
            {/*        label="Pais"*/}
            {/*        value={countrySelected}*/}
            {/*        onChange={handleCountryChange}*/}

            {/*        onBlur={formik.handleBlur}*/}
            {/*    >*/}
            {/*        <MenuItem value={'EC'}>Ecuador</MenuItem>*/}
            {/*        <MenuItem value={'CO'}>Colombia</MenuItem>*/}
            {/*        <MenuItem value={'PE'}>Perú</MenuItem>*/}
            {/*    </Select>*/}
            {/*    {*/}
            {/*        !!(formik.touched.city && formik.errors.city) ?*/}
            {/*            <FormHelperText>{formik.errors.country}</FormHelperText>*/}
            {/*            : null*/}
            {/*    }*/}
            {/*</FormControl>*/}

            {/*<FormControl variant="outlined" >*/}
            {/*    <InputLabel id="demo-simple-select-outlined-label">Ciudad</InputLabel>*/}
            {/*    <Select*/}
            {/*        labelId="demo-simple-select-outlined-label"*/}
            {/*        id="city"*/}
            {/*        label="Ciudad"*/}
            {/*        value={citySelected}*/}
            {/*        onChange={handleCityChange}*/}
            {/*        onBlur={formik.handleBlur}*/}
            {/*    >*/}
            {/*        {*/}
            {/*            cities.length > 0 ?*/}
            {/*                cities.map(city =>*/}
            {/*                    <MenuItem value={city.value}>{city.name}</MenuItem>*/}
            {/*                ) :*/}
            {/*                <MenuItem value={null}>---</MenuItem>*/}
            {/*        }*/}
            {/*    </Select>*/}
            {/*    {*/}
            {/*        !!(formik.touched.city && formik.errors.city) ?*/}
            {/*            <FormHelperText>{formik.errors.city}</FormHelperText>*/}
            {/*            : null*/}
            {/*    }*/}
            {/*</FormControl>*/}
            <div className={'col-span-2'}>
                <Button variant="contained" color="primary" type={"submit"}
                        disabled={!formik.isValid}>
                    {authState.loading ? 'Cargando' : 'Registrarse'}
                </Button>
            </div>
        </form>
    )


}

export default FormRegister;
