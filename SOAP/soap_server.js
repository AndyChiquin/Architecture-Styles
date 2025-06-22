const soap = require('soap');
const http = require('http');

// Definir el servicio SOAP y su implementación
const service = {
  GreeterService: {
    GreeterPort: {
      sayHello: function(args) {
        return { greeting: `Hello, ${args.name}!` };
      }
    }
  }
};

// Definir el WSDL (Web Service Definition Language)
const xml = 
`<?xml version="1.0" encoding="UTF-8"?>
<definitions name="GreeterService"
  targetNamespace="http://www.example.org/GreeterService/"
  xmlns:tns="http://www.example.org/GreeterService/"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:soapenc="http://schemas.xmlsoap.org/soap/encoding/">
  
  <message name="sayHelloRequest">
    <part name="name" type="xsd:string"/>
  </message>
  
  <message name="sayHelloResponse">
    <part name="greeting" type="xsd:string"/>
  </message>
  
  <portType name="GreeterPortType">
    <operation name="sayHello">
      <input message="tns:sayHelloRequest"/>
      <output message="tns:sayHelloResponse"/>
    </operation>
  </portType>
  
  <binding name="GreeterBinding" type="tns:GreeterPortType">
    <soap:binding style="rpc" transport="http://schemas.xmlsoap.org/soap/http"/>
    <operation name="sayHello">
      <soap:operation soapAction="sayHello"/>
      <input>
        <soap:body use="encoded" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" namespace="http://www.example.org/GreeterService/"/>
      </input>
      <output>
        <soap:body use="encoded" encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" namespace="http://www.example.org/GreeterService/"/>
      </output>
    </operation>
  </binding>
  
  <service name="GreeterService">
    <port name="GreeterPort" binding="tns:GreeterBinding">
      <soap:address location="http://localhost:8000/greeter"/>
    </port>
  </service>
</definitions>`;

const server = http.createServer(function(request, response) {
  response.end("404: Not Found: " + request.url);
});

server.listen(8000, () => {
  console.log('SOAP server running on http://localhost:8000');
});

// Crear el servidor SOAP con el servicio definido y el WSDL
soap.listen(server, '/greeter', service, xml);
