import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';

const Users = () => {
    const users = useSelector((state)=>state.users)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            {users.loading ? <h2>loading ... </h2> : null}
            {users.users.length ? users.users.map(user=><p key={user.id}>{user.name}</p>) : null}
            {users.error ? <h2>{users.error}</h2> : null}
        </div>
    );
};

export default Users;