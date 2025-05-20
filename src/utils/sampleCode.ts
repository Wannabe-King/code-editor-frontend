export const pythonSample = `# Online Python - IDE, Editor, Compiler, Interpreter

def sum(a, b):
    return (a + b)

a = int(input())
b = int(input())

print(f'Sum of {a} and {b} is {sum(a, b)}')
`;

export const javascriptSample = `// Online JavaScript - IDE, Editor, Compiler, Interpreter

function sum(a, b) {
    return a + b;
}

const a = 5;
const b = 3;

console.log(\`Sum of \${a} and \${b} is \${sum(a, b)}\`);
`;

export const createNewFile = (name: string, language: string) => {
  if (language === "python") {
    return `# ${name}\n\n# Write your code here\n`;
  } else if (language === "javascript") {
    return `// ${name}\n\n// Write your code here\n`;
  }
  return `// ${name}\n\n// Write your code here\n`;
};
