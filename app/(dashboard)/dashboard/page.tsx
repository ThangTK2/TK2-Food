import Container from "@/app/components/Common/Container";
import TotalCards from "./Components/TotalCards";
import SalesRevenueGraph from "./Components/SalesRevenueGraph";

const AdminDashboard = () => {
  return (
    <Container>
      <TotalCards />
      <section className="pb-6 grid flex-cols-1 md:flex-cols-2 gap-4">
        <SalesRevenueGraph />
      </section>
    </Container>
  );
};

export default AdminDashboard;