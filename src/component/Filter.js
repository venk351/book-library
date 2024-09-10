import {useState} from 'react'

export default function Filter(){
    const fruits = [
        "Apple",
        "Banana",
        "Grapes",
        "Orange",
        "Mango",
        "Pomogranet"
    ]
    //const [fruitList, setFruit] = useState(fruits)
    const [searchTerm, setSearchTerm] = useState("")
    const filterFruit = fruits.filter((fruit)=> fruit.toLowerCase().includes(searchTerm.toLowerCase()))
    return(
        <div>
            <input type='text' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            {filterFruit.map((fruit)=>(
                <p>{fruit}</p>
            ))}
        </div>
    )
}