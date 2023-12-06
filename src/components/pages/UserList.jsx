import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { deleteUserSliceAsync, getUserSliceAsync } from "../../redux_tookit/Users/userSlice";
import { Link } from "react-router-dom";

const UserList = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.users);
  // console.log(userData, "123456");

  const notify = () => toast.error("User deleted successfully!!");

  const handleDelete = (id) => {
    notify()
    dispatch(deleteUserSliceAsync({ id, dispatch }))
}
  React.useEffect(() => {
    dispatch(getUserSliceAsync());
  }, [dispatch]);

  const rows = userData.map((user, index) => ({
    ...user,
    index: index + 1,
  }));

  const columns = [
    { field: "index", headerName: "#", width: 70 },
    { field: "username", headerName: "User name", width: 150 },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "password",
      headerName: "Password",
      width: 170,
    },
    { field: "_id", headerName: "User Id", width: 250 },
    {
      field: "action",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        // console.log(params,"params")
        return (
          <div className="flex gap-3">
            <Link to={"/viewuser"} state={params.row}>
              <Eye color="blue" size={16} style={{ cursor: "pointer" }} />
            </Link>
            <Link to={"/updateuser"}state={params.row}>
              <Pencil
                color="currentColor"
                size={16}
                style={{ cursor: "pointer" }}
              />
            </Link>
            <Trash2
              color="red"
              size={16}
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(params.row._id)}
            />
          </div>
        )
      }
    },
  ];
  return (
  <>
    <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-5">User List</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
    <ToastContainer/>
  </>
  );
};

export default UserList;
