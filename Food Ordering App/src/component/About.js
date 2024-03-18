import { Component } from "react";
import UserContext from "../store/UserContext.js";
import UserClass from "./UserClass.js";

export default class About extends Component {
    render() {
        return (
            <div className="p-9">
                <h1 className="font-bold text-2xl">About</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series.</h2>
                <UserClass />
            </div>
        );
    }
}