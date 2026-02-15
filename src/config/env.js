const env = {
  githubToken: process.env.REACT_APP_GITHUB_TOKEN || '',
  emailServiceId: process.env.REACT_APP_SERVICE_ID || '',
  emailTemplateId: process.env.REACT_APP_TEMPLATE_ID || '',
  emailPublicKey: process.env.REACT_APP_USER_ID || '',
};

export default env;
