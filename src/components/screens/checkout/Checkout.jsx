import React, {useState} from "react";
import "./Checkout.css"
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import ButtonProducts from "../../../assets/ui/ButtonProducts.jsx";
import {useForm} from "react-hook-form";
import {useSelector} from "react-redux";

const Checkout = () => {
    const [radioBtnContents, setRadioBtnContents] = useState({
        bankTransfer: false,
        checkPayment: false,
        cashOnDelivery: false,
    });
    const products = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = products.reduce((acc, product) => {
        return acc + (product.props.totalPrice * product.props.quantity);
    }, 0);

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

    const toggleRadioBtn = (value) => {

        const updatedContents = {};

        if (value === "bankTransfer") {
            updatedContents.bankTransfer = !radioBtnContents.bankTransfer;
            updatedContents.checkPayment = false;
            updatedContents.cashOnDelivery = false;
        } else if (value === "checkPayment") {
            updatedContents.bankTransfer = false;
            updatedContents.checkPayment = !radioBtnContents.checkPayment;
            updatedContents.cashOnDelivery = false;
        } else if (value === "cashOnDelivery") {
            updatedContents.bankTransfer = false;
            updatedContents.checkPayment = false;
            updatedContents.cashOnDelivery = !radioBtnContents.cashOnDelivery;
        } else {
            updatedContents.bankTransfer = false;
            updatedContents.checkPayment = false;
            updatedContents.cashOnDelivery = false;
        }

        setRadioBtnContents(updatedContents);
    };

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    }

    return (
        <section className='checkout'>
            <Banner><h2>Checkout</h2></Banner>
            <div className='container checkout_container'>
                <h2 className='checkout_title'>Billing details</h2>
                <div className='checkout_section'>
                    <form className="checkout_form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="checkout_form__first">
                            <div className='form_first'>
                                <label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="form_input"
                                        {...register("firstname", {
                                            required: "Field must not be empty",
                                            minLength: {
                                                value: 3,
                                                message: "Min 3 characters",
                                            },
                                        })}
                                    />
                                </label>
                                <div style={{height: 40}}>
                                    {errors?.firstname && (
                                        <p style={{color: "red"}}>{errors?.firstname.message}</p>
                                    )}
                                </div>
                                <label>
                                    <input
                                        type="text"
                                        placeholder="Surname"
                                        className="form_input"
                                        {...register("surname", {
                                            required: "Field must not be empty",
                                            minLength: {
                                                value: 3,
                                                message: "Min 3 characters",
                                            },
                                        })}
                                    />
                                </label>
                                <div style={{height: 40}}>
                                    {errors?.surname && (
                                        <p style={{color: "red"}}>{errors?.surname.message}</p>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label>
                                    <input
                                        type="text"
                                        placeholder="Company name"
                                        className="form_input"
                                        {...register("companyName", {
                                            required: "Field must not be empty",
                                            minLength: {
                                                value: 5,
                                                message: "Min 5 characters",
                                            },
                                        })}
                                    />
                                </label>
                                <div style={{height: 40}}>
                                    {errors?.companyName && (
                                        <p style={{color: "red"}}>{errors?.companyName.message}</p>
                                    )}
                                </div>
                                <label>
                                    <input
                                        type="text"
                                        placeholder="Country"
                                        className="form_input"
                                        {...register("country", {
                                            required: "Field must not be empty",
                                            minLength: {
                                                value: 1,
                                                message: "Min 1 character",
                                            },
                                        })}
                                    />
                                </label>
                                <div style={{height: 40}}>
                                    {errors?.country && (
                                        <p style={{color: "red"}}>{errors?.country.message}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="checkout_form__last">
                            <label>
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="form_input"
                                    {...register("city", {
                                        required: "Field must not be empty",
                                        minLength: {
                                            value: 1,
                                            message: "Min 1 character",
                                        },
                                    })}
                                />
                            </label>
                            <div style={{height: 40}}>
                                {errors?.city && (
                                    <p style={{color: "red"}}>{errors?.city.message}</p>
                                )}
                            </div>
                            <label>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="form_input"
                                    {...register("address", {
                                        required: "Field must not be empty",
                                        minLength: {
                                            value: 5,
                                            message: "Min 5 characters",
                                        },
                                    })}
                                />
                            </label>
                            <div style={{height: 40}}>
                                {errors?.address && (
                                    <p style={{color: "red"}}>{errors?.address.message}</p>
                                )}
                            </div>
                            <label>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="form_input"
                                    {...register("phone", {
                                        required: "Field must not be empty",
                                        minLength: {
                                            value: 8,
                                            message: "Min 8 characters",
                                        },
                                    })}
                                />
                            </label>
                            <div style={{height: 40}}>
                                {errors?.phone && (
                                    <p style={{color: "red"}}>{errors?.phone.message}</p>
                                )}
                            </div>
                            <label>
                                <input
                                    type="text"
                                    placeholder="E-mail"
                                    className="form_input"
                                    {...register("email", {
                                        required: "Field must not be empty",
                                        minLength: {
                                            value: 8,
                                            message: "Min 8 characters",
                                        },
                                    })}
                                />
                            </label>
                            <div style={{height: 40}}>
                                {errors?.email && (
                                    <p style={{color: "red"}}>{errors?.email.message}</p>
                                )}
                            </div>
                            <label>
                                <input
                                    type="text"
                                    placeholder="Zip-code"
                                    className="form_input"
                                    {...register("zipCode", {
                                        required: "Field must not be empty",
                                        minLength: {
                                            value: 4,
                                            message: "Min 4 characters",
                                        },
                                    })}
                                />
                            </label>
                            <div style={{height: 40}}>
                                {errors?.zipCode && (
                                    <p style={{color: "red"}}>{errors?.zipCode.message}</p>
                                )}
                            </div>
                        </div>
                    </form>
                    <div className='checkout_payment'>
                        <div className='checkout_payment__total'>
                            <h2 className='checkout_payment__title'>Products</h2>
                            <div className='total_products'>
                                {products.map((product) => (
                                    <div className='checkout_product'>{product.title}</div>
                                ))}
                            </div>
                            <div className='total_total'>
                                <h2 className='checkout_payment__title'>Total:</h2>
                                <p>{totalPrice}$</p>
                            </div>
                        </div>
                        <div className='checkout_payment__description'>
                            <label className='description_label'>
                                <input type="radio" name="paymentOption" className='radio_btn'
                                       value="bankTransfer" {...register('paymentOption')}
                                       onClick={() => toggleRadioBtn("bankTransfer")}/>
                                <p className='input_title'>Direct bank transfer</p>
                            </label>
                            {radioBtnContents.bankTransfer && (
                                <p className='radio_btn_content'>Bank transfers provide a safe way for customers to send
                                    money over bank rails.</p>
                            )}
                            <label className='description_label'>
                                <input type="radio" name="paymentOption" className='radio_btn'
                                       value="checkPayment" {...register('paymentOption')}
                                       onClick={() => toggleRadioBtn("checkPayment")}/>
                                <p className='input_title'>Check payment</p>
                            </label>
                            {radioBtnContents.checkPayment && (
                                <p className='radio_btn_content'>Bank transfers provide a safe way for customers to send
                                    money over bank rails.</p>
                            )}
                            <label className='description_label'>
                                <input type="radio" name="paymentOption" className='radio_btn'
                                       value="cashOnDelivery" {...register('paymentOption')}
                                       onClick={() => toggleRadioBtn("cashOnDelivery")}/>
                                <p className='input_title'>Cash on delivery</p>
                            </label>
                            {radioBtnContents.cashOnDelivery && (
                                <p className='radio_btn_content'>Bank transfers provide a safe way for customers to send
                                    money over bank rails.</p>
                            )}
                        </div>
                        <ButtonProducts className={'checkout_btn'} disabled={!isValid}>Place order</ButtonProducts>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Checkout