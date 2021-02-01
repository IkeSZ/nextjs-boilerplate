module.exports = {
  testEnvironment: 'jsdom', // Consegue simular o DOM do Browser para testes
  testPathIgnorePatterns: ['/node_modules/', '/.next'], // Arquivos que o Jest ignora
  collectCoverage: true, // Faz o teste de cobertura
  collectCoverageFrom: ['src/**/*.spec.ts(x)?', '!src/**/stories.tsx'],
  // Arquivos que precisam estar no coverage, no caso, todos dentro da pasta "src" que terminam em "ts" ou "tsx"
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Outras configs
};
