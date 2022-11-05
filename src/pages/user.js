import { useEffect, useState } from "react";
const { faker } = require("@faker-js/faker");
const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      registerdAt: faker.date.past(),
    }));
    setUsers(suggestions);
  }, []);

  return (
    <div className="m-3 flex flex-col flex-wrap">
      <div>
        <h3 className="font-bold text-xl text-sky-500 tracking-tight">
          Our Happy Clients
        </h3>
      </div>
      <div className="flex flex-row w-full flex-wrap mt-4 gap-4 mx-auto">
        {users.map((user, index) => (
          <div
            key={index}
            className="h-48 w-48 bg-white shadow-xl rounded-sm flex flex-col
            text-center items-center justify-center border-1"
          >
            <img
              src={user.avatar}
              alt="avatar"
              className="w-24 h-24 rounded-full p-1
             border"
            />
            <label className="font-semibold text-md">{user.username}</label>
            <p
              className="text-gray-300 p-1 truncat w-full overflow-clip
             whitespace-nowrap text-sm"
            >
              Joined on
            </p>
            <p className="font-semibold tracking-tighter">
              {user.registerdAt.toString().slice(0, 15)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
