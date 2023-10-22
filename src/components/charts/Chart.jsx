import  { useEffect, useRef } from "react";
import * as d3 from "d3";

const SunburstChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 850;
    const height = 850;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const partition = d3.partition().size([2 * Math.PI, radius]);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const root = d3.hierarchy(data);

    root.sum((d) => d.value);

    partition(root);

    const arc = d3
      .arc()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .innerRadius((d) => d.y0)
      .outerRadius((d) => d.y1);

    const path = g
      .selectAll("path")
      .data(root.descendants())
      .enter()
      .append("path")
      .attr("d", arc)
      .style("fill", (d) => color(d.data.name))
      .attr("class", "segment")
      .on("mouseover", function () {
        d3.select(this).attr("class", "segment highlight");
      })
      .on("mouseout", function () {
        d3.select(this).attr("class", "segment");
      });

    path.append("title").text((d) => d.data.name);

    path
      .filter((d) => d.depth < 2) 
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .style("text-anchor", "middle")
      .text((d) => d.data.name)
      .style("font-size", "12px")
      .style("fill", "#000");
  }, [data]);

  return (
    <div className="flex items-center justify-center h-screen">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default SunburstChart;
