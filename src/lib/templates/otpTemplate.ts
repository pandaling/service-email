import mjml2html from 'mjml';

export const OtpTemplate = mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Your email has been verified successfully.
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`);
