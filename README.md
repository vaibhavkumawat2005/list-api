<h1>Dog Breed Selector and Sub-Breed Display</h1>

<h2>Overview</h2>
<p>This project is a web application that allows users to select a dog breed from a dropdown menu, view a random image of the selected breed, and display a list of sub-breeds for a specific breed (Hound). The application uses the Dog CEO API to fetch breed data and images, and it provides an interactive UI for users to explore various dog breeds.</p>

<h2>Features</h2>
<ul>
    <li><strong>Breed Dropdown Menu</strong>: A dynamic dropdown that loads all available dog breeds from the Dog CEO API.</li>
    <li><strong>Breed Image Display</strong>: After selecting a breed from the dropdown, a random image of the selected breed is displayed.</li>
    <li><strong>Sub-Breed List</strong>: The app provides a button to display a list of sub-breeds for a specific breed (Hound).</li>
    <li><strong>Stylish UI</strong>: The app features a responsive and modern design, with smooth transitions and a background image.</li>
</ul>

<h2>Screenshots & Screen Recording</h2>
<p>Below is an example of the application's UI, displaying the breed dropdown and a random dog image & video.</p>

https://github.com/user-attachments/assets/38ded889-13bb-4b49-bdd2-085eb34236b4


![image alt](https://github.com/vaibhavkumawat2005/list-api/blob/ad30a1f2ab7a37b2c459914fc83b2cf28884348b/asset/image/Screenshot%202024-10-09%20223652.png)
![image alt](https://github.com/vaibhavkumawat2005/list-api/blob/5135e544168f5cd4f7ae98329b5fadda3baf678f/asset/image/Screenshot%202024-10-09%20223824.png)
![image alt](https://github.com/vaibhavkumawat2005/list-api/blob/5135e544168f5cd4f7ae98329b5fadda3baf678f/asset/image/Screenshot%202024-10-09%20223840.png)
![image alt](https://github.com/vaibhavkumawat2005/list-api/blob/5135e544168f5cd4f7ae98329b5fadda3baf678f/asset/image/Screenshot%202024-10-09%20224436.png)



<h2>Technologies Used</h2>
<ul>
    <li>HTML: For the structure of the webpage.</li>
    <li>CSS: For styling and layout of the page.</li>
    <li>JavaScript: For dynamic functionality and making API requests.</li>
    <li>Dog CEO API: To fetch breed and image data from an external API.</li>
</ul>

<h2>How It Works</h2>

<h3>Breed Dropdown</h3>
<ul>
    <li>When the page loads, it makes a request to the Dog CEO API to fetch a list of all available dog breeds.</li>
    <li>The breeds are dynamically added to the <code>&lt;select&gt;</code> dropdown as options.</li>
</ul>

<h3>Breed Image Display</h3>
<ul>
    <li>When a breed is selected from the dropdown, the app fetches a random image of that breed and displays it in a designated area on the page.</li>
    <li>The image is styled to fit within a maximum size of 300x300 pixels.</li>
</ul>

<h3>Sub-Breed List</h3>
<ul>
    <li>Clicking the "Sub Breed" button fetches a list of sub-breeds specifically for the Hound breed.</li>
    <li>If sub-breeds are available, they are displayed as a list. If not, a message saying "No sub breed available" is shown.</li>
</ul>

<h2>File Structure</h2>
<ul>
    <li><strong>index.html</strong>: The main HTML file containing the structure of the webpage.</li>
    <li><strong>style.css</strong>: The CSS file that contains styles for the layout, buttons, dropdown, and list.</li>
    <li><strong>script.js</strong>: The JavaScript file responsible for fetching data from the Dog CEO API, handling user interactions, and dynamically updating the DOM.</li>
</ul>

<h2>API Endpoints Used</h2>
<ul>
    <li><strong>Get all breeds</strong>: <a href="https://dog.ceo/api/breeds/list/all" target="_blank">https://dog.ceo/api/breeds/list/all</a><br>
        This API fetches the list of all available dog breeds and is used to populate the dropdown.</li>
    <li><strong>Get random image for a breed</strong>: <a href="https://dog.ceo/api/breed/{breed}/images/random" target="_blank">https://dog.ceo/api/breed/{breed}/images/random</a><br>
        This API fetches a random image for the selected breed when the user selects a breed from the dropdown.</li>
    <li><strong>Get sub-breeds for Hound</strong>: <a href="https://dog.ceo/api/breed/hound/list" target="_blank">https://dog.ceo/api/breed/hound/list</a><br>
        This API is used when the user clicks the "Sub Breed" button to list all available sub-breeds of the Hound breed.</li>
</ul>

<h2>Installation & Setup</h2>
<ol>
    <li>Clone this repository or download the project files.</li>
    <li>Open <strong>index.html</strong> in your browser to view and interact with the app.</li>
    <li>Ensure that you have a stable internet connection, as the app depends on the external Dog CEO API to fetch data.</li>
</ol>

<h2>Customization</h2>
<ul>
    <li><strong>Styling</strong>: You can customize the appearance of the app by modifying the <strong>style.css</strong> file.</li>
    <li><strong>API Integration</strong>: You can modify the API calls in <strong>script.js</strong> to fetch additional data, such as more images or different breeds.</li>
</ul>

<h2>Future Enhancements</h2>
<ul>
    <li>Enable users to select different breeds and view their sub-breeds dynamically (instead of just for the Hound breed).</li>
    <li>Integrate more detailed information about each breed, such as characteristics or temperament.</li>
    <li>Add a search bar to allow users to quickly search for a specific breed.</li>
    <li>Enhance error handling and display user-friendly messages when there is an issue fetching data from the API.</li>
</ul>

<h2>Example</h2>
<p>Here is a brief overview of what the user will experience:</p>
<ol>
    <li>The user is presented with a dropdown of all available dog breeds.</li>
    <li>After selecting a breed, a random image of that breed appears.</li>
    <li>The user clicks the "Sub Breed" button to view a list of sub-breeds for the Hound breed.</li>
</ol>
