import { useEffect, useState } from "react";
import SunburstChart from "../components/charts/Chart";

const SunBurstChartPage = () => {
  const [data, setData] = useState({ name: "root", children: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/3c58046f-b17a-40b3-b865-94e4043da07c"
        );
        const apiData = await response.json();

        const transformedData = { name: "root", children: [] };

        apiData.forEach((item) => {
          let categoryNode = transformedData.children.find(
            (node) => node.name === item.category
          );
          if (!categoryNode) {
            categoryNode = { name: item.category, children: [] };
            transformedData.children.push(categoryNode);
          }

          let subcategoryNode = categoryNode.children.find(
            (node) => node.name === item.subcategory
          );
          if (!subcategoryNode) {
            subcategoryNode = { name: item.subcategory, children: [] };
            categoryNode.children.push(subcategoryNode);
          }

          subcategoryNode.children.push({ name: item.type, value: 1 });
        });

        setData(transformedData);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-2xl font-bold text-center pt-4 mb-20">
        Sunburst Chart Example
      </h1>
      <div className="flex-grow">
        <SunburstChart data={data} />
      </div>
    </div>
  );
};

export default SunBurstChartPage;
