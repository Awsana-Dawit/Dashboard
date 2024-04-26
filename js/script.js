const ctx = document.getElementById("stasticsChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Total", "Pending", "Closed", "Deleted"],
    datasets: [
      {
        label: "Tickets",
        data: [2500, 500, 1900, 100],
        backgroundColor: [
          "rgb(245, 158, 11)",
          "rgb(0, 117, 255)",
          "rgb(34, 197, 94)",
          "rgb(244, 67, 54)",
        ],
        hoverOffset: 4,
      },
    ],
  },
});
