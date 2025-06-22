const soap = require('soap');

const url = 'http://localhost:8000/greeter?wsdl';

const args = { name: 'World' };

soap.createClient(url, function(err, client) {
  if (err) {
    console.error('Error creating SOAP client:', err);
  } else {
    client.sayHello(args, function(err, result) {
      if (err) {
        console.error('Error calling sayHello:', err);
      } else {
        console.log('Response from SOAP server:', result.greeting);
      }
    });
  }
});
