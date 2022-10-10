import React,{useState} from 'react'
import "./App.css";

const MultipleInputs = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        age:""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value);

        setUserRegistration({...userRegistration, [name]: value})
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        const newRecord = {...userRegistration, id: new Date().getTime().toString() }
        console.log(records)
        setRecords([...records, newRecord])
        console.log(records)

        setUserRegistration({username:"", email:"", phone:"", age:""});
    }

    return (
        <section class="inputt" id="inputt"> 
            <form action="" onSubmit={handleSubmit}>
                <h1>Your details</h1>
                <div class="inputbox" id="inputbox">
                    <label htmlFor="username">Full Name</label>
                    <input type="text" placeholder='Your name' autoComplete="off"
                    value={userRegistration.username}
                    onChange={handleInput}
                    name="username" id="username" />
                </div>

                <div class="inputbox" id="inputbox">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder='eg:-xyz@gmail.com' autoComplete="off"
                    value={userRegistration.email}
                    onChange={handleInput}
                    name="email" id="email" />
                </div>

                <div class="inputbox" id="inputbox">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" placeholder='eg:-9361912012' autoComplete="off"
                    value={userRegistration.phone}
                    onChange={handleInput}
                    name="phone" id="phone" />
                </div>

                <div class="inputbox" id="inputbox">
                    <label htmlFor="age">Age</label>
                    <input type="text" placeholder='age' autoComplete="off"
                    value={userRegistration.age}
                    onChange={handleInput}
                    name="age" id="age" />
                </div>

                <button type="submit" class="submit-btn">Register</button>
            </form>

            <div class="data" id="data">
                {
                    records.map((curElem) => {
                        const{id, username, email, phone,age} = curElem;
                        return(
                            <div className="showDataStyle" key={curElem.id} class="showdata">
                                <p class="usernamefetched">{username}</p>
                                <p class="emailfetched">{email}</p>
                                <p class="phonefetched">{phone}</p>
                                <p class="prefernce">{age}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default MultipleInputs