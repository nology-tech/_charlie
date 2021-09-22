import React from 'react';
import studentData from '../../data/studentForm';

const StudentForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {}
        formData.forEach((value, key) => (data[key] = value))
        // Log the data.
        console.log(JSON.stringify(data))
        studentData.push(JSON.stringify(data))
        console.log('this is the student data object:', studentData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">First Name</label>
                <input type="text" name="first-name" id="first-name" />

                <label htmlFor="">Last Name</label>
                <input type="text" name="last-name" id="last-name" />

                <label htmlFor="">Enrolled On</label>
                <select id="enrolled-course" name="enrolled-course">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                </select>

                <label htmlFor="">Github Account</label>
                <input type="text" name="github-account" id="github-account" />
                <label htmlFor="">Portfolio Link</label>
                <input type="text" name="portfolio-link" id="portfolio-link" />

                <input type="submit" value="Save" />
            </form>
        </>
    )
}

export default StudentForm;
