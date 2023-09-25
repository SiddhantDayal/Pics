import './SearchBar.css';
import {useState} from 'react';

function SearchBar({ onSubmit }){
    const [text,setText]=useState('');

    const handleFromSubmit = (event) => {
        event.preventDefault();

        onSubmit(text);
    };

    const handleChange= (event) => {
        setText(event.target.value);
    };

    return (
    <div className='search-bar'>
        <label>Search pics</label>
        <form  onSubmit={handleFromSubmit}>
            <input value={text} onChange={handleChange} />
        </form>
    </div>
        );
}

export default SearchBar;