exports.seed = function(knex) {
  return knex("components").insert([
    {
      jobsheet_id: 1,
      component_id: "1",
      rl_category: "",
      rl_number: "",
      descriptions: "Electric Motor",
      manufacturer: "Baldor",
      part_number: "284TC",
      stock_code: "",
      electrical_address: "",
      component_application:
        "This electric motor is the input power for the hydraulic system, turning pump 2 at 1680 rpm.",
      reference_tag: "",
      settings: "",
      image: "1.jpg",
      resources: "E099.mp4",
      cutsheet: "Baldor ElectricMotor284TC.pdf",
      maintenance_video: ""
    },
    {
      jobsheet_id: 1,
      component_id: "2",
      rl_category: "",
      rl_number: "",
      descriptions: "Pump, Axial Piston",
      manufacturer: "Vickers",
      part_number: "PVM074ER09GS02AA-28",
      stock_code: "",
      electrical_address: "",
      component_application:
        "This pressure compensated axial piston pump provides flow and pressure to all components, including actuators, in the J1 hydraulic system.",
      reference_tag: "",
      settings: "",
      image: "2.jpg",
      resources: "H034.mp4",
      cutsheet: "Vickers PVM AxialPistonPump.pdf",
      maintenance_video: ""
    },
    {
      jobsheet_id: 1,
      component_id: "3",
      rl_category: "",
      rl_number: "",
      descriptions: "Ball Valve",
      manufacturer: "Hydac",
      part_number: "Not Provided",
      stock_code: "",
      electrical_address: "",
      component_application:
        "This ball valve isolates the inlet of pump 2 from the hydraulic reservoir.",
      reference_tag: "",
      settings: "",
      image: "3.jpg",
      resources: "H098.mp4",
      cutsheet: "Hydac BallValve.pdf",
      maintenance_video: ""
    }
  ]);
};