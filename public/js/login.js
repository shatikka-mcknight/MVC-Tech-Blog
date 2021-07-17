const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameE1 = document.querySelector('#username-input-login');
  const passwordE1 = document.querySelector('#password-input-login');


if (usernameE1 && passwordE1) {
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      username: usernameE1.value,
      password: passwordE1.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });


  if (response.ok) {
    document.location.replace('dashboard');
  } else {
    alert('Failed to login');
  }
}
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
