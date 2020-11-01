import React, { useState, useEffect } from 'react';
import DataTable from '../DataTable/DataTable';
import Navbar from '../Navbar/Navbar';
import API from '../../utils/API';
import DataAreaContext from '../../utils/DataAreaContext';

const DataArea = () => {
    const [developerState, setDeveloperState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
            { name: "Image", width: "10%", order: "descend" },
            { name: "Name", width: "10%", order: "descend" },
            { name: "Phone", width: "10%", order: "descend" },
            { name: "Email", width: "10%", order: "descend" },
            { name: "DOB", width: "10%", order: "descend" }
        ]
    });

    const handleSort = heading => {
        let currentOrder = developerState.headings
            .filter(elem => elem.name === heading)
            .map(elem => elem.order)
            .toString();

        if (currentOrder === "ascend") {
            currentOrder = "descend";
        } else {
            currentOrder = "ascend";
        }

        const compareFnc = (a, b) => {
            if (currentOrder === "ascend") {
                // account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "name") {
                    return a[heading].first.localeCompare(b[heading].first);
                } else if (heading === "dob") {
                    return a[heading].age - b[heading].age;
                } else {
                    return a[heading].localeCompare(b[heading]);
                }
            } else {
                // account for missing values
                if (a[heading] === undefined) {
                    return 1;
                } else if (b[heading] === undefined) {
                    return -1;
                }
                // numerically
                else if (heading === "name") {
                    return b[heading].first.localeCompare(a[heading].first);
                } else if (heading === "dob") {
                    return b[heading].age - a[heading].age;
                } else {
                    return b[heading].localeCompare(a[heading]);
                }
            }
        };
        const sortedUsers = developerState.filteredUsers.sort(compareFnc);
        const updatedHeadings = developerState.headings.map(elem => {
            elem.order = elem.name === heading ? currentOrder : elem.order;
            return elem;
        });

        setDeveloperState({
            ...developerState,
            filteredUsers: sortedUsers,
            headings: updatedHeadings
        });
    };

    const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter(item => {
            let values = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase();
            console.log(filter, values)
            if (values.indexOf(filter.toLowerCase()) !== -1) {
                return item
            };
        });

        setDeveloperState({ ...developerState, filteredUsers: filteredList });
    };

    useEffect(() => {
        API.getUsers().then(results => {
            console.log(results.data.results);
            setDeveloperState({
                ...developerState,
                users: results.data.results,
                filteredUsers: results.data.results
            });
        });
    }, []);

    return (
        <DataAreaContext.Provider
            value={{ developerState, handleSearchChange, handleSort }}
        >
            <Navbar />
            <div className="data-area">
                {developerState.filteredUsers.length > 0 ? <DataTable /> : <div></div>}
            </div>
        </DataAreaContext.Provider>
    );
};

export default DataArea;