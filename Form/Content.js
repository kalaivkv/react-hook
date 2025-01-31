import { useState, useEffect, useRef,useMemo } from 'react';

export const Content = () => {
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        email: '',
        password: '',
        state: ''
    });
    const [errors, setErrors] = useState({});
    const inputRef = useRef(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData'));
        if (storedData) {
            setFormData(storedData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: '' })); 
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.dob) tempErrors.dob = 'Date of Birth is required';
        if (!formData.gender) tempErrors.gender = 'Gender is required';
        if (!formData.email) tempErrors.email = 'Email is required';
        if (!formData.password) tempErrors.password = 'Password is required';
        if (!formData.state) tempErrors.state = 'State is required';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; 
    };

    const handleSubmit = (e) => {
        e.preventDefault();      
        if (validateForm()) {
            console.log(formData); 
            setFormData({
                name: '',
                dob: '',
                gender: '',
                email: '',
                password: '',
                state: ''
            });
            if (inputRef.current) {
                inputRef.current.focus(); 
            }
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            dob: '',
            gender: '',
            email: '',
            password: '',
            state: ''
        });
        setErrors({});
        if (inputRef.current) {
            inputRef.current.focus(); 
        }
    };

    const displaymemo = useMemo(() => {
        return `Name: ${formData.name}, DOB: ${formData.dob}, Gender: ${formData.gender}, Email: ${formData.email}, State: ${formData.state}`;
    }, [formData]);

    return { formData, handleChange, handleSubmit, handleReset, inputRef, errors, displaymemo };
};