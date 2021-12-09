import React, {useState} from 'react';

const NewBoxForm = ({submit}) => {
    const INITIAL_DATA = {
        width: 100,
        height: 100,
        backgroundColor: '#0000FF'
    };
    const [formData, setFormData] = useState(INITIAL_DATA);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit(formData);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="NewBoxForm-inputGroup">
                <label htmlFor="width">Width: {formData.width}</label>
                <input name="width" value={formData.width} type="range" onChange={handleChange} max={500} min={1}/>
            </div>
            <br/>
            <div className="NewBoxForm-inputGroup">
                <label htmlFor="height">Height: {formData.height}</label>
                <input name="height" value={formData.height} type="range" onChange={handleChange} max={500} min={1}/>
            </div>
            <br/>
            <div className="NewBoxForm-inputGroup">
                <label htmlFor="backgroundColor"> Background Color: </label>
                <input name="backgroundColor" value={formData.backgroundColor} type="color" onChange={handleChange} max={500} min={1}/>
            </div>
            <br/>
            <button>Add Box</button>
        </form>
    )

}

export default NewBoxForm;