import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Reminder from "./interfaces/Reminder";
import RemindeList from "./components/RemindeList";
import ReminderService from "./services/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () =>{
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  }

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <RemindeList items={reminders} />
    </div>
  );
}

export default App;
