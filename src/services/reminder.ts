import axios from "axios";
import Reminder from "../interfaces/Reminder";

class ReminderServices{
    http = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com'
    })

    async getReminders(){
        const response = await this.http.get<Reminder[]>('/todos');
        return response.data;
    }

    async addReminder(title:string){
       const response = await this.http.post<Reminder>("/todos",{title});
       return response.data;
    }

    async removeReminder(id:number){
      const response = await  this.http.delete(`/todos/${id}`)
    }
}

export default new ReminderServices;