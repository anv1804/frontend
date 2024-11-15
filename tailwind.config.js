module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "message-layout": "350px 1fr 300px",
      },
    },
  },
  plugins: [require("daisyui")],
};
