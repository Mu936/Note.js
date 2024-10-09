import React from 'react';

const UserProfile = () => {
    const user = {
        name: "John Doe",
        email: "john@example.com"
    };

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserProfile;
