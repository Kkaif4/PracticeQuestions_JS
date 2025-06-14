const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');

async function showPost() {
  try {
    const res = await fetch('http://localhost:3000/posts');
    if (!res.ok) {
      throw new Error('failed to fetch posts');
    }
    const posts = await res.json();
    output.innerHTML = '';
    posts.forEach((post) => {
      const postEl = document.createElement('div');
      postEl.textContent = post.name;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log('error fetching post');
  }
}

button.addEventListener('click', showPost);
