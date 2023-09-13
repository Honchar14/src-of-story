import React from "react";
import "./Checkout.css"
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import ButtonProducts from "../../../assets/ui/ButtonProducts.jsx";
import {useForm} from "react-hook-form";

const Checkout = () => {
    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }

    return (
        <section className='checkout'>
            <Banner><h2>Checkout</h2></Banner>
            <div className='container'>
                <h2 className='checkout_title'>Billing details</h2>
                <div className='checkout_section'>
                    <form className='checkout_form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='checkout_form__first'>
                            <label>
                                <input type="text" placeholder='Name' className='form_input'
                                       {...register('Firstname', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 3,
                                               message: "Min 3 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                            <label>
                                <input type="text" placeholder='Surname' className='form_input'
                                       {...register('Surname', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 3,
                                               message: "Min 3 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                            <label>
                                <input type="text" placeholder='Company name' className='form_input'
                                       {...register('Company name', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 5,
                                               message: "Min 5 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                            <label>
                                <input type="text" placeholder='Country' className='form_input'
                                       {...register('Country', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 1,
                                               message: "Min 1 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                        </div>
                        <div className='checkout_form__last'>
                            <label>
                                <input type="text" placeholder='City' className='form_input'
                                       {...register('City', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 1,
                                               message: "Min 1 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                            <label>
                                <input type="text" placeholder='Address' className='form_input'
                                       {...register('Address', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 5,
                                               message: "Min 5 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                            <label>
                                <input type="text" placeholder='Phone' className='form_input'
                                       {...register('Phone', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 8,
                                               message: "Min 8 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                            <label>
                                <input type="text" placeholder='E-mail' className='form_input'
                                       {...register('E-mail', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 8,
                                               message: "Min 8 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                            <label>
                                <input type="text" placeholder='Zip-code' className='form_input'
                                       {...register('Zip-code', {
                                           required: 'Area must be empty!',
                                           minLength: {
                                               value: 4,
                                               message: "Min 4 words"
                                           }
                                       })}
                                />
                            </label>
                            <div style={{ height: 40 }}>
                                {errors?.Firstname && (
                                    <p style={{ color: 'red' }}>{errors?.Firstname.message || 'Error!'}</p>
                                )}
                            </div>
                        </div>
                    </form>
                    <div className='checkout_payment'>
                        <div className='checkout_payment__total'>
                            <div className='total_products'>
                                <h2>Products</h2>
                                <div className='checkout_product'>

                                </div>
                            </div>
                            <div className='total_total'>
                                <h2>Total:</h2>
                                <p>price</p>
                            </div>
                        </div>
                        <div className='checkout_payment__description'>
                            <button>Direct bank transfer</button>
                            <button>Check payment</button>
                            <button>Cash on delivery</button>
                        </div>
                        <ButtonProducts className={'checkout_btn'} disabled={!isValid}>Place order</ButtonProducts>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout