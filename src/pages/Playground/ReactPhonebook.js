// region 1. Platform Libraries
import React, { useState } from 'react';
// endregion

const style = {
    section: {
        display: "flex"
    },
    table: {
        borderCollapse: "collapse",
    },
    tableCell: {
        border: "1px solid gray",
        margin: 0,
        padding: "5px 10px",
        width: "max-content",
        minWidth: "150px",
    },
    form: {
        container: {
            padding: "20px",
            border: "1px solid #F0F8FF",
            borderRadius: "15px",
            width: "max-content",
            marginBottom: "40px",
        },
        inputs: {
            marginBottom: "5px",
        },
        submitBtn: {
            marginTop: "10px",
            padding: "10px 15px",
            border: "none",
            backgroundColor: "lightseagreen",
            fontSize: "14px",
            borderRadius: "5px",
        },
    },
}

function PhoneBookForm(props) {
    const { addUser } = props;
    const user = {
        userFirstname: "",
        userLastname: "",
        userPhone: ""
    }
    const [userState, setUserState] = useState(user);

    const onChange = (e) => {
        setUserState({
            ...userState,
            [e.target.name]: e.target.value,
        })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(userState.userFirstname && userState.userLastname && userState.userPhone) {
            addUser(userState);
            setUserState(user);
        }
    }

    return (
        <form onSubmit={onSubmit} style={style.form.container}>
            <label>First name:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userFirstname"
                name="userFirstname"
                type="text"
                onChange={onChange}
                value={userState.userFirstname}
            />
            <br />
            <label>Last name:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userLastname"
                name="userLastname"
                type="text"
                onChange={onChange}
                value={userState.userLastname}
            />
            <br />
            <label>Phone:</label>
            <br />
            <input
                style={style.form.inputs}
                className="userPhone"
                name="userPhone"
                type="text"
                onChange={onChange}
                value={userState.userPhone}
            />
            <br />
            <input
                style={style.form.submitBtn}
                className="submitButton"
                type="submit"
                value="Add User"
            />
        </form>
    )
}

function InformationTable(props) {
    const { usersState } = props;
    const sortedUsers = usersState.sort((a, b) => (
        a.userLastname.toLowerCase().localeCompare(b.userLastname.toLowerCase())
    ));
    const Rows = sortedUsers
        ? sortedUsers.map((user, index) => (
            <tr key={index}>
                <td style={style.tableCell}>{user.userFirstname}</td>
                <td style={style.tableCell}>{user.userLastname}</td>
                <td style={style.tableCell}>{user.userPhone}</td>
            </tr>
        ))
        : undefined;

    return (
        <table style={style.table} className="informationTable">
            <thead>
                <tr>
                    <th style={style.tableCell}>First name</th>
                    <th style={style.tableCell}>Last name</th>
                    <th style={style.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>
                {Rows}
            </tbody>
        </table>
    );
}

function Application() {
    const [usersState, setUsersState] = useState([]);
    const addUser = (user) => {
        setUsersState([
            ...usersState,
            user
        ])
    };

    return (
        <section>
            <PhoneBookForm addUser={addUser}/>
            <InformationTable usersState={usersState}/>
        </section>
    )
}

export default Application;