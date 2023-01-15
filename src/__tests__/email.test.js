const { mock, createTransport } = require('../__mocks__/nodemailer');

test('Send email', async () => {
  const transporter = createTransport({});
  await transporter.sendMail({
    to: 'panda@email.com',
    from: 'daddy@email.com',
    html: '<h1>This is the email</h1>',
    subject: 'Test'
  });

  const sentMails = mock.getSentMail();

  expect(sentMails.length).toBe(1);
  expect(sentMails[0].to).toBe('panda@email.com');
});
