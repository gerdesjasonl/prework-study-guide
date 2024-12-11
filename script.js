const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  const topicList = document.createElement('p');
  topicList.textContent = `Topics covered: ${topics.join(', ')}`;
  footer.appendChild(topicList);

  const suggestion = document.createElement('p');
  suggestion.textContent = `You should study ${randomTopic} first.`;
  footer.appendChild(suggestion);
});