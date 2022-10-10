import React,{useState} from 'react'

const MultipleInputs = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        phone: "",
        preference:""
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

        setUserRegistration({username:"", email:"", phone:"", preference:""});
    }

    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Fullname</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.username}
                    onChange={handleInput}
                    name="username" id="username" />
                </div>

                <div>
                    <label htmlFor="email">email</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.email}
                    onChange={handleInput}
                    name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="phone">phone</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.phone}
                    onChange={handleInput}
                    name="phone" id="phone" />
                </div>

                <div>
                    <label htmlFor="preference">preference</label>
                    <input type="text" autoComplete="off"
                    value={userRegistration.preference}
                    onChange={handleInput}
                    name="preference" id="preference" />
                </div>

                <button type="submit">Registration  </button>
            </form>

            <div>
                {
                    records.map((curElem) => {
                        const{id, username, email, phone,preference} = curElem;
                        return(
                            <div className="showDataStyle" key={curElem.id}>
                                <p>{username}</p>
                                <p>{email}</p>
                                <p>{phone}</p>
                                <p>{preference}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default MultipleInputs