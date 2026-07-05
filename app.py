import os
import json
from flask import Flask, render_template, request, jsonify
from openai import OpenAI

# -----------------------------
# Flask App
# -----------------------------
app = Flask(__name__)

# -----------------------------
# Groq Client
# -----------------------------
client = OpenAI(
    api_key=os.environ.get("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1"
)

# -----------------------------
# System Prompt
# -----------------------------
SYSTEM_PROMPT = """
You are an Apartment Maintenance AI Assistant.

Your responsibilities are:

1. Understand apartment maintenance complaints.
2. Identify the issue category.
3. Assign priority:
   - Low
   - Medium
   - High
   - Critical
4. Suggest the technician.
5. Estimate repair time.
6. Generate a short maintenance ticket summary.

Always return ONLY valid JSON.

Example:

{
  "category": "Electrical",
  "priority": "High",
  "technician": "Electrician",
  "estimated_time": "2 Hours",
  "summary": "Power outage in bedroom"
}
"""

# -----------------------------
# AI Function
# -----------------------------
def maintenance_ai(complaint):

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": complaint
            }
        ],
        temperature=0.2,
        response_format={"type": "json_object"}
    )

    return json.loads(response.choices[0].message.content)

# -----------------------------
# Home Page
# -----------------------------
@app.route("/")
def home():
    return render_template("index.html")

# -----------------------------
# Prediction API
# -----------------------------
@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    complaint = data.get("complaint", "").strip()

    if complaint == "":
        return jsonify({
            "error": "Complaint cannot be empty."
        }), 400

    try:
        result = maintenance_ai(complaint)
        return jsonify(result)

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500

# -----------------------------
# Run Flask
# -----------------------------
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
