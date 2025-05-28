function toggleFAQ(element) {
    const answer = element.querySelector('.faq-answer');
    const plus = element.querySelector('.plus');
    const isVisible = answer.style.display === 'block';

    // Hide all answers
    document.querySelectorAll('.faq-answer').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.plus').forEach(p => p.textContent = '+');

    // Show selected if it was hidden
    if (!isVisible) {
      answer.style.display = 'block';
      plus.textContent = '−';
    }
  }