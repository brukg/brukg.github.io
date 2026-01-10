export const portfolioData = {
  personal: {
    name: "Bruk Gebregziabher",
    title: "Robotics & AI Engineer",
    subtitle: "Autonomous Navigation • SLAM • Vision-Language-Action Models",
    email: "bruk@signalbotics.com",
    phone: "+4915252074355",
    location: "Germany",
    linkedin: "https://linkedin.com/in/bruk-g",
    github: "https://github.com/brukg",
    summary: "Experienced Robotics Engineer specializing in autonomous navigation, SLAM, and Vision-Language-Action models for humanoid and mobile robots. Strong background in ROS2, sensor fusion, and real-time systems with publications at ICRA and IRCE conferences.",
  },

  skills: {
    primary: [
      { name: "ROS2 / ROS", category: "Robotics" },
      { name: "Python", category: "Programming" },
      { name: "C++", category: "Programming" },
      { name: "SLAM", category: "Navigation" },
      { name: "Computer Vision", category: "Perception" },
      { name: "Sensor Fusion", category: "Perception" },
    ],
    technical: {
      "Navigation & SLAM": ["RTABMAP", "CARTOGRAPHER", "AMCL", "ISAAC-VSLAM", "KISS-ICP", "Nav2"],
      "Planning & Control": ["MoveIt", "RRT", "PRM", "A*", "DWA", "MPPI", "MPC", "Pure Pursuit"],
      "ML & Vision": ["OWL-ViT", "YOLO", "SAM", "CNNs", "TensorRT", "VLA Models"],
      "Simulation": ["Isaac Sim", "Isaac Lab", "Gazebo", "PyBullet"],
      "Hardware": ["NVIDIA Jetson (Xavier, Orin)", "LiDAR", "IMU", "Stereo Vision", "CANopen"],
      "Frameworks": ["ACT", "OpenPI", "SmolVLA", "XVLA", "Gr00t"],
    }
  },

  experience: [
    {
      title: "Advanced Navigation Engineer",
      company: "Neura Robotics",
      location: "Germany",
      period: "June 2025 – Present",
      highlights: [
        "Developing autonomous navigation systems for bimanual mobile robots (MIPA, 4NE-1)",
        "Building Vision-Language-Action models from data collection to model architecture",
        "Working with Isaac Lab, Isaac Sim, ACT, OpenPI, SmolVLA, XVLA, and Gr00t frameworks"
      ]
    },
    {
      title: "Senior Robotics Engineer - VSLAM",
      company: "Biel Glasses",
      location: "Barcelona, Spain",
      period: "Oct 2023 – May 2025",
      highlights: [
        "Directed creation of Visual SLAM system for precise outdoor navigation with 6DOF tracking",
        "Developed multi-sensor fusion strategy combining stereo vision, IMUs, and GPS",
        "Configured NVIDIA Jetson platforms (XAVIER and ORIN) for efficient on-device AI processing",
        "Applied optimization tools (GTSAM, g2o) for real-time mapping and localization"
      ]
    },
    {
      title: "Robotics Engineer - Autonomy",
      company: "TAVIL IND, S.A.U.",
      location: "Girona, Spain",
      period: "Feb 2023 – Sep 2023",
      highlights: [
        "Developed comprehensive autonomy solutions for industrial AMRs (forklifts)",
        "Integrated LiDAR, IMU, odometry, and stereo vision for robust perception systems",
        "Implemented DWA and MPPI control strategies for real-time path planning",
        "Engineered CANopen communication protocols for reliable system integration"
      ]
    },
    {
      title: "Robotics Engineer - Localization",
      company: "Romb Technologies",
      location: "Zagreb, Croatia",
      period: "Jul 2022 – Oct 2022",
      highlights: [
        "Specialized in multi-sensor fusion achieving sub-centimeter level noise reduction",
        "Developed sophisticated sensor fusion algorithm minimizing environmental noise",
        "Enabled implementation of precise control algorithms reducing jerk in forklift operations"
      ]
    },
    {
      title: "Summer Internship - AI Task Planning",
      company: "ViCOROB - University of Girona",
      location: "Girona, Spain",
      period: "Jun 2022 – Aug 2022",
      highlights: [
        "Developed AI-driven task planning algorithms using PDDL and Behaviour Trees",
        "Worked on Girona 500 AUV with dual robotic arms for underwater inspection",
        "Enhanced AUV's ability to perform complex inspection tasks autonomously"
      ]
    },
    {
      title: "CEO & Founder",
      company: "Signal Technologies",
      location: "Mekelle, Ethiopia",
      period: "Oct 2019 – May 2022",
      highlights: [
        "Founded and led software development startup",
        "Managed team and led technical projects"
      ]
    },
    {
      title: "Assistant Lecturer",
      company: "Mekelle University",
      location: "Mekelle, Ethiopia",
      period: "Jul 2017 – Jun 2021",
      highlights: [
        "Taught advanced courses in computer science",
        "Mentored over 200 students and guided 20+ projects"
      ]
    }
  ],

  education: [
    {
      degree: "M.Sc. Intelligent Field Robotic Systems",
      specialization: "Multi-Robot Systems and Aerial Robotics",
      institution: "University of Girona & University of Zagreb (IFRoS)",
      period: "2021 – 2023",
      gpa: "8.86/10 CGPA",
      thesis: "Multi Object Tracking for Predictive Collision Avoidance",
      coursework: ["Computer Vision", "Manipulation", "Probabilistic Robotics", "Task/Motion Planning", "Machine Learning", "Aerial Robotics", "Multi Robot Systems"]
    },
    {
      degree: "B.Sc. Computer Science and Engineering",
      institution: "Mekelle Institute of Technology - Mekelle University",
      period: "2012 – 2017",
      gpa: "3.93/4.0 CGPA",
      coursework: ["Embedded Systems", "C/C++", "Microcontrollers", "Digital Electronics", "Operating Systems", "Probability Theory", "Numerical Methods"]
    }
  ],

  publications: [
    {
      title: "VQA-driven Event Maps for Assistive Navigation for People with Low Vision in Urban Environments",
      venue: "2025 IEEE International Conference on Robotics and Automation (ICRA)",
      year: "2025",
      type: "Conference"
    },
    {
      title: "Forecast-Driven MPC for Decentralized Multi-Robot Collision Avoidance",
      venue: "International Conference on Intelligent Robotics and Control Engineering (IRCE)",
      year: "2023",
      type: "Conference"
    },
    {
      title: "Multi Object Tracking for Predictive Collision Avoidance",
      venue: "Preprint",
      year: "2023",
      type: "Preprint"
    }
  ],

  projects: [
    {
      title: "Vision-Language-Action Models for Bimanual Robots",
      description: "End-to-end VLA pipeline from data collection to model deployment for bimanual mobile manipulation.",
      tags: ["Isaac Lab", "VLA", "ACT", "SmolVLA", "Gr00t"],
      type: "Professional"
    },
    {
      title: "VTOL Tilt-Rotor Aircraft",
      description: "Developed a VTOL tilt-rotor aircraft with ROS2-based autonomy flight stack leveraging ArduPilot.",
      tags: ["ROS2", "ArduPilot", "UAV", "Autonomous Navigation"],
      type: "Personal"
    },
    {
      title: "Multi-object Tracking and Collision Avoidance",
      description: "Real-time tracking and trajectory prediction using 2D LiDAR for autonomous collision avoidance. Validated through industrial tests.",
      tags: ["LiDAR", "Tracking", "Prediction", "Industrial"],
      link: "https://youtu.be/demo",
      type: "Research"
    },
    {
      title: "Autonomous UAV Landing on Docking Station",
      description: "Comprehensive autonomous landing using Behavior Trees and Twin Delayed DDPG (TD3) for adaptive response.",
      tags: ["Behavior Trees", "TD3", "Reinforcement Learning", "UAV"],
      type: "Research"
    },
    {
      title: "Swarm Formation Control",
      description: "Dynamic formation control algorithms for multi-robot systems with adaptive formations based on environmental cues.",
      tags: ["Multi-Robot", "Swarm", "Formation Control"],
      type: "Research"
    },
    {
      title: "Pose EKF SLAM",
      description: "Extended Kalman Filter based SLAM with pose graph optimization for reduced computational demands.",
      tags: ["SLAM", "EKF", "Pose Graph"],
      type: "Research"
    },
    {
      title: "Autonomous Humanoid Soccer Robot",
      description: "Designed humanoid robot for RoboCup with locomotion, ball detection, and strategic decision-making algorithms.",
      tags: ["Humanoid", "Computer Vision", "Motion Planning"],
      type: "Competition"
    }
  ]
};
