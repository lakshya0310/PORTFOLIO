export const PROFILE = {
  name: "Lakshya Jindal",
  firstName: "Lakshya",
  lastName: "Jindal",
  email: "lakshyajindal0310@gmail.com",
  photo: "lakshya.jpg",
  tagline: "Motion Planning · Edge AI · Silicon · Signals",
  bio: "I am pursuing an Integrated B.Tech and M.S. (by Research) in Electronics and Communication Engineering at the International Institute of Information Technology, Hyderabad (IIIT-H). I work as an Undergraduate Researcher at the Robotics Research Centre (RRC), where I design scalable, low-latency algorithms and software pipelines for high-dimensional motion planning, numerical optimization, and perception.",
  bio2: "My interests span Robotics & Motion Planning, Systems & Edge AI, and Computer Architecture / VLSI / Signal Processing. Recently, our work on formal kinematic infeasibility certification in motion planning was accepted to IEEE Robotics and Automation Letters (RA-L).",
};

export const SOCIALS = [
  { key: "github", label: "GitHub", url: "https://github.com/lakshya0310" },
  {
    key: "scholar",
    label: "Google Scholar",
    url: "https://scholar.google.com/citations?user=lW9weggAAAAJ&hl=en",
  },
  { key: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/lakshyaj03" },
  { key: "email", label: "Email", url: "mailto:lakshyajindal0310@gmail.com" },
  { key: "codeforces", label: "Codeforces", url: "https://codeforces.com/profile/Laksh_J" },
];

export const PUBLICATION = {
  title: "Towards Kinematic Actionable Infeasibility Detection in Motion Planning",
  venue: "IEEE Robotics and Automation Letters (RA-L)",
  status: "Accepted",
  arxivId: "arXiv:2609.32806",
  arxivUrl: "https://arxiv.org/abs/2609.32806",
  bibUrl: "https://lakshya0310.github.io/data/infeasibility2026.bib",
  authors: "A. Rath, L. Jindal, A. Thomas — Robotics Research Centre, IIIT Hyderabad",
  abstract:
    "Introduced a formal geometry-driven verification and certification framework for proving path non-existence in high-DOF kinematic state spaces, leveraging parallel C++ and GPU-accelerated simplicial reconstruction.",
};

export const EXPERIENCE = [
  {
    role: "Undergraduate Researcher / Research Assistant",
    org: "Robotics Research Centre (RRC), IIIT Hyderabad",
    period: "Apr 2025 – Present",
    points: [
      "Engineered high-performance motion planning, perception, and numerical optimization algorithms in C++ and Python across high-dimensional configuration spaces.",
      "Architected modular, low-latency simulation pipelines, automated test harnesses, and regression benchmarking suites on Linux/Git to transition experimental prototypes into production-quality software.",
    ],
  },
  {
    role: "B.Tech + M.S. (By Research), Electronics & Communication Engineering",
    org: "International Institute of Information Technology, Hyderabad (IIIT-H)",
    period: "Aug 2023 – Present",
    points: [],
  },
];

export const CATEGORIES = [
  { key: "all", label: "All" },
  { key: "robotics", label: "Robotics, Control & Perception" },
  { key: "systems-ai", label: "Systems, AI & Quantum" },
  { key: "vlsi", label: "VLSI & Computer Architecture" },
  { key: "analog-dsp", label: "Analog, RF & Signal Processing" },
];

export const PROJECTS = [
  {
    slug: "infeasibility-proofs",
    title: "Scaling Motion Planning Infeasibility Proofs",
    categories: ["robotics"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/Li_Dantam_2023_Paper_implementation" }],
    tags: ["C++", "Python", "OMPL", "GUDHI", "FCL", "Multi-threading"],
    description:
      "Implemented the asymptotically complete motion planner from Li & Dantam (IEEE RA-L 2023), running PRM, Sample-Driven Connectivity Learning (SDCL), and proof construction across concurrent threads. Engineered parallel codimension-one manifold tracing via Coxeter triangulation with concurrent hash tables, integrating local elastic vertex updates and recursive simplex bisection to certify C_obs containment.",
  },
  {
    slug: "batch-mpc",
    title: "Multi-Modal Batch-MPC for Autonomous Driving",
    categories: ["robotics"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/Batch_MPC_Python" }],
    tags: ["C++", "Python", "Eigen", "Optimal Control", "MPC"],
    description:
      "Implemented a real-time batch non-holonomic trajectory optimizer based on Adajania et al. (IEEE RA-L 2022) to generate parallel collision-free candidate trajectories for multi-modal highway driving maneuvers. Formulated a linearization-free multi-convex relaxation of kinematic, acceleration, and collision constraints solved via Alternating Minimization, reducing parallel iterations to fast vectorized matrix-vector products.",
  },
  {
    slug: "mdpcalib",
    title: "Target-Less LiDAR-Camera Calibration (MDPCalib)",
    categories: ["robotics"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/MDPCalib_MR_Project" }],
    tags: ["Python", "Computer Vision", "Sensor Fusion", "Nonlinear Optimization"],
    description:
      "Implemented target-less extrinsic sensor calibration from scratch based on the MDPCalib framework, aligning visual and LiDAR odometry trajectories for initialization-free coarse registration. Developed modular components for feature extraction, deep 2D-pixel-to-3D-point correspondence matching, and Cauchy-robustified nonlinear joint optimization.",
  },
  {
    slug: "navisight",
    title: "NaviSight — Low-Latency Edge AI Wearable for Assistive Navigation",
    categories: ["robotics"],
    links: [{ label: "Website / Code", url: "https://navisight.in" }],
    tags: ["Embedded C++", "Python", "PyTorch", "YOLOv11", "Binaural Audio DSP"],
    description:
      "Fine-tuned a YOLOv11 model for real-world obstacle detection and constructed a low-latency offline inference pipeline in C++ and Python for resource-constrained embedded hardware. Engineered a spatial alignment system utilizing binaural audio feedback, applying pitch and frequency modulation to dynamically convey object distance, direction, and center-alignment.",
  },
  {
    slug: "gazebo-detection",
    title: "Real-Time Object Detection in Gazebo Simulation",
    categories: ["robotics"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/Object_Detection_Bot" }],
    tags: ["ROS 1", "Python", "PyTorch", "YOLOv5", "OpenCV", "Gazebo"],
    description:
      "Developed a modular ROS 1 perception package for real-time 2D object detection in Gazebo simulation, subscribing to simulated RGB camera streams via cv_bridge for low-latency frame processing and broadcasting bounding-box coordinates and class confidence telemetry for downstream autonomous navigation.",
  },
  {
    slug: "c-shell",
    title: "Custom POSIX-Compliant Unix Shell in C",
    categories: ["systems-ai"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/C-Shell" }],
    tags: ["C", "POSIX APIs", "Linux", "Sockets", "GDB & Valgrind"],
    description:
      "Architected a modular Unix shell in C supporting process lifecycle management (fork, execvp), foreground/background job control, multi-stage piping, I/O redirection, networking utilities, and asynchronous signal handling. Enforced strict pointer lifecycle tracking and validated zero memory leaks using Valgrind.",
  },
  {
    slug: "crazy-taxi",
    title: "Crazy Taxi — AI Multimodal Vehicle Damage Claims Assessment",
    categories: ["systems-ai"],
    links: [{ label: "GitHub", url: "https://github.com/PritK99/Crazy-Taxi" }],
    highlight: "3rd Place, Megathon 2025",
    tags: ["Python", "PyTorch", "YOLO", "Grad-CAM", "NLP / TF-IDF"],
    description:
      "Developed an end-to-end multimodal pipeline to evaluate automotive insurance claims by fusing unstructured text descriptions and vehicle images. Integrated YOLO object detection, Grad-CAM visual explainability, and TF-IDF semantic matching to verify cross-modal consistency, detect fraudulent images, and output automated damage severity and cost bands.",
  },
  {
    slug: "quantum-battleship",
    title: "Quantum Battleship via Interaction-Free Measurement",
    categories: ["systems-ai"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/Quantum_BattleShip/" }],
    tags: ["Qiskit", "Python", "Quantum Algorithms", "Jupyter"],
    description:
      "Developed a quantum algorithm applying Elitzur-Vaidman interaction-free measurement to solve a Battleship grid optimally. Built and simulated quantum circuits in Qiskit utilizing probe superposition and entanglement, reducing classical query complexity from O(N²) to O(N).",
  },
  {
    slug: "realtime-chat",
    title: "Distributed Real-Time Messaging Application",
    categories: ["systems-ai"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/realtime-chat-app" }],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "JWT"],
    description:
      "Designed and deployed a full-stack real-time messaging platform featuring JWT authentication, REST APIs, and MongoDB persistence. Implemented low-latency bidirectional communication via Socket.IO supporting live presence tracking, delivery acknowledgements, and read receipts.",
  },
  {
    slug: "riscv-processor",
    title: "5-Stage Pipelined 32-Bit RISC-V Processor Design & Verification",
    categories: ["vlsi"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/RISC-V-Processor" }],
    tags: ["SystemVerilog", "Verilog HDL", "RTL Design", "SVA Verification", "Computer Architecture"],
    description:
      "Designed microarchitecture and synthesizable RTL for sequential and 5-stage pipelined 32-bit RISC-V processors (IF, ID, EX, MEM, WB) with integrated data forwarding, hazard detection, and branch control logic. Developed self-checking SystemVerilog testbenches, assertion checkers, and randomized instruction suites to verify corner-case data, control, and structural hazards.",
  },
  {
    slug: "cla-adder",
    title: "Full-Custom 4-Bit Carry Lookahead Adder (CLA) in TSMC 180nm",
    categories: ["vlsi"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/4-Bit-CLA-Adder" }],
    tags: ["Verilog HDL", "CMOS & TSPC Logic", "MAGIC Layout", "SPICE", "FPGA"],
    description:
      "Implemented a high-speed 4-bit CLA across Verilog RTL, transistor-level static CMOS and TSPC dynamic logic, and full-custom physical layout in MAGIC using TSMC 180nm technology. Performed pre- and post-layout SPICE simulations, DRC/LVS verification, parasitic extraction, and FPGA hardware validation to optimize critical-path delay and power.",
  },
  {
    slug: "rtl-gdsii",
    title: "ASIC RTL-to-GDSII Physical Design & ML Leakage Power Estimation",
    categories: ["vlsi"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/RTL_To_GDS_Assignment" }],
    tags: ["Verilog", "Logic Synthesis", "STA", "Place & Route", "Python ML"],
    description:
      "Executed end-to-end RTL-to-GDSII physical design flow including synthesis, floorplanning, placement, Clock Tree Synthesis (CTS), routing, and DRC/LVS sign-off, paired with Python/Shell automation for multi-corner Static Timing Analysis (STA). Built a Python ML regression pipeline modeling transistor subthreshold leakage across four CMOS operating zones (NMOS/PMOS ON/OFF) against golden SPICE simulations.",
  },
  {
    slug: "dsp-reconstruction",
    title: "Non-Uniform Signal Reconstruction & Audio Spectral Analysis",
    categories: ["analog-dsp"],
    links: [{ label: "GitHub", url: "https://github.com/lakshya0310/Signal_Processing_Project" }],
    tags: ["MATLAB", "DSP", "STFT", "Spline & Sinc Interpolation", "K-Means"],
    description:
      "Formulated signal reconstruction algorithms in MATLAB for non-uniform jittered sampling using cubic spline interpolation and Sinc recovery, minimizing Mean Squared Error across varying jitter factors. Built an audio DSP pipeline using STFT and digital filtering to extract spectral centroid, bandwidth, and 85% roll-off features for unsupervised drum transient classification.",
  },
  {
    slug: "rf-qdc-amp",
    title: "100 kHz RF Quadrature Down-Converter & 1.5W Multi-Stage Audio Amplifier",
    categories: ["analog-dsp"],
    links: [
      { label: "QDC — GitHub", url: "https://github.com/lakshya0310/Quadrature_Down_Converter" },
      { label: "Amplifier — GitHub", url: "https://github.com/lakshya0310/Audio-Amplifier" },
    ],
    tags: ["RF / Mixed-Signal", "Analog Circuit Design", "OpAmp & Class-AB", "LTSpice"],
    description:
      "Quadrature Down-Converter: designed and simulated a 100 kHz RF-to-IF receiver front-end integrating local oscillators, 90° phase shifters, analog mixers, and active low-pass filters for high image-rejection I/Q demodulation. Multi-Stage Audio Amplifier: engineered and hardware-validated a >1.5W analog amplifier driving a 10Ω load (±5V supply), integrating a differential pre-amplifier, common-emitter gain stage, 20 Hz–20 kHz band-pass filter, and Class-AB power stage.",
  },
  {
    slug: "instrumentation",
    title: "Transimpedance Pulse Oximeter & Real-Time Digital Capacitance Meter",
    categories: ["analog-dsp"],
    links: [],
    tags: ["Embedded C/C++", "Arduino Firmware", "Transimpedance Amplifier", "Sensor Interfacing"],
    description:
      "Designed a transimpedance-amplifier-based optical pulse oximeter using synchronized red/infrared LEDs, custom analog front-end filtering, and microcontroller firmware for real-time SpO₂ computation, alongside an embedded RC transient timing firmware system for real-time unknown capacitance measurement.",
  },
];

export const HONORS = [
  { icon: "trophy", text: "Selected among the Top 45 Teams in the Adobe University Hackathon 2026." },
  { icon: "medal", text: "Secured 3rd Place (out of 100+ teams) in Megathon 2025 for building an automated multimodal vehicle damage assessment engine." },
  { icon: "code", text: "Solved 200+ Data Structures & Algorithms problems across Codeforces (Peak Rating: 1269, Handle: Laksh_J), LeetCode, and CodeChef." },
  { icon: "grad", text: "Secured AIR 4391 in JEE Mains 2023 and AIR 10931 in JEE Advanced 2023 (Top 0.5% nationally)." },
  { icon: "award", text: "Qualified for the KVPY 2022 Fellowship and cleared Pre-RMO 2019 (National Mathematics Olympiad Stage 1)." },
];

export const SKILLS = [
  {
    heading: "Languages & Systems",
    items: ["C", "C++ (C++14/17/20)", "Python (NumPy, SciPy, Pandas)", "SystemVerilog", "Verilog HDL", "MATLAB", "Bash/Shell", "TCL", "SQL", "Linux/POSIX", "Git", "CMake", "GDB", "Valgrind", "Multi-threading"],
  },
  {
    heading: "Robotics & AI",
    items: ["ROS 1 / ROS 2", "Gazebo", "OMPL", "FCL", "GUDHI", "Eigen", "NLopt", "Model Predictive Control (MPC)", "PyTorch", "TensorFlow", "YOLO", "OpenCV", "PCL", "Sensor Fusion", "Qiskit"],
  },
  {
    heading: "VLSI, Architecture & Analog/DSP",
    items: ["RTL-to-GDSII Flow", "Static Timing Analysis (STA)", "SVA Assertions", "CMOS/TSPC Layout (MAGIC)", "LTSpice", "NGSpice", "FPGA Prototyping", "RF Mixers / I-Q Demodulation", "STFT / FFT Spectral Analysis"],
  },
];

export const CVS = [
  { label: "Robotics", url: "data/Lakshya_Robotics_CV.pdf" },
  { label: "Software & AI", url: "data/Lakshya_Software_CV.pdf" },
  { label: "Systems", url: "data/Lakshya_Nvidia_CV.pdf" },
  { label: "Hardware & VLSI", url: "data/Lakshya_Meta_Ver_CV.pdf" },
  { label: "Signal Processing", url: "data/Lakshya_TI_SP.pdf" },
];

export const MARQUEE_ITEMS = [
  "Motion Planning",
  "Edge AI",
  "Computer Architecture",
  "VLSI",
  "Signal Processing",
  "Numerical Optimization",
  "Perception",
  "Quantum Computing",
];
