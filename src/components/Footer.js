import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Footer.css';
import env from '../config/env';

function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!env.emailServiceId || !env.emailTemplateId || !env.emailPublicKey) {
      toast.error('Configuração de e-mail ausente no ambiente.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const normalizedName = formData.name.trim();
    const normalizedEmail = formData.email.trim();
    const normalizedMessage = formData.message.trim();

    if (!normalizedName || !normalizedEmail || !normalizedMessage) {
      toast.error('Preencha todos os campos antes de enviar.', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Dados do formulário com o campo reply_to
    const templateParams = {
      name: normalizedName,
      email: normalizedEmail,
      message: normalizedMessage,
      reply_to: normalizedEmail,
    };

    // Enviar email via EmailJS com variáveis de ambiente
    emailjs.send(env.emailServiceId, env.emailTemplateId, templateParams, env.emailPublicKey).then(
      () => {
        toast.success('Mensagem enviada com sucesso!', {
          position: 'top-right',
          autoClose: 3000, // 3 segundos
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      () => {
        toast.error('Erro ao enviar mensagem. Tente novamente mais tarde.', {
          position: 'top-right',
          autoClose: 3000, // 3 segundos
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    );

    // Limpar o formulário após o envio
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const copyToClipboard = (text) => {
    if (!navigator?.clipboard?.writeText) {
      toast.error('Área de transferência indisponível neste navegador.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success('Copiado para a área de transferência!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error('Erro ao copiar!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section contact-info">
            <h3>Entre em contato</h3>
            <p>
              <i className="fas fa-envelope"></i> Email:{' '}
              <a href="mailto:sousa3086@outlook.com">sousa3086@outlook.com</a>
              <span
                className="copy-action"
                onClick={() => copyToClipboard('sousa3086@outlook.com')}
              >
                <i className="fas fa-copy"></i>
              </span>
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> WhatsApp:{' '}
              <a href="https://wa.me/5511958057967" target="_blank" rel="noopener noreferrer">
                +55 11 5805-7967
              </a>
              <span className="copy-action" onClick={() => copyToClipboard('+55 11 5805-7967')}>
                <i className="fas fa-copy"></i>
              </span>
            </p>
          </div>
          <div className="footer-section message-form">
            <h3>Envie uma mensagem</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Sua mensagem"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Jose Enoque. Todos os direitos reservados.</p>
          <div className="footer-social-icons">
            <a href="https://github.com/ESousa97" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/enoque-sousa-bb89aa168/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Componente do Toastify */}
      <ToastContainer />
    </footer>
  );
}

export default Footer;
