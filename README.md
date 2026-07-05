# 🏢 Apartment Maintenance AI Using LLM

https://colab.research.google.com/drive/1_RjO2YgDBU8NNXZoR04AFVOUtGCiVEX2?usp=sharing

An AI-powered apartment maintenance assistant that uses a Large Language Model (LLM) to automatically analyze maintenance complaints, classify issues, assign priorities, recommend the appropriate technician, estimate repair time, and generate a structured maintenance ticket.

---

# Problem Statement

Apartment communities receive numerous maintenance complaints every day, such as electrical failures, plumbing leaks, security concerns, housekeeping requests, and elevator issues.

Traditionally, these complaints are reviewed manually by maintenance staff, which can lead to:

- Slow complaint processing
- Incorrect technician assignment
- Inconsistent priority levels
- Delayed response times
- Increased workload for apartment management
- Poor resident satisfaction

As the number of residents grows, managing maintenance requests manually becomes increasingly difficult.

---

# Solution

Apartment Maintenance AI automates the complaint analysis process using a Large Language Model (LLM).

The resident simply types a maintenance complaint in natural language.

The AI then:

- Understands the complaint
- Identifies the maintenance category
- Assigns the appropriate priority
- Recommends the correct technician
- Estimates repair time
- Generates a maintenance ticket summary

This reduces manual effort and improves maintenance response efficiency.

---

# Features

- 🏢 AI-powered Maintenance Complaint Analysis
- 🤖 Natural Language Understanding (LLM)
- ⚡ Automatic Priority Detection
- 👨‍🔧 Technician Recommendation
- ⏱ Estimated Repair Time Prediction
- 📝 Maintenance Ticket Generation
- 🌐 Responsive Web Interface
- 🧹 Clear Button to Reset Form
- ☁ Deployable on Render

---

# 🔄 Project Workflow

```
Resident
      │
      ▼
Enter Maintenance Complaint
      │
      ▼
Flask Backend
      │
      ▼
Groq API
(Llama 3.3 70B)
      │
      ▼
LLM understands complaint
      │
      ▼
Complaint Classification
      │
      ▼
Priority Detection
      │
      ▼
Technician Recommendation
      │
      ▼
Estimated Repair Time
      │
      ▼
Maintenance Ticket Generation
      │
      ▼
Display Result to Resident
```

---

# 🧠 AI Workflow

```
Complaint

↓

LLM Processing

↓

Issue Category

↓

Priority

↓

Technician

↓

Estimated Time

↓

Summary

↓

Maintenance Ticket
```

---

# 📂 Project Structure

```
Apartment-Maintenance-AI/
│
├── app.py
├── requirements.txt
├── README.md
├── .gitignore
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    └── script.js

# 📸 Example Complaint

```
The kitchen sink is leaking and water is flooding the floor.
```

---

# 🤖 AI Response

| Field | Output |
|-------|--------|
| Category | Plumbing |
| Priority | High |
| Technician | Plumber |
| Estimated Time | 2 Hours |
| Summary | Kitchen sink water leakage |

---

# 📈 Advantages

- Faster complaint handling
- Reduced manual work
- Consistent maintenance ticket generation
- Improved technician allocation
- Better resident satisfaction
- AI-driven maintenance management
- Scalable for large apartment communities


# 👨‍💻 Developer

**R. Sugumar, M.B.A.,**

