module.exports = {
  testEnvironment: 'jsdom', // Consegue simular o DOM do Browser para testes
  testPathIgnore: ['/node_modules/', '/.next'], // Arquivos que o Jest ignora
  collectCoverageTrue: true, // Faz o teste de cobertura
  collectCoverageFrom: ['src/**/*.ts(x)'],
  // Arquivos que precisam estar no coverage, no caso, todos dentro da pasta "src" que terminam em "ts" ou "tsx"
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Outras configs
};
