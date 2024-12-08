import React from "react";

const Filter = ({ searchTerm, onSearchChange, department, onDepartmentChange, employees }) => {
    const filteredEmployees = employees.filter((employee) => {
        const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = department === "All" || employee.department === department;
        return matchesSearch && matchesDepartment;
    });

    const uniqueDepartments = ["All", ...new Set(employees.map((employee) => employee.department))];

    return (
        <div>
            <input
                type="text"
                placeholder="İşçi adı ilə axtar..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
            />

            <select value={department} onChange={(e) => onDepartmentChange(e.target.value)}>
                {uniqueDepartments.map((dept) => (
                    <option key={dept} value={dept}>
                        {dept}
                    </option>
                ))}
            </select>

            <ul>
                {filteredEmployees.map((employee) => (
                    <li key={employee.id}>
                        {employee.name} <span>{employee.department}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filter;
