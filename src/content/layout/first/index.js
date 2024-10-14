const bodyEmail = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <h1 style="background-color: #4CAF50; color: white; padding: 10px;">Servicio Técnico</h1>
    <p style="font-size: 18px;">Hola,</p>
    <p style="font-size: 16px;">
      Gracias por contactarnos para su servicio técnico. Hemos recibido su solicitud y uno de nuestros técnicos se pondrá en contacto con usted pronto.
    </p>
    <table style="width: 100%; margin: 20px 0; border-collapse: collapse;">
      <tr>
        <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Servicio</th>
        <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Fecha</th>
        <th style="border: 1px solid #ddd; padding: 8px; background-color: #f2f2f2;">Técnico</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 8px;">Reparación de equipo</td>
        <td style="border: 1px solid #ddd; padding: 8px;">[Fecha]</td>
        <td style="border: 1px solid #ddd; padding: 8px;">[Nombre del técnico]</td>
      </tr>
    </table>
    <p style="font-size: 16px;">Si tiene alguna pregunta, no dude en contactarnos.</p>
    <p style="font-size: 16px;">¡Gracias por confiar en nuestro servicio!</p>
    <p style="font-size: 14px; color: #777;">
      Servicio Técnico, [Nombre de tu empresa]
    </p>
  </div>
`;

module.exports = bodyEmail;
