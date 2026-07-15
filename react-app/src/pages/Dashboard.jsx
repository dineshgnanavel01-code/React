import DashboardCard from "../components/DashboardCard";

function Dashboard(){

  return(

    <div className="dashboard-page">

      <div className="container mt-5">

        <h1 className="dashboard-title">
          Rental Dashboard
        </h1>


        <div className="row">

          <div className="col-md-4">
            <DashboardCard
              title="Total Vehicles"
              value="120"
            />
          </div>


          <div className="col-md-4">
            <DashboardCard
              title="Total Bookings"
              value="350"
            />
          </div>


          <div className="col-md-4">
            <DashboardCard
              title="Revenue"
              value="₹8,50,000"
            />
          </div>

        </div>

      </div>

    </div>

  )

}

export default Dashboard;