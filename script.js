
const courses = [
    { id: 1, title: "Introduction to Java",url:'http://127.0.0.1:5501/java.html' },
    { id: 2, title: "C++",url:'http://127.0.0.1:5501/c++.html' },
    { id: 3, title: "Python for Beginners",url: 'http://127.0.0.1:5501/python.html' },
    { id: 4, title: "Web Development with MERN Stack",url:'http://127.0.0.1:5501/web.html' },
    { id: 5, title: "Data Structures and algorithms",url:'http://127.0.0.1:5501/datastructure.html' },
    { id: 6, title: "Database Management System",url:'http://127.0.0.1:5501/dbms.html' },
    { id: 7, title: "UI/UX Design",url:'http://127.0.0.1:5501/uiux.html' },
    { id: 8, title: "Digital Marketing",url:'http://127.0.0.1:5501/digital.html' },
];

// Function to perform search
function searchCourses(query) {
    
    const results = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase())  //this is to ensure that the search is case-insensitive
    );
    return results;
}

function handleCourseClick(course) {
    
    window.location.href = course.url;
}


function displayResults(results) {
    const searchResultsElement = document.getElementById('searchResults');
    searchResultsElement.innerHTML = '';

    if (results.length === 0) {
        searchResultsElement.innerHTML = 'No results found';
        searchResultsElement.style.display = 'none'; // Hide the list when there are no results
        return;
    }

    searchResultsElement.style.display = 'block'; // Show the list when there are results

    const ul = document.createElement('ul');
    results.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course.title;
        
        li.addEventListener('click', () => {
            handleCourseClick(course);
        });
        ul.appendChild(li);
    });
    searchResultsElement.appendChild(ul);
}


document.getElementById('searchInput').addEventListener('input', function(event) {
    const query = event.target.value;
    const results = searchCourses(query);
    if (query.trim() === '') {
        displayResults([]); // Clear the list when the input is empty
    } else {
        displayResults(results);
    }
   
});