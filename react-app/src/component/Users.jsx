import { useSearchParams } from "react-router-dom";

function UserList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = 4;

  const users = [
    { id: 1, name: "John Smith", email: "john@example.com", phone: "9876543210", city: "New York", role: "Admin", }, { id: 2, name: "Emma Johnson", email: "emma@example.com", phone: "9876543211", city: "London", role: "Editor", }, { id: 3, name: "Michael Brown", email: "michael@example.com", phone: "9876543212", city: "Paris", role: "User", }, { id: 4, name: "Sophia Williams", email: "sophia@example.com", phone: "9876543213", city: "Tokyo", role: "Manager", }, { id: 5, name: "David Wilson", email: "david@example.com", phone: "9876543214", city: "Sydney", role: "Developer", }, { id: 6, name: "Olivia Davis", email: "olivia@example.com", phone: "9876543215", city: "Toronto", role: "Designer", }, { id: 7, name: "James Miller", email: "james@example.com", phone: "9876543216", city: "Berlin", role: "Tester", }, { id: 8, name: "Isabella Anderson", email: "isabella@example.com", phone: "9876543217", city: "Rome", role: "HR", }, { id: 9, name: "William Taylor", email: "william@example.com", phone: "9876543218", city: "Madrid", role: "Accountant", }, { id: 10, name: "Ava Thomas", email: "ava@example.com", phone: "9876543219", city: "Dubai", role: "Manager", },
  ];

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = users.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setSearchParams({ page: pageNum });
    }
  };

  const next = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const previous = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div>
      <h1>User List</h1>

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%", color: "black" }}
      >
        <thead>
          <tr style={{ background: "lightblue" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>

      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>

      <p style={{ color: "black" }}>
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
}

export default UserList;