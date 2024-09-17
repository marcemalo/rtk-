import React from 'react';
import { useGetProfileQuery } from '../../redux/api/userApi';
const Users = () => {
    const { data } = useGetProfileQuery();

    return (
        <div>
            {
                data && data.payload &&
                (user => (
                    <div key={user._id}>{user.first_name}</div>
                ))
            }
        </div>
    );
}

export default Users;
