import { useEffect } from "react";
import { useParams } from "react-router-dom"

const data = [
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
export default function DetailsOfStuding() {
    const {id} = useParams()

    function search(nameKey, myArray){
        for (let i=0; i < myArray.length; i++) {
            if (myArray[i].id == nameKey) {
                return myArray[i];
            }
        }
    }
    useEffect(() => {
        const resultObject = search(id, data);
        console.log(resultObject)
    }, [])
}