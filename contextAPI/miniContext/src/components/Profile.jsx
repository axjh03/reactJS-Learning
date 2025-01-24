import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile = () => {
  const { userCred } = useContext(UserContext);

  return userCred ? 
    <p>Welcome {userCred.username} with password {userCred.password}</p> 
    : <p>Please login</p>;
};

export default Profile;
