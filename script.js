document.addEventListener('DOMContentLoaded', () => {
    const projects = [
      {
        title: 'E-commerce Website',
        description: 'A full-stack application with a React front-end and Node.js/Express backend. MongoDB for database storage.',
        link: 'https://github.com/ame-gubay/E-commerceApp'
      },
      {
        title: 'Portfolio Site',
        description: 'Responsive portfolio site built with HTML, CSS, and vanilla JavaScript.',
        link: 'https://yourportfolio.com'
      },
      {
        title: 'Chat Application',
        description: 'Real-time chat app built using Socket.io, Express, and Node.js.',
        link: 'https://github.com/yourusername/chat-app'
      }
      // Add more projects as needed
    ];
  
    const skills = [
      'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'HTML', 'CSS', 'Git'
    ];
  
    // Display Projects
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');
      projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View on GitHub</a>
      `;
      projectList.appendChild(projectCard);
    });
  
    // Display Skills
    const skillsList = document.getElementById('skills-list');
    skills.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
    });
  
    // Handle Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! I will get back to you soon.');
    });
  });
// Simple scroll animation
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      if (position < screenPosition) {
        element.classList.add('visible');
      }
    });
  });
    