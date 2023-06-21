import { useState } from "react";



export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }


  const onSubmit = (event) => {
    event.preventDefault();
    const newImput = inputValue.trim()
    if (newImput.length < 1) return
    // setCategories(categories => [inputValue,...categories]);
    onNewCategory(newImput)

    setInputValue('')
    
  }


  return (
    <form onSubmit={ onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={inputValue}
            onChange={onInputChange}
    
    />
    </form>

    
  );
};
