// import React, { useState } from "react";
import './reviewform.scss';
import { useForm, Controller } from "react-hook-form";

// import { FaStar } from 'react-icons/fa';
// import Star from '../../../../../components/star/star';
import StarRatingComponent from 'react-star-rating-component';

const ReviewForm = ({ onSubmit }) => {
    const {control, handleSubmit,  reset } = useForm();
    // const history = useHistory();


    // formState: { errors },

    // console.log(errors);
    

    // const onSubmit = (data) => {
    //     console.log(data);
    //     alert(JSON.stringify(data));
    // };
    
    const handleClick = () => {
        reset();
        // history.goBack();
    };

    
    

    return (
        <div className="row my-4 px-4 offset-1 form__container">
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
                <div className="col-12 mt-4">
                    <h6>Knowledge of Module</h6>
                    
                    <StarRatingComponent 
                    name="module-rating"
                    starColor="#724BCB"  />
                    <br/>
                      <label htmlFor="moduleKnowledge">Additional Notes:</label>
                     <Controller control={control} name="moduleKnowledge" render={ ( { value, onChange } ) => (<input
                      value={value} onChange={onChange}
                      className="form-control form__input  my-2"
                      type="text"
                      id="moduleKnowledge"
                      /> )} />
                      
                </div>

                <div className="col-12 mt-3">
                    <h6>Quality of HTML/CSS</h6>
                    <StarRatingComponent name="HtmlCss-rating"
                    starColor="#724BCB"  />
                    <br/>
                    <label htmlFor="HTML-CSSKnowledge">Additional Notes:</label>
                    <Controller control={control} name="HTML-CSSKnowledge" render={ ( { value, onChange } ) => (<input
                      value={value} onChange={onChange}
                      className="form-control form__input  my-2"
                      type="text"
                      id="HTML-CSSKnowledge"
                      /> )} />
                    
                
                </div>

                <div className="col-12 mt-3">
                    <h6>Quality of Javascript</h6>
                    <StarRatingComponent name="js-rating"
                    starColor="#724BCB"  />
                    <br/>
                    <label htmlFor="jsKnowledge">Additional Notes:</label>
                    <Controller control={control} name="jsKnowledge" render={ ( { value, onChange } ) => (<input
                      value={value} onChange={onChange}
                      className="form-control form__input  my-2"
                      type="text"
                      id="jsKnowledge"
                      /> )} />
                    
                    
                </div>

            </div>
            <div className="col-6">
                <div className="col-12 mt-4">
                  <h6>Summary</h6>
                  <Controller control={control} name="summary" render={ ({ value, onChange }) => (<textarea
                      value={value} onChange={onChange}
                      className="form-control form__input  my-2 summary"
                      type="text"
                    /> )} />
                  
                
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
