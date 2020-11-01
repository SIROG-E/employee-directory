import React, { useContext } from 'react';
import '../SearchName/SearchName.css';
import DataAreaContext from '../../utils/DataAreaContext';

const SearchName = () => {
    const context = useContext(DataAreaContext);
    return (
        <div className="searchbox">
            <div className="input-group">
                
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => context.handleSearchChange(e)}
                />
            </div>
        </div>
    );
};

export default SearchName;