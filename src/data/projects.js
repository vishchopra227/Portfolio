const projects = [
  {
    title: "FinSight AI",

    description:
      "FinSight AI is a machine learning application designed to assess loan risk and help evaluate whether a loan application is suitable for approval.",

    details:
      "The application takes relevant loan applicant information as input and uses a trained machine learning classification model to predict loan risk. The model output is presented through an interactive Streamlit interface, making the prediction process simple and easy to understand.",

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
      "A document analysis platform that enables users to upload financial documents, extract relevant information, and interact with document data through intelligent retrieval and question answering.",

    details:
      "A full-stack RAG-based application that combines document processing, vector-based retrieval, and LLM-powered responses to simplify financial document analysis. Includes document management, conversational querying, document comparison, metrics, and data export capabilities.",

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
