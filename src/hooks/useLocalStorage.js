import { useState, useEffect } from "react"

const useLocalStorage = (itemName, initialValue)=>{

    const [item, setItem] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect( ()=>{
        setTimeout(()=>{
           try {
            //Usando localStorage
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;

            if(!localStorageItem){
                localStorage.setItem(itemName, JSON.stringify(initialValue));
                parsedItem = [];
            }else{
                parsedItem = JSON.parse(localStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
           } catch (error) {
               setError(true);
           }
        }, 1000);
    });
    
    const saveItem = (newTodos)=>{
        try {   
            setItem(newTodos);
            const stringifiedTodos = JSON.stringify(newTodos);
            localStorage.setItem(itemName, stringifiedTodos);
        } catch (error) {
            setError(true);
        }
        
    }

    return {item, saveItem, loading, error};
}

export default useLocalStorage;