import React, {useState} from "react";
import "./AdminPanel.css"
import Banner from "../categories(kids, man, girls)/multiComponents/Banner.jsx";
import ButtonProducts from "../../../assets/ui/ButtonProducts.jsx";
import PopUp from "../../../assets/ui/pop-up/Pop-up.jsx";
import Map from "./components/Map.jsx"
import { useForm } from "react-hook-form";

const AdminPanel = () => {
    const [modalActive, setModalActive] = useState(false)

    const {
        register,
        formState : {errors, isValid},
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    });

    const toggleModal = () => {
        setModalActive(!modalActive);
    };

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }


    return (
        <section className='admin'>
            <Banner>
                <h2>Person area</h2>
            </Banner>
            <div className='container container_admin'>
                <img src="../../../../public/img/shoes.jpg" alt="" className='shoes_jordan'/>
                <img src="../../../../public/img/shoes2.jpg" alt="" className='shoes_jordan shoes_jordan_two'/>
                <img src="../../../../public/img/shoes3.png" alt="" className='shoes_jordan shoes_jordan_three'/>
                <img src="../../../../public/img/shoes4.png" alt="" className='shoes_jordan shoes_jordan_four'/>
                <div className='admin_block'>
                    <div className='admin_photo'>
                        <div className='admin_photo__image'></div>
                        <img src="../../../../public/img/camera.png" alt="camera-icon" className='camera_icon hidden'/>
                        <h2 className='admin_photo__name'>Saga Louren</h2>
                    </div>
                    <div className='admin_settings'>
                        <form onSubmit={handleSubmit(onSubmit)} className='admin_settings__global'>
                            <h2 className='fio settings_title'>FIO</h2>

                            <label>
                                <input type="text" placeholder='Name' className='full-width-input'
                                       {...register('firstname', {
                                           required:"Area must be filled!",
                                           minLength: {value: 3, message: 'text must contain at least 3 characters'}
                                       })}
                                />
                            </label>
                            <div style={{height: "20px"}}>{errors?.firstname && <p style={{color:"red"}}>{errors?.firstname?.message || "Error!"}</p>}</div>

                            <label>
                                <input type="text" placeholder='Lastname' className='full-width-input'
                                       {...register('lastname', {
                                           required:"Area must be filled!",
                                           minLength: {value: 3, message: 'text must contain at least 3 characters'}
                                       })}
                                />
                            </label>
                            <div style={{height: "20px"}}>{errors?.lastname && <p style={{color:"red"}}>{errors?.lastname?.message || "Error!"}</p>}</div>

                            <h2 className='global_title settings_title'>Rename your Login/Password</h2>

                            <label>
                                <input type="text" placeholder='Your login' className='full-width-input'
                                       {...register('login', {
                                           required:"Area must be filled!",
                                       })}
                                />
                            </label>
                            <div style={{height: "20px"}}>{errors?.login && <p style={{color:"red"}}>{errors?.login?.message || "Error!"}</p>}</div>

                            <label>
                                <input type="password" placeholder='Your password' className='full-width-input'
                                       {...register('password', {
                                           required:"Area must be filled!",
                                           minLength: {value: 3, message: 'password must contain at least 3 characters'}
                                       })}
                                />
                            </label>
                            <div style={{height: "20px"}}>{errors?.password && <p style={{color:"red"}}>{errors?.password?.message || "Error!"}</p>}</div>

                            <h2 className='global_title_Phone settings_title'>Rename your Phone/Mail</h2>

                            <label>
                                <input type="number" placeholder='Your phone' className='full-width-input'
                                       {...register('phone', {
                                           required:"Area must be filled!",
                                           minLength: {value: 6, message: 'number must contain at least 6 characters'}
                                       })}
                                />
                            </label>
                            <div style={{height: "20px"}}>{errors?.phone && <p style={{color:"red"}}>{errors?.phone?.message || "Error!"}</p>}</div>
                            <label>
                                <input type="text" placeholder='Your Mail' className='full-width-input'
                                       {...register('mail', {
                                           required:"Area must be filled!",
                                           minLength: {value: 6, message: 'mail must contain at least 6 characters'}
                                       })}
                                />
                            </label>
                            <div style={{height: "20px"}}>{errors?.mail && <p style={{color:"red"}}>{errors?.mail?.message || "Error!"}</p>}</div>
                            <ButtonProducts className={'admin_btn'} disabled={!isValid}>Save changes</ButtonProducts>
                            <p className='global_description'>Sneakers store 2023, take care with us and let's go
                                shopping!</p>
                        </form>

                    </div>
                    <Map></Map>

                </div>
            </div>
        </section>
    )
}

export default AdminPanel