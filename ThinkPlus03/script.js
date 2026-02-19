// On Load, start with Student view
window.onload = () => switchRole();

function switchRole() {
    const role = document.getElementById('roleSelect').value;
    const nav = document.getElementById('nav-links');
    const title = document.getElementById('view-title');

    if (role === 'student') {
        title.innerText = "Student Dashboard";
        nav.innerHTML = `
            <a onclick="showStudentSubmit()">Submit Assignment</a>
            <a onclick="showStudentStatus()">Submission Status</a>
            <a onclick="showStudentFeedback()">View Feedback</a>
        `;
        showStudentSubmit();
    } else {
        title.innerText = "Instructor Dashboard";
        nav.innerHTML = `
            <a onclick="showInsCreate()">Create Assignment</a>
            <a onclick="showInsView()">View Submissions</a>
            <a onclick="showInsAI()">AI Feedback Review</a>
        `;
        showInsCreate();
    }
}

// --- STUDENT CONTENT ---
function showStudentSubmit() {
    document.getElementById('dynamic-content').innerHTML = `
        <div class="card">
            <h3>New Submission</h3>
            <label>Upload PDF</label><br>
            <input type="file" accept=".pdf" style="margin: 10px 0;"><br>
            <label>Or Paste Text</label>
            <textarea placeholder="Write your content here..."></textarea>
            <button onclick="alert('Assignment Sent!')">Submit Now</button>
        </div>`;
}

function showStudentStatus() {
    document.getElementById('dynamic-content').innerHTML = `
        <div class="card">
            <p><strong>Assignment:</strong> Midterm Essay</p>
            <p><strong>Status:</strong> <span style="color:green">Submitted</span></p>
            <p><strong>Timestamp:</strong> Feb 19, 2026</p>
        </div>`;
}

function showStudentFeedback() {
    document.getElementById('dynamic-content').innerHTML = `
        <div class="card">
            <h3>Grade: 92/100</h3>
            <p>"The analysis of the prompt was thorough. Great work on the citations."</p>
        </div>`;
}

// --- INSTRUCTOR CONTENT ---
function showInsCreate() {
    document.getElementById('dynamic-content').innerHTML = `
        <div class="card">
            <h3>Create New Task</h3>
            <input type="text" placeholder="Assignment Title" style="width:100%; padding:10px; margin-bottom:10px; box-sizing:border-box;">
            <textarea placeholder="Instructions for students..."></textarea>
            <button onclick="alert('Assignment Created!')">Post Assignment</button>
        </div>`;
}

function showInsView() {
    document.getElementById('dynamic-content').innerHTML = `
        <div class="card">
            <h3>Submissions (1)</h3>
            <p>Student ID: <strong>std_442</strong></p>
            <p>File: essay_final.pdf</p>
            <button style="background:#34495e">Download File</button>
        </div>`;
}

function showInsAI() {
    document.getElementById('dynamic-content').innerHTML = `
        <div class="card">
            <h3>AI Evaluation Engine</h3>
            <div class="ai-box">
                <p><strong>Analysis:</strong> Text matches prompt requirements (95%).</p>
                <p><strong>Plagiarism Check:</strong> 2% (No risk found).</p>
                <p><strong>Suggested Grade:</strong> A</p>
            </div>
            <button style="margin-top:15px;">Approve & Post Feedback</button>
        </div>`;
}