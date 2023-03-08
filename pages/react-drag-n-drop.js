import { useRef, useState } from "react"

const App =()=>{

    const dragItem = useRef();
    const dragOverItem = useRef();
    const [list, setList] = useState(['item1', 'item2', 'item3', 'item4', 'item5', 'item6']);

    const dragStart =(e, position)=>{
        dragItem.current = position;
        console.log(e.target.innerHTML)
        console.log(dragItem.current)
    }

    const dragEnter =(e, position)=>{
        dragOverItem.current = position;
        console.log(e.target.innerHTML)
        console.log(dragOverItem.current)

        e.target.style.background = 'red';
    }

    const drop =(e)=>{
        
        const copyListItems = [ ...list];
        const dragItemContent = copyListItems[dragItem.current];
        copyListItems.splice(dragItem.current, 1);
        copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        dragItem.current = null;
        dragOverItem.current = null;
        setList(copyListItems)
    }

    return(
        <>
            {
                list && 
                list.map((item, index)=>(
                    <div style={{ background: 'lightblue', margin: '20px 25%', textAlign: 'center', fontSize: '40px' }} key={index.toString()} draggable 
                    onDragStart={(e)=> dragStart(e, index)}
                    onDragOver={(e)=> dragEnter(e, index)}
                    onDragLeave={(e)=> e.target.style.background = 'lightblue'}
                    onDragEnd={drop}
                    >
                        {item}
                    </div>
                ))
            }
        </>
    )
}

export default App