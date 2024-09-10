import {useState, useEffect} from 'react'

const useDebounce = (text, delay)=>{
    const [debounce, setDebounce] = useState(text)
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounce(text);
        },delay)
        return(()=>{
            clearTimeout(timer)
        })
    },[text,delay])

    return debounce

}

export default function Debounce(){
    const [text, setText] = useState("")
    const debouncedText = useDebounce(text, 1000)
    
    return(
        <div>
            <input style={{"margin":"20px", "fontSize":"30px"}} type="text" placeholder="Type here" value={text} onChange={(e)=>setText(e.target.value)} />
            <h3>Typed Value: {debouncedText}</h3>
        </div>
    )
}