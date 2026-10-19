"use client";
import { useRef, useState } from "react";
import { Upload, ArrowUp, Zap, Lock, Check, X } from "lucide-react";
import "./upload.css";

const MAX_BYTES = 10 * 1024 * 1024;
const ALLOWED = [".pdf", ".doc", ".docx"];

const STEPS = [
  { title: "Resume analyzed", sub: "Ready in 4s", tone: "green", dot: true },
  { title: "Skills matched", sub: "Deep taxonomy", tone: "indigo" },
  { title: "Experience matched", sub: "Contextual seniority", tone: "violet" },
  { title: "1,000+ sources searched", sub: "Real-time aggregators", tone: "blue" },
];

const formatSize = (b) => (b < 1024 * 1024 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`);

export default function ResumeUpload() {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);

  function accept(f) {
    if (!f) return;
    const ext = "." + f.name.split(".").pop().toLowerCase();
    if (!ALLOWED.includes(ext)) return setError("Please upload a PDF, DOC or DOCX file."), setFile(null);
    if (f.size > MAX_BYTES) return setError("File is larger than 10MB. Please choose a smaller file."), setFile(null);
    setError(""); setFile(f);
  }
  const clear = () => { setFile(null); setError(""); if (inputRef.current) inputRef.current.value = ""; };

  return (
    <section className="up section" id="upload">
      <div className="up__glow section__glow" aria-hidden="true" />
      <div className="container">
        <div className="up__head">
          <span className="up-pill"><i /> <b>Try it live</b> <u /> <span>v2.4 AI Engine</span></span>
          <h2 className="up__title">Upload your resume.<br /><em>Find jobs that fit.</em></h2>
          <p className="up__lead">Upload once. CampusPe reads your skills, experience, and preferences — then finds relevant jobs across 1,000+ sources.</p>
        </div>

        <div className="up-card-wrap">
          <aside className="up-float up-float--match" aria-hidden="true">
            <span className="up-float__icon up-float__icon--lime"><Zap size={13} fill="currentColor" /></span>
            <span><b>98% Match Rate</b><small>AI semantic rank</small></span>
          </aside>
          <aside className="up-float up-float--ats" aria-hidden="true">
            <span className="up-float__icon up-float__icon--peach"><Lock size={13} /></span>
            <span><b>ATS Compliant</b><small>Standardized parser</small></span>
          </aside>

          <div className="up-card">
            <div
              className={`up-drop ${dragging ? "is-dragging" : ""}`}
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => { e.preventDefault(); setDragging(false); accept(e.dataTransfer.files?.[0]); }}
            >
              <i className="up-drop__corner tl" /><i className="up-drop__corner tr" />
              <i className="up-drop__corner bl" /><i className="up-drop__corner br" />

              <h3>Upload your resume</h3>
              <p className="up-drop__text">PDF, DOC, or DOCX · Up to 10MB · We’ll use it to understand your skills and experience.</p>

              <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" hidden onChange={(e) => accept(e.target.files?.[0])} />
              <button type="button" className="up-btn" onClick={() => inputRef.current?.click()}>
                Upload resume <ArrowUp size={16} />
              </button>

              {file ? (
                <p className="up-drop__file" role="status"><Check size={14} /> {file.name} <small>({formatSize(file.size)})</small>
                  <button type="button" aria-label="Remove file" onClick={clear}><X size={14} /></button>
                </p>
              ) : (
                <p className="up-drop__hint">or drag and drop your file here</p>
              )}
              {error && <p className="up-drop__error" role="alert">{error}</p>}

              <div className="up-drop__types"><span>PDF</span><span>DOC</span><span>DOCX</span></div>
            </div>
          </div>
        </div>

        <ul className="up-steps">
          {STEPS.map((s) => (
            <li key={s.title} className="up-step">
              <span className={`up-step__icon up-step__icon--${s.tone}`}><Check size={16} strokeWidth={2.4} /></span>
              <span>
                <b>{s.title}</b>
                <small className={`up-step__sub up-step__sub--${s.tone}`}>{s.dot && <s />}{s.sub}</small>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
