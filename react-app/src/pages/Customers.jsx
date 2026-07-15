import { useState } from "react";

function Customers() {

  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      phone: "9876543210",
      image: "arun"
    },

    {
      id: 2,
      name: "Rajesh",
      phone: "8765432109",
      image: "rajesh"
    }
  ]);


  const [name, setName] = useState("");


  function addCustomer() {

    if (name) {

      setCustomers([
        ...customers,

        {
          id: Date.now(),
          name: name,
          phone: "9999999999",
          image: "default"
        }

      ]);

      setName("");

    }

  }


  return (

    <div className="container mt-5">

      <h1>
        Customer Information
      </h1>


      <input
        className="form-control"
        placeholder="Customer Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />


      <button
        className="btn btn-primary mt-2"
        onClick={addCustomer}
      >
        Add Customer
      </button>


      <table className="table mt-4">

        <thead>

          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Contact Number</th>
          </tr>

        </thead>


        <tbody>

          {
            customers.map(customer => (

              <tr key={customer.id}>

                <td>
                  <div className={`customer-image ${customer.image}`}></div>
                </td>

                <td>
                  {customer.name}
                </td>

                <td>
                  {customer.phone}
                </td>

              </tr>

            ))
          }

        </tbody>

      </table>

    </div>

  );

}

export default Customers;