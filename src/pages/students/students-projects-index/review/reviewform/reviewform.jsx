// import React, { useState } from "react";
// //import studentData from '../../data/studentForm';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import Star from '../../../../../components/star/star';

const ReviewForm = () => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const history = useHistory();

    // console.log(errors);
    // const [{ alt, src }, setImg] = useState({
    //     src: "https://via.placeholder.com/150",
    //     alt: "",
    // });

    const onSubmit = (data) => {
        console.log(data);
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        history.goBack();
    };
    
    const handleClick = () => {
        reset();
        history.goBack();
    };

    // const readURL = (e) => {
    //     if (e.target.files[0]) {
    //     setImg({
    //         src: URL.createObjectURL(e.target.files[0]),
    //         alt: e.target.files[0].name,
    //     });
    //     }
    // };

    return (
        <div className="row mt-4 my-4 px-4 offset-1 form__container">
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
                <div className="col-12 mt-4">
                    <h6>Knowledge of Module</h6>
                    <Star />
                      <label htmlFor="moduleKnowledge">Additional Notes:</label>
                      <input
                      // {...register("moduleKnowledge")}
                      name="moduleKnowledge"
                      className="form-control form__input  my-2"
                      type="text"
                      id="moduleKnowledge"
                      />
                      {/* {errors.firstName && <div className="text-danger">*Required</div>} */}
                </div>

                <div className="col-12 mt-3">
                    <h6>Quality of HTML/CSS</h6>
                    <Star />
                    <label htmlFor="HTML-CSSKnowledge">Additional Notes:</label>
                    <input
                // {...register("lastName", {
                //     required: true,
                //     pattern: /^[A-Za-z]+$/i,
                // })}
                    name="HTML-CSSKnowledge"
                    className="form-control form__input my-2"
                    type="text"
                    id="HTML-CSSKnowledge"
                    />
                    {/* {errors.lastName && <p className="text-danger">*Required</p>} */}
                </div>

                <div className="col-12 mt-3">
                    <h6>Quality of Javascript</h6>
                    <Star />
                    <label htmlFor="jsKnowledge">Additional Notes:</label>
                    <input
                // {...register("lastName", {
                //     required: true,
                //     pattern: /^[A-Za-z]+$/i,
                // })}
                    name="jsKnowledge"
                    className="form-control form__input my-2"
                    type="text"
                    id="jsKnowledge"
                    />
                {/* {errors.lastName && <p className="text-danger">*Required</p>} */}
                </div>

            </div>
            <div className="col-6">
                <div className="col-12 mt-4">
                  <h6>Summary</h6>
                  <input type="text" />
                
                </div>
            <div className="col-12 mt-5">
                <input type="reset" className="btn btn-secondary mx-2 form__button" value="Cancel" onClick={handleClick} />
                <input type="submit" className="btn btn-primary form__button" value="Save" />
            </div>
            </div> 
        </form>
        </div>
    );
};

export default ReviewForm;
