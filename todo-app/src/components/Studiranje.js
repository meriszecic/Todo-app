import { useState } from "react"
import { Link } from "react-router-dom"

const studiranje = 
[
    {
      "id": 1,
      "title": "Buy groceries",
      "text": "Milk, bread, eggs, and vegetables",
      "is_done": false,
      "date": "2023-06-23"
    },
    {
      "id": 2,
      "title": "Pay bills",
      "text": "Electricity and water bills",
      "is_done": false,
      "date": "2023-06-24"
    },
    {
      "id": 3,
      "title": "Call mom",
      "text": "Check how she's doing",
      "is_done": false,
      "date": "2023-06-25"
    },
    {
      "id": 4,
      "title": "Finish report",
      "text": "Complete the quarterly sales report",
      "is_done": false,
      "date": "2023-06-26"
    },
    {
      "id": 5,
      "title": "Go for a run",
      "text": "Run for 30 minutes",
      "is_done": false,
      "date": "2023-06-26"
    }
]
export default function Studiranje() {
    const [studies, setStudies] = useState([...studiranje])
    const [vrednost, setVrednost] = useState('')
    const [someText, setSomeText] = useState('')
    const [isDone, setIsDone] = useState(false)
    const [date,setDate] = useState('')
    
    const handleAdd = () => {
        const id = studies.slice(-1);
        const newTask = {title: vrednost, text: someText, is_done: isDone,date:date ,id: id[0].id + 1}
        console.log(newTask); 
        setStudies([...studies, newTask])
    }

    return (<>
        <label>Add task</label>
        <input value={vrednost} onChange={e => setVrednost(e.target.value)} type="text"></input>
        <input value={someText} onChange={e => setSomeText(e.target.value)} type="text"></input>
        <input value={date} onChange={e => setDate(e.target.value)} type="date"></input>
        <button onClick={handleAdd}>add</button>
    {studies.map((tasks) => <div key={tasks.id}>
    <Link to={`/studies/${tasks.id}`}>{tasks.title}</Link>
    </div>
    )}
    </>)
}