const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = document.getElementById('url').value;
  const command = `wget -p -k ${url}`;
  console.log(command);

  const { exec } = require('child_process');
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Download result: ${stdout}`;
  });
});
