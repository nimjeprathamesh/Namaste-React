import React, { Component } from 'react';
import AvatarShimmer from './shimmer/AvatarShimmer.js';

class UserClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                login: "Dummy",
                avatar_url: "http://dummy-photo.com"
            },
            isLoading: true,
        };
    }
    
    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/nimjeprathamesh');
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
            isLoading: false,
        });
    }

    render() {
        const {name, location, login, avatar_url, email} = this.state.userInfo;
        const { isLoading } = this.state;

        return (
            <div className='p-[10px] border border-solid my-[15px] w-[30%]'>
                {isLoading ? <AvatarShimmer /> : (
                    <img
                        src={avatar_url}
                        alt='avatar'
                        className='rounded-3xl shadow-xl shadow-black'
                        onLoad={() => this.setState({ isLoading: false })}
                    />
                )}
                <h2 className='m-2'>Name: {name}</h2>
                <h3 className='m-2'>Location: {location}</h3>
                <h4 className='m-2'>Contact: @{login}</h4>
                <h4 className='m-2'>
                    Email: {email === null ? 'nimjeprathamesh1@gmail.com' : email}
                </h4>
            </div>
        );
    }
}

export default UserClass;