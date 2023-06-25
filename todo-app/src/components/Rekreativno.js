export default function Rekreativno () {
    const rekreativno =
    [
       {
          "id": 6,
          "title": "Read book",
          "text": "Chapter 5 and 6",
          "is_done": false,
          "date": "2023-06-27"
        },
        {
          "id": 7,
          "title": "Attend meeting",
          "text": "Discuss project updates",
          "is_done": false,
          "date": "2023-06-28"
        },
        {
          "id": 8,
          "title": "Clean the house",
          "text": "Dust, vacuum, and mop",
          "is_done": false,
          "date": "2023-06-29"
        },
        {
          "id": 9,
          "title": "Prepare for presentation",
          "text": "Gather data and create slides",
          "is_done": false,
          "date": "2023-06-30"
        },
        {
          "id": 10,
          "title": "Plan vacation",
          "text": "Research destinations and book flights",
          "is_done": false,
          "date": "2023-07-01"
        }
      ]

    return (
        <>
        {rekreativno.map((tasks) => (
            <div key={tasks.id}>
            <p>{tasks.title}</p>
            </div>
        ))}
        </>
    )
}