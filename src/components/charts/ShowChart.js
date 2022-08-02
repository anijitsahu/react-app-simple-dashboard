import "chart.js/auto"
import { Doughnut, Pie, Bar } from "react-chartjs-2"

// Constants
import Constants from "../Constants"

const ShowChart = (props) => {
	let { chartType, chartData } = props
	let allConstants = Constants()
	let options = {
		maintainAspectRatio: false,
		legend: {
			position: "bottom",
			labels: {
				boxWidth: 20,
			},
		},
		title: {
			display: true,
			text: allConstants.title,
		},
	}
	const chooseChart = () => {
		switch (chartType) {
			case "pie":
				return <Pie data={chartData} options={options} />
			case "doughnut":
				return <Doughnut data={chartData} options={options} />
			case "bar":
				options["legend"] = { display: false }
				return <Bar data={chartData} options={options} />
		}
	}

	let showChart = chooseChart()
	return <div className="chart-div">{showChart}</div>
}

export default ShowChart
