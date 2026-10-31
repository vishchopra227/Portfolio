const projects = [
  {
    title: "FinSight AI",

    description:
      "A machine learning web app that predicts loan risk based on applicant financial data to help evaluate approval eligibility.",

    details:
      "Trained a classification model on applicant financial metrics and built a Streamlit interface where users can input details and instantly view the predicted risk assessment.",

    technologies: [
      "Machine Learning",
      "Loan Risk Prediction",
      "Python",
      "Streamlit",
    ],

    github: "https://github.com/vishchopra227/FinSight-AI",

    liveDemo:
      "https://finsight-ai-29knf9xdgrwxzdalbxlnky.streamlit.app/",

    featured: true,
  },
  {
    title: "Financial Document Intelligence",

    description:
      "A document analysis platform where users can upload financial reports, ask questions, and retrieve accurate answers grounded in document context.",

    details:
      "A full-stack RAG application built with FastAPI and React. It processes financial documents into vector embeddings with Hugging Face models and uses Groq for fast LLM inference, supporting document comparison, metrics extraction, and data export.",

    technologies: [
      "RAG",
      "React",
      "TypeScript",
      "FastAPI",
      "Groq",
      "Hugging Face",
      "SQLite",
    ],

    github:
      "https://github.com/vishchopra227/financial-document-intelligence",

    liveDemo:
      "https://financial-document-intelligence-1-ihzp.onrender.com/",

    featured: true,
  },
];

export default projects;
