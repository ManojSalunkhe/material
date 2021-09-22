import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required().min(6)
})

// THIS FILE IS ONLY FOR PRACTICE THIS IS NOT INCLUDED IN THE PROJECT
function HookForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    console.log(errors)

    const onSubmit = data => console.log(data)
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>username</label><br />
                <input {...register("username")} /><br />
                <p> {errors.username?.message}</p>
                <input {...register("password")} /><br />
                {errors.password?.message}
                <select {...register("gender")}>
                    <option >select </option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default HookForm
