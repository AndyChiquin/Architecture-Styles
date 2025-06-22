const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './service.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition).example;

function sayHello(call, callback) {
  callback(null, { message: `Hello, ${call.request.name}!` });
}

function startServer() {
  const server = new grpc.Server();

  server.addService(proto.Greeter.service, { SayHello: sayHello });

  server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), () => {
    console.log('gRPC server running on 127.0.0.1:50051');
    server.start();
  });
}

startServer();
