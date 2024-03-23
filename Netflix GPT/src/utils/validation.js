export default function CheckValidData({ email, password, name }) {
    const errors = {
        email: [],
        password: [],
    };

    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) {
        errors.email.push("Email ID is not valid");
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
        errors.password.push("Password is not valid");
    }

    return errors;
}
