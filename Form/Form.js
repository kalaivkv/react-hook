import React from 'react';
import { Content } from './Content';
import './Form.css'; 

const Form = () => {
    const { formData, handleChange, handleSubmit, handleReset, inputRef, errors , displaymemo} = Content();

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    ref={inputRef}
                />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                />
                {errors.dob && <span className="error">{errors.dob}</span>}
            </div>
            <div className="form-group">
                <label>Gender:</label>
                <div id='radio'>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={formData.gender === 'other'}
                            onChange={handleChange}
                        />
                        Other
                    </label>
                </div>
                {errors.gender && <span className="error">{errors.gender}</span>}
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="form-group">
                <label>State:</label>
                <select name="state" value={formData.state} onChange={handleChange}>
                    <option value="">Select a state</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telungana">Telungana</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Delhi">Delhi</option>
                </select>
                {errors.state && <span className="error">{errors.state}</span>}
            </div>
            
           <div className="btns">
                <button type="submit" className="submit-button">Submit</button>
                <button type="button" className="reset-button" onClick={handleReset}>Reset</button>
           </div>
           {/* <p>{displaymemo}</p> */}
        </form>
    );
};

export default Form;
