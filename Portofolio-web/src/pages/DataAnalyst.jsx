import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartLine } from "lucide-react";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { RiFileExcel2Fill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { SiJupyter } from "react-icons/si";

function DataAnalyst() {
  return (
    <section id="data-analyst" className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
          Role
        </h3>
        <h1 className="text-3xl font-bold mt-2 flex items-center justify-center gap-2">
          <ChartLine className="w-7 h-7 text-primary" /> Data Analyst
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          A Data Analyst collects, processes, and visualizes data to generate
          insights that support decision-making in businesses and organizations.
        </p>
      </div>

      {/* Tools */}
      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-6">Tools & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
          <div className="flex flex-col items-center">
            <FaPython color="#3776AB" size={48} />
            <span className="text-sm mt-2">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql color="#4479A1" size={48} />
            <span className="text-sm mt-2">SQL</span>
          </div>
          <div className="flex flex-col items-center">
            <RiFileExcel2Fill color="#217346" size={48} />
            <span className="text-sm mt-2">Excel</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTableau color="#E97627" size={48} />
            <span className="text-sm mt-2">Tableau</span>
          </div>
          <div className="flex flex-col items-center">
            <MdBarChart color="#F7931E" size={48} />
            <span className="text-sm mt-2">Power BI</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJupyter color="#F37626" size={48} />
            <span className="text-sm mt-2">Jupyter</span>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Data Analyst Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-sales.jpg"
              alt="Sales Dashboard"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Sales Dashboard</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Interactive dashboard analyzing monthly sales trends and KPIs.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-customer.jpg"
              alt="Customer Segmentation"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Customer Segmentation</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Clustering customers based on purchase behavior and
                demographics.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <img
              src="/src/assets/project-marketing.jpg"
              alt="Marketing Analytics"
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">Marketing Analytics</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Campaign analysis to measure ROI and improve ad targeting.
              </p>
              <Button variant="ghost" className="mt-3 text-sm">
                View Details →
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default DataAnalyst;
