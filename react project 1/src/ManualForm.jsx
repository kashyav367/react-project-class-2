import { useState } from "react"

// const ROLES = ["Frontend" , "Backend" , "AI Engineer"];

const ManualForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        role: "Frontend",
        experience: "",
        cover: ""
    })

    const [errors, setErrors] = useState({});
    console.log(errors);
    const [submitted, setSubmitted] = useState(false);

    function set(field) {
        return (e) => setValues((v)=> ({...v, [field]: e.target.value}))
    }

    function validate(v){
        const e = {};
        if(!v.name.trim()) e.name = "Name is required";
        if(!v.email.trim()) e.email = "Email is required";
        if(!v.role.trim()) e.role = "role is required";
        if(!v.experience.trim()) e.experience = "experience is required";
        if(!v.cover.trim()) e.cover = "cover is required"
        return e;
    }

    function submit(ev){
        ev.preventDefault();
        const e = validate(values);
        console.log('e', e)
        setErrors(e);
        if(Object.keys(e).length==0) setSubmitted(true);
    }

    if(submitted){
        return (
            <div>
                <h1>Form submitted {values.name}</h1>
            </div>
        )
    }
  return (
    <>
    <form onSubmit={submit}>
        <label>
            Full Name
            <input type="text" value={values.name} onChange={set("name")} />
            {errors.name && <span>{errors.name}</span>}
            Email 
            <input type="text" value={values.email} onChange={set("email")}/>
            {errors.email && <spam>{errors.email}</spam>}
            Role
            <input type="text" value={values.role} onChange={set("role")}/>
            {errors.role && <spam>{errors.role}</spam>}
            Experience
            <input type="number" value={values.experience} onChange={set("experience")}/>
            {errors.experience && <spam>{errors.experience}</spam>}
            Cover
            <input type="text" value={values.cover} onChange={set("cover")}/>
            {errors.cover && <spam>{errors.cover}</spam>}
        </label>
        <button>Submit</button>
    </form>
    </>
  )
}

export default ManualForm
