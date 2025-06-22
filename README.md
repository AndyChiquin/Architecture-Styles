# Architecture Styles

This repository contains examples of six commonly used architectural styles in distributed applications. Each style has a basic implementation and is documented for better understanding.

## Table of Contents

1. [REST API](#rest-api)
2. [SOAP](#soap)
3. [WebSocket](#websocket)
4. [gRPC](#grpc)
5. [GraphQL](#graphql)
6. [WebHook](#webhook)

---

## REST API

**Description:**
REST (Representational State Transfer) is an architectural style for designing web services. It is based on standard HTTP methods (GET, POST, PUT, DELETE) and uses URLs to represent resources.

**Characteristics:**
- Based on HTTP and JSON.
- Focuses on interacting with resources.
- Uses a client-server model.

**Implementation:**
- **Server (Python - Flask)**: A simple server that responds to GET requests.
- **Client (Python)**: Sends requests to the REST API using the HTTP protocol.

---

## SOAP

**Description:**
SOAP (Simple Object Access Protocol) is a protocol based on XML that allows communication between applications over HTTP and other protocols. SOAP is more structured and requires a WSDL (Web Services Description Language).

**Characteristics:**
- Based on XML.
- Uses a WSDL to describe services.
- More rigid and robust compared to REST.

**Implementation:**
- **Server (Node.js)**: A SOAP server listening on a port and offering a greeting service.
- **Client (Node.js)**: Calls the SOAP service with a name and receives a greeting.

---

## WebSocket

**Description:**
WebSocket is a bidirectional communication protocol over TCP that allows real-time communication between the client and the server.

**Characteristics:**
- Persistent connection.
- Ideal for real-time applications (e.g., chat or live updates).
- Uses a single port for communication.

**Implementation:**
- **Server (Python - websockets)**: A WebSocket server that accepts connections and sends a message.
- **Client (Python)**: Connects to the server, sends a message, and receives a response.

---

## gRPC

**Description:**
gRPC is a Remote Procedure Call (RPC) system based on HTTP/2. It uses **Protocol Buffers** (protobuf) for serializing messages.

**Characteristics:**
- Efficient communication using HTTP/2.
- Uses Protocol Buffers for message serialization.
- Ideal for high-performance systems and microservices.

**Implementation:**
- **Server (Node.js)**: A gRPC server that listens for service calls defined in a `.proto` file.
- **Client (Node.js)**: Connects to the gRPC server and makes a service call.

---

## GraphQL

**Description:**
GraphQL is a query language for APIs that allows clients to request exactly the data they need. Unlike REST, which uses multiple endpoints, GraphQL uses a single endpoint.

**Characteristics:**
- Flexible data querying.
- A single endpoint for all requests.
- Allows optimization of responses.

**Implementation:**
- **Server (Node.js - Apollo Server)**: A GraphQL server that exposes a query service.
- **Client (Node.js)**: Makes queries to the GraphQL server.

---

## WebHook

**Description:**
WebHooks allow applications to send data to other applications in real-time when a specific event occurs. Unlike APIs, where the client requests data, WebHooks send data from the server to the client.

**Characteristics:**
- One-way communication.
- Based on HTTP.
- Used for real-time events (such as notifications, updates, etc.).

**Implementation:**
- **Server (Node.js)**: A server that receives event notifications through WebHooks.
- **Client (Node.js)**: Sets up a WebHook to receive notifications.

---

## Conclusion

This repository contains basic implementations of six widely used service architecture styles. Each one has its own unique features and is suitable for different use cases depending on the application's requirements.

---

**Note:** To make each example work correctly, make sure you have the necessary dependencies installed for each style, such as **`npm install`** for **Node.js** or **`pip install`** for **Python**.
