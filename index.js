const { exec } = require('child_process');
const robot = require('robotjs');

// Función para abrir VS Code
function openVSCode() {
  // Comando para abrir VS Code (puede necesitar ajustes según el SO)
  exec('code', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al abrir VS Code: ${error}`);
      return;
    }
    console.log('VS Code abierto');
    
    // Esperar un poco para asegurarse de que VS Code esté abierto
    setTimeout(openNewFile, 3000);
  });
}

// Función para abrir un archivo nuevo en VS Code
function openNewFile() {
  console.log('Abriendo un archivo nuevo...');
  // Simular las teclas para abrir un archivo nuevo (Ctrl+N o Cmd+N)
  robot.keyTap('n', process.platform === 'darwin' ? 'command' : 'control');
  
  // Esperar un momento antes de empezar a escribir
  setTimeout(startTyping, 1000);
}

// Función para escribir código aleatorio indefinidamente
function startTyping() {
  console.log('Empezando a escribir código aleatorio...');

  setInterval(() => {
    const randomCode = generateRandomCode();
    robot.typeString(randomCode);
    robot.keyTap('enter');
  }, 1000);
}

// Función para generar código aleatorio
function generateRandomCode() {
  const codeSnippets = [
    'console.log("Hello, world!");',
    'const a = 10;',
    'let b = 20;',
    'function foo() { return "foo"; }',
    'class Bar { constructor() { this.name = "Bar"; } }',
    'if (a > b) { console.log("a is greater than b"); }',
    'for (let i = 0; i < 10; i++) { console.log(i); }',
  ];

  const randomIndex = Math.floor(Math.random() * codeSnippets.length);
  return codeSnippets[randomIndex];
}

// Ejecutar la función para abrir VS Code
openVSCode();
