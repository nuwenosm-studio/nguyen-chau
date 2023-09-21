
const Filter = ({ subjects, selectedSubject, onFilterChange}) => {
   const handleCheckboxChange = (newSubject) => {
      onFilterChange(newSubject);
   }

   return (
      <div className="filter_container">
         {subjects.map((subject) => (
            <label 
               key={subject} 
               className={`subject_item ${
                  selectedSubject === subject ? "subject_selected" : ''
               }`}
            >
               <input
                  type="radio"
                  value={subject}
                  checked={selectedSubject === subject}
                  onChange={() => handleCheckboxChange(subject)}
               />
               {subject}
            </label>
         ))}
      </div>
   )
}

export default Filter
