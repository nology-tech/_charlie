import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import ReactStars from "react-rating-stars-component";

const ProjectReviewForm = ({ onSubmit }) => {
    const {control, handleSubmit, formState: { errors },  reset } = useForm();
    const history = useHistory();  
    
    const handleClick = () => {
        reset();
        history.goBack();
    }

    
    return (
        <div className="row my-5 px-4 mx-auto offset-1 form__container project-review-form">
        <form className="row" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6">
                
                <div className="col-12 mt-4">
                    <h6>Knowledge of Module</h6>
                    <Controller control={control} name="module-rating" defaultValue={0} rules={{ required: true }} render={ ( {field : { value, onChange }} ) => ( <ReactStars value={value} onChange={onChange} name="module-rating" activeColor="#724BCB" size={16}  /> )} />
                    
                     <label htmlFor="moduleKnowledge">Additional Notes:</label>
                     <Controller control={control} name="moduleKnowledge" render={ ( {field : { value, onChange }} ) => (<input
                      value={value} onChange={onChange} className="form-control form__input  my-2" type="text" id="moduleKnowledge" data-testid="moduleKnowledge" /> )} />
                </div>

                <div className="col-12 mt-3">
                    <h6>Quality of HTML/CSS</h6>
                    <Controller control={control} name="HtmlCss-rating" defaultValue={0} rules={{ required: true }} render={ ( {field : { value, onChange }} ) => ( <ReactStars value={value} onChange={onChange} name="HtmlCss-rating" activeColor="#724BCB" size={16}  /> )} />
                    
                    <label htmlFor="HTML-CSSKnowledge">Additional Notes:</label>
                    <Controller control={control} name="HTML-CSSKnowledge"  render={ ( {field: { value, onChange }} ) => (<input
                      value={value} onChange={onChange} className="form-control form__input  my-2" type="text" id="HTML-CSSKnowledge" data-testid="HTML-CSSKnowledge" />)} />
                </div>

                <div className="col-12 mt-3">
                    <h6>Quality of Javascript</h6>
                    <Controller control={control} name="js-rating" defaultValue={0} rules={{ required: true }} render={ ( {field : { value, onChange }} ) => ( <ReactStars value={value} onChange={onChange} name="js-rating" activeColor="#724BCB" size={16} />)}/>
                    
                    <label htmlFor="jsKnowledge">Additional Notes:</label>
                    <Controller control={control} name="jsKnowledge" render={ ( {field: { value, onChange }} ) => (<input 
                    value={value} onChange={onChange} className="form-control form__input  my-2" type="text" id="jsKnowledge" data-testid="jsKnowledge" /> )} />
                </div>
            </div>
            
            <div className="col-6">
                
                <div className="col-12 mt-4 mx-4">
                     <h6>Summary</h6>
                    <Controller control={control} name="summary" rules={{ required: true }} render={ ({field: { value, onChange }}) => (<textarea value={value} onChange={onChange} className="form-control form__input  my-2 summary" data-testid="summary" /> )} />
                    {errors.summary && <p className="text-danger">* Required</p>}
                </div>
                
                <div className="col-12 mt-5 mx-4">
                    <input type="reset" className="btn btn-secondary mx-2 form__button" value="Cancel" onClick={handleClick} />
                    <input type="submit" className="btn btn-primary form__button" value="Save" />
                </div>
            </div> 
        
        </form>
        </div>
    );
};

export default ProjectReviewForm;
