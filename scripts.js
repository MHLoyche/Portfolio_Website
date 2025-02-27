const projectData = {
    "default": {
        title: "This page contains a few of my recent projects.",
        content: `
            <p>You can select which project you want to see in the navigation bar above. <br> 
            All projects include a link directly to its GitHub repository.<br><br>
            Languages I have worked with include, but are not limited to:<br>
            <li>C#.NET</li>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>CSS</li></p>
            <p><br>For information about the structure of this website, you can look at the repository here: 
            <a href="https://github.com/MHLoyche/Portfolio_Website">https://github.com/MHLoyche/Portfolio_Website</a><br></p>
        `,
        image: "images/mhloyche_web.png"
    },
    "wc3rise": {
        title: "WC3 Rise Webpage",
        content: `<p>This project is a webpage for a friend of mine who is developing a game mode in warcraft 3. <br> 
        The webpage is currently under construction.<br>
        For the creation of this website I have been working with <li>HTML</li> <li>CSS</li> <li>Node.JS</li> <li>JS</li> <li>SQLite</li><br></p>
        <p>
        I coded my own discord bot to store messages and I plan to make it update the website in real time regarding patch notes and map uploads<br>
        The webpage is not currently hosted, but it will be in the future.<br><br>
        Github: <a href="https://github.com/MHLoyche/WC3Rise">https://github.com/MHLoyche/WC3Rise</a></p>
        `,
        image: "images/wc3rise.png"
    },
    "homm3": {
        title: "Homm3 Draft",
        content: `<p>Heroes of Might and Magic 3 draft tool is used locally between my friends and I when we play.<br>
        I created this for us, so we didnt optimize our picks too much and it added a bit of randomness to the games.<br>
        To create this app I used:<li>WPF/XAML</li><li>C#.net</li><br></p><p>
        The app will remember what cities and heroes are picked, so that there wont be any duplicate picks.<br><br>
        Github: <a href="https://github.com/MHLoyche/Homm3DraftGUI">https://github.com/MHLoyche/Homm3DraftGUI</a></p>`,
        image: "images/homm3.png"
    },
    "csv_conversion": {
        title: "CSV Conversion Tool",
        content: `<p>This was an assignment to convert a specific CSV file, adjust pricing from euro to DKK and such.<br>
        During this assignment I learned to adjust for culture difference when prices use , or . for decimals.<br>
        The program also wrote the converted text to a new document upon completion.<br>
        I solves this assignment using:
        <li>C#.net</li><br></p><p>
        Github: <a href="https://github.com/MHLoyche/Data_Converter_SOP">https://github.com/MHLoyche/Data_Converter_SOP</a>
        </p>`,
        image: "images/csv.png"
    },
    "grades_db": {
        title: "Grades Database",
        content: `<p>This is one of my many small applications that includes a small SQL database.<br>
        This app worked with a database to display fictional students and their grades.<br>
        The app calculated the average, highest and lowest grades for either all student or individually.<br>
        It also showcased how many classes had been passed or failed.<br>
        I created this using:
        <li>C#.net</li><li>WPF/XAML</li><li>MySQL</li><br></p><p>
        </p>`,
        image: "images/grades.png"
    },
    "vop-exam": {
        title: "Old VOP-exam",
        content: `<p>This is an old exam from my time studying software technology bachelor at SDU.<br>
        This exam was for the class advanced object oriented programming and included things like multithreading, file manipulation and FXML<br>
        I didn't finish all of the assignments, but I received the grade 12 / A for this exam.<br>
        I created this using:
        <li>Java (using IntelliJ, Maven and Scenebuilder)</li></p><p>
        Github: <a href="https://github.com/MHLoyche/VOPExam-old-">https://github.com/MHLoyche/VOPExam-old-</a>
        </p>`,
        image: "images/VOP.png"
    },
    "python_projects": {
        title: "Python Assignments",
        content: `<p>This page includes a variety of different python assignment made during my first course af SDE College<br>
        These assignment includes things like:<br>
        <li>Password checker for ensuring the passwords fulfills the criteria</li>
        <li>Rock Paper Scissor game</li>
        <li>Worktime calculator</li>
        <li>And much more...</li></p>
        <p>
        Github Mini projects: <a href="https://github.com/MHLoyche/GF2-MiniProjekter-01">https://github.com/MHLoyche/GF2-MiniProjekter-01</a><br>
        Github Password-Checker: <a href="https://github.com/MHLoyche/GF2-Passwordchecker">https://github.com/MHLoyche/GF2-Passwordchecker</a><br>
        Github Extra Assignments 1: <a href="https://github.com/MHLoyche/GF2-Ekstra-Opgaver-01">https://github.com/MHLoyche/GF2-Ekstra-Opgaver-01</a><br>
        Github Extra Assignments 2: <a href="https://github.com/MHLoyche/GF2-Ekstra-Opgaver-02">https://github.com/MHLoyche/GF2-Ekstra-Opgaver-02</a>
        </p>`,
        image: "images/mhloyche_web.png"
    }
};

function switchProject(projectId) {
    let contentWrapper = document.getElementById('content-wrapper');
    let currentContent = document.querySelector('.port_content');
    let projectImage = document.getElementById('project-image');

    if (!projectData[projectId]) return; // If project ID doesn't exist, do nothing

    // Create a new div with the project content
    let newContent = document.createElement('div');
    newContent.classList.add('port_content');
    newContent.style.opacity = '0'; // Start invisible for animation effect

    newContent.innerHTML = `
        <h1>${projectData[projectId].title}</h1>
        ${projectData[projectId].content}
    `;

    // Animate fade-out of old content
    currentContent.style.opacity = '0';
    currentContent.style.transform = 'translateX(-50px)';
    projectImage.style.opacity = '0'; // Hide the image while switching

    setTimeout(() => {
        // Remove old content and add new content
        contentWrapper.innerHTML = ''; // Clear old content
        contentWrapper.appendChild(newContent);

        // Update the image separately
        projectImage.src = projectData[projectId].image;
        
        // Animate fade-in of new content and image
        setTimeout(() => {
            newContent.style.opacity = '1';
            newContent.style.transform = 'translateX(0)';
            projectImage.style.opacity = '1'; // Fade in the image
        }, 50);
    }, 300); // Matches CSS transition time
}