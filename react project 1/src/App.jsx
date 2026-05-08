import { useState } from "react";
import HookForm from "./HookForm";
import ManualForm from "./ManualForm";
import "./App.css";

export default function App() {
  const [tab, setTab] = useState("manual");
  return (
    <div>
      <div className="shell">
        <h1>Job Application</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="tab">
        <button onClick={()=>setTab('manual')}>Controlled-manual</button>
        <button onClick={()=>setTab('hook')}>Controlled-hook</button>
      </div>
      {tab === "manual" ? <ManualForm /> : <HookForm />}
    </div>
  );
}
