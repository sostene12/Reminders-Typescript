import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Reminder from "./interfaces/Reminder";
import RemindeList from "./components/RemindeList";
import ReminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () =>{
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  }

  const removeReminder = (id:number) => {
    const filteredReminders = reminders.filter(reminder => reminder.id !== id);
    setReminders(filteredReminders)
  }

  const addReminder = async (title:string) =>{
    const newReminder = await ReminderService.addReminder(title);
    setReminders([newReminder,...reminders])
  }

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <RemindeList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
