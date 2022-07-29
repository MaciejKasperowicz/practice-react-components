import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        searchQuery: '',
        users: ['Jan Kowalski', 'Michał Nowak', "Adam Mickiewicz"],
    }

    renderUsersList() {
        const { users, searchQuery } = this.state;
        if (searchQuery) return this.getUsers(this.getFilteredUsers());
        return this.getUsers(users);
    }

    getUsers(usersArr) {
        return usersArr.map((name, i) => {
            return (
                <li key={i}
                    onClick={this.clickHandler}>
                    {name}
                </li>
            );
        });
    }

    clickHandler = e => {
        const { innerText: userName } = e.target;
        this.removeUser(userName);
    }

    inputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { firstName, lastName } = this.state;
        return (
            <section onSubmit={this.submitHandler}>
                <form>
                    <input name="firstName"
                        value={firstName}
                        onChange={this.inputChange}
                    />
                    <input name="lastName"
                        value={lastName}
                        onChange={this.inputChange}
                    />
                    <input type="submit" />
                </form>
                <label>Filtr
                    <input onChange={(e) => this.setSearchQuery(e)} />
                </label>

                <ul>{this.renderUsersList()}</ul>
            </section>
        );
    }

    setSearchQuery = e => {
        const query = e.target.value;
        this.setState({
            searchQuery: query
        });
    }
    getFilteredUsers = () => {
        const { searchQuery, users } = this.state;
        const lcSearchQuery = searchQuery.toLowerCase();

        const filteredUsers = users.filter(
            user => user.toLowerCase().includes(lcSearchQuery)
        )
        return filteredUsers
    }

    submitHandler = e => {
        e.preventDefault();

        const { firstName, lastName } = this.state;
        if (firstName && lastName) {
            this.addUser(`${firstName} ${lastName}`);
            this.setState({
                firstName: '',
                lastName: '',
            });
        } else {
            // tutaj komunikat dla użytkownika
        }
    }

    addUser(name) {
        this.setState({
            users: [...this.state.users, name],
        });
    }

    removeUser(name) {
        const currUsers = this.state.users.filter(
            user => user != name
        );

        this.setState({
            users: currUsers,
        });
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));