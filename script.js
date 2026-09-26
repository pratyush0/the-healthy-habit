const WA_NUMBER = '918598824098';
const toast = document.getElementById('toast');

document.getElementById('year').textContent = new Date().getFullYear();

function openWhatsApp(item) {
  const message = item
    ? `Hi The Healthy Habit, I'd like to order: ${item}. Please share availability and delivery details.`
    : `Hi The Healthy Habit, I'd like to place an order.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

document.querySelectorAll('.order-link, .order-plan').forEach(button => {
  button.addEventListener('click', () => openWhatsApp(button.dataset.item));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
