// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class  extends React.Component {
    constructor(props: any) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        // @ts-ignore
        const { status: any } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/xdowdbqv"
                method="POST"
            >
                <label>Email:</label>
                <input type="email" name="email" />
                <label>Message:</label>
                <input type="text" name="message" />
                {/* eslint-disable-next-line no-restricted-globals */}
                {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
                {/* eslint-disable-next-line no-restricted-globals */}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}
            </form>
        );
    }

    // @ts-ignore
    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}