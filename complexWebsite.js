// filename: complexWebsite.js

// This code represents a complex website that showcases different features and functionalities.

// Global variables
const NUM_OF_POSTS = 10;
let currentUser = null;

// Function to generate random posts
function generatePosts(numOfPosts) {
  const posts = [];
  
  for (let i = 0; i < numOfPosts; i++) {
    const post = {
      id: i+1,
      title: "Post " + (i+1),
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "User " + (i+1),
      date: new Date().toLocaleDateString()
    };
    
    posts.push(post);
  }
  
  return posts;
}

// Function to display posts on the website
function displayPosts(posts) {
  const postsContainer = document.getElementById('posts-container');
  
  if (posts.length === 0) {
    const noPostsMsg = document.createElement('p');
    noPostsMsg.textContent = "No posts found!";
    postsContainer.appendChild(noPostsMsg);
  } else {
    posts.forEach((post) => {
      const postWrapper = document.createElement('div');
      postWrapper.classList.add('post');
      
      const postTitle = document.createElement('h2');
      postTitle.textContent = post.title;
      
      const postContent = document.createElement('p');
      postContent.textContent = post.content;
      
      const postInfo = document.createElement('div');
      postInfo.classList.add('post-info');
      
      const postAuthor = document.createElement('span');
      postAuthor.textContent = 'By ' + post.author;
      
      const postDate = document.createElement('span');
      postDate.textContent = 'Posted on ' + post.date;
      
      postInfo.appendChild(postAuthor);
      postInfo.appendChild(postDate);
      
      postWrapper.appendChild(postTitle);
      postWrapper.appendChild(postContent);
      postWrapper.appendChild(postInfo);
      
      postsContainer.appendChild(postWrapper);
    });
  }
}

// Function to handle user authentication
function login(username, password) {
  // Simulating authentication process
  if (username === 'admin' && password === 'password') {
    currentUser = {
      username: username,
      role: 'admin'
    };
    
    // Display admin options
    const adminOptions = document.getElementsByClassName('admin-option');
    for (let i = 0; i < adminOptions.length; i++) {
      adminOptions[i].style.display = 'block';
    }
    
    // Hide login form
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none';
  } else {
    alert('Invalid username or password');
  }
}

// Event listener for login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  login(username, password);
});

// Function to handle user logout
function logout() {
  currentUser = null;
  
  // Hide admin options
  const adminOptions = document.getElementsByClassName('admin-option');
  for (let i = 0; i < adminOptions.length; i++) {
    adminOptions[i].style.display = 'none';
  }
  
  // Show login form
  const loginForm = document.getElementById('login-form');
  loginForm.style.display = 'block';
}

// Event listener for logout button click
document.getElementById('logout-btn').addEventListener('click', logout);

// Initial setup
const posts = generatePosts(NUM_OF_POSTS);
displayPosts(posts);