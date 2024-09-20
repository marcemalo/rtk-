import { Card, Avatar } from "antd"
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../../redux/api/userApi"
import { FaBriefcase, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const { Meta } = Card

const Profile = () => {
  const {data} = useGetProfileQuery();
  const user = data?.payload;

  return (
    <div className="max-w-md mx-auto mt-[150px]">
    {
      user && <Card
      className="w-full shadow-custom  "
      cover={<div className="h-32 bg-yellow-400" />}
    >
      <div className="flex flex-col items-center -mt-16 mb-4 ">
        <Avatar
          size={128}
          src={user.photo_url}
          className="ring-4 ring-white"
        />
        <h2 className="mt-4 text-2xl font-bold">{user.first_name}</h2>
      </div>
      <Meta
        description={
          <div className="space-y-3 text-gray-600">
            <div className="flex items-center">
              <FaBriefcase className="w-5 h-5 mr-2 text-green-600" />
              <span>Sales Manager at Dooley, Kozey and Cronin</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 mr-2 text-green-600" />
              <span>Phoenix, Mississippi, United States</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2 text-green-600" />
              <Link
                to={`mailto:${user.username}`}
                className="text-green-600 hover:underline"
              >
                {user.username}
              </Link>
            </div>
            <div className="flex items-center">
              <FaPhone className="w-5 h-5 mr-2 text-green-600" />
              <span>(123) 456-7890</span>
            </div>
          </div>
        }
      />
    </Card>
    }
  </div>
  )
}

export default Profile