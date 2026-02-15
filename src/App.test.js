import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Home', () => () => <div>Home mock</div>);
jest.mock('./components/About', () => () => <div>About mock</div>);
jest.mock('./components/Projects', () => () => <div>Projects mock</div>);
jest.mock('./components/Skills', () => () => <div>Skills mock</div>);
jest.mock('./components/Footer', () => () => <footer>Footer mock</footer>);
jest.mock('./utils/DotNavigation', () => () => <div>Dot navigation mock</div>);

test('renders primary navigation labels', () => {
  render(<App />);
  expect(screen.getByTitle(/início/i)).toBeInTheDocument();
  expect(screen.getByTitle(/sobre mim/i)).toBeInTheDocument();
  expect(screen.getByTitle(/projetos/i)).toBeInTheDocument();
  expect(screen.getByTitle(/habilidades/i)).toBeInTheDocument();
  expect(screen.getByTitle(/contato/i)).toBeInTheDocument();
});
