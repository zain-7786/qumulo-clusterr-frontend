import React, { useState, useEffect } from "react";
import PageTitle from "example/components/Typography/PageTitle";
import Layout from "example/containers/Layout";

import {
  Chart,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LiveChart from "example/components/Chart/LiveChart";
import { data, series } from "utils/demo/chartsData";

function Dashboard() {
  Chart.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [page, setPage] = useState(1);

  // pagination setup
  const resultsPerPage = 10;

  // pagination change control
  function onPageChange(p: number) {
    setPage(p);
  }

  return (
    <Layout>
      <PageTitle>Performance Metrics</PageTitle>

      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-1 h-72">
        <LiveChart data={data} xaxisKey="name" series={series} title="IOPS" />
      </div>
      <div className="grid gap-6 mb-8 md:grid-cols-1 h-72">
        <LiveChart
          data={data}
          xaxisKey="name"
          series={series}
          title="Throughput"
        />
      </div>
    </Layout>
  );
}

export default Dashboard;
