import { Table, notification } from 'antd';
import { useEffect, useState } from 'react';
import { useUserQuery } from '../../redux/api/usersApi';

const Users = () => {
  const [userData, setUserData] = useState([]);
  const { data: users, } = useUserQuery();

  const column = [

    {
      title: 'Username',
      dataIndex: 'username',
    },
   
  ];

  useEffect(() => {
    if (users?.payload) {
      setUserData(users.payload);
    } 
    
  }, [users]);

  return (
    <>
        <div className='w-full'>
          <Table columns={column} dataSource={userData} />
        </div>
    </>
  );
};

export default Users;