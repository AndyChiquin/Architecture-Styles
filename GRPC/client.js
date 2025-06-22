const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = './service.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition).example;

const client = new proto.Greeter('localhost:50051', grpc.credentials.createInsecure());

client.SayHello({ name: 'Alice' }, (error, response) => {
  if (!error) {
    console.log('Greeting:', response.message);
  } else {
    console.error(error);
  }
});
