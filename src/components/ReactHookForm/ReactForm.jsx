import { useForm } from "react-hook-form";
import "./reactForm.css";
function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        window.alert(JSON.stringify(data));
    };
    return (
        <div>
            <h1>Employee Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="hook">
                <label className="hook_text">First Name</label>
                <input type="text" className="hook__input" {...register("firstName", { required: true, minLength: 5 })}/>
                {errors.firstName && (<p className="hook__error">First name is required and must be more than 5 characters in length</p>)}
                <label className="hook_text">Last Name</label>
                <input type="text" className="hook__input" {...register("lastName", { required: true })}/>
                {errors.lastName && (<p className="hook__error">Last name is required</p>)}
                <label className="hook__text">Email</label>
                <input type="email" className="hook__input" {...register("email", { required: true, pattern: /^\S+@\S+$/i })}/>
                {errors.email && (<p className="hook__error">Email is required and must be valid</p>)}
                <label className="hook__text">Phone Number</label>
                <input type="tel" className="hook__input" {...register("phone", { required: true, pattern: `^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$` })}/>
                {errors.phone && (<p className="hook__error">Phone number is required and must be in Canadian format</p>)}
                <label htmlFor="qualification">
                    <h4>Highest Qualification</h4>
                </label>
                <label htmlFor="qualification_highschool" className="radio_text">
                    <input className="hook__radioinput" type="radio" name="qualification" value="highschool" {...register("qualification", { required: true })}/>
                    Highschool Graduate
                </label>
                <br />
                <br />
                <label htmlFor="qualification_postsecondary" className="radio_text">
                    <input className="hook__radioinput" type="radio" name="qualification" value="undergrad" {...register("qualification", { required: true })}/>
                    Undergraduate
                </label>
                <br />
                <br />
                <label htmlFor="qualification_masters" className="radio_text">
                    <input className="hook__radioinput" type="radio" name="qualification" value="postgrad" {...register("qualification", { required: true })}/>
                    Postgraduate
                </label>
                <br />
                <br />
                <label htmlFor="qualification_other" className="radio_text">
                    <input className="hook__radioinput" type="radio" name="qualification" value="other" {...register("qualification", { required: true })}/>
                    Other
                </label>
                <br />
                {errors.qualification && (<p className="hook__error">Qualification is required</p>)}
                <br />
                <button className="hook__button" type="submit">
                    Submit
                </button>
                <button className="hook_button" type="reset">
                    Reset
                </button>
            </form>
        </div>
    );
}
export default RegisterForm;
