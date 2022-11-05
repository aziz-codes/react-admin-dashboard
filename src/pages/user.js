import { useEffect, useState } from "react";
const { faker } = require("@faker-js/faker");
const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const suggestions = [...Array].map((_, i) => ({
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
    </div>
  );
};

export default User;
