import Table from "react-bootstrap/Table";
import react, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export const UserAdd = ({ users, getUser }) => {
  const [userList, setUserList] = useState([]);

  const AddUserToList = (newUser) => {
    setUserList([...userList, newUser]);
  };

  console.log(userList);

  const handleAddUser = () => {
    AddUserToList({
      name: `${users?.name?.title} ${users?.name?.first} ${users?.name?.last}`,
      email: users?.email,
      age: users?.dob.age,
      id: crypto.randomUUID(),
    });
  };

  const handleDelete = (id) => {
    setUserList(userList.filter((delUser) => delUser.id !== id));
  };

  return (
    <>
      <div className="btnContainer d-flex justify-content-evenly m-3">
        <button className="btn btn-outline-success fw-bold" onClick={getUser}>
          New User
        </button>
        <button
          className="btn btn-outline-primary fw-bold"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>

      {userList?.length ? (
        <Table striped bordered hover variant="danger">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(({ name, email, age, id }, index) => (
              <tr id={id}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{age}</td>
                <td className="text-center fs-5 text-danger">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => handleDelete(id)}
                  >
                    <RiDeleteBinLine className="text-danger" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="imgContainer d-flex justify-content-center m-5">
          <img
            className="shadow-lg"
            src="https://clarusway.com/wp-content/uploads/2022/12/clarusway-logo-black.png"
            width="70%"
            alt=""
          />
        </div>
      )}
    </>
  );
};
