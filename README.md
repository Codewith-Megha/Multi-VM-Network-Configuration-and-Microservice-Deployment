# Microservice Deployment Using VirtualBox

## Author
**Megha**

---

## Objective

The objective of this project is to create and configure multiple Virtual Machines (VMs) using **Oracle VirtualBox**, establish a private network between them, and deploy a **microservice-based application** across the connected VMs.  
The project demonstrates VM networking, service hosting, and inter-VM communication.

---

## Project Structure

# Microservice Deployment Using VirtualBox

## Author
**Megha**

---

## Objective

The objective of this project is to create and configure multiple Virtual Machines (VMs) using **Oracle VirtualBox**, establish a private network between them, and deploy a **microservice-based application** across the connected VMs.  
The project demonstrates VM networking, service hosting, and inter-VM communication.

---

## Project Structure

vcc/
├── api.js
├── network_configs/
├── G25AI1028_VCC_Assignment1.docx
└── README.md


- **api.js** – Node.js microservice (REST API)
- **network_configs/** – Network configuration details/screenshots
- **G25AI1028_VCC_Assignment1.docx** – Assignment report document
- **README.md** – Project overview and instructions

---

## Virtual Machine Setup

Two Ubuntu Virtual Machines were created using VirtualBox:

### 1. Megha_microservice_api
- **Role:** API Server  
- **OS:** Ubuntu (64-bit)  
- **RAM:** 2 GB  
- **CPU:** 2 cores  
- **Network:** Host-Only Adapter  
- **Function:** Hosts the Node.js microservice  

### 2. Megha_microservice_client
- **Role:** Client  
- **OS:** Ubuntu (64-bit)  
- **RAM:** 2 GB  
- **CPU:** 2 cores  
- **Network:** Host-Only Adapter  
- **Function:** Consumes the microservice  

Both VMs are connected to the same **Host-Only Network**, enabling private and secure communication.

---

## Network Configuration

- **Adapter Type:** Host-Only Adapter  
- **Purpose:**
  - Enables VM-to-VM communication
  - Isolates the environment from external networks
  - Suitable for microservice testing and development

Network connectivity was verified using:
```bash
ip a
ping <other-vm-ip>


Microservice Overview

A simple RESTful microservice was developed using Node.js and Express.js.

API Endpoint
GET /api/hello

Sample Response
{
  "message": "Hello from Megha's Microservice API",
  "vm": "Megha-Microservice-API",
  "status": "success"
}


The service listens on port 3000 and is bound to 0.0.0.0 to allow access from other VMs.

Running the Microservice
On API VM
node api.js


Expected output:

Microservice API running on port 3000

Accessing from Client VM

From the client VM, the microservice can be accessed using:

curl http://<API_VM_IP>:3000/api/hello


A successful response confirms correct deployment and communication.

Architecture Overview

API VM hosts the microservice

Client VM sends HTTP requests

Communication occurs via REST APIs

Network isolation is maintained using Host-Only Adapter

This setup follows basic microservice architecture principles such as separation of concerns and network-based service interaction.

Video Demonstration

A recorded video demonstrates:

Creation and configuration of Virtual Machines

Network setup using Host-Only Adapter

Deployment of the Node.js microservice

Inter-VM communication

Voice-over explanation of the complete workflow
Plagiarism Declaration

This project is an original implementation created solely for academic purposes.


Any form of plagiarism in code, documentation, or implementation may result in disqualification.

Conclusion

This project successfully demonstrates microservice deployment across multiple virtual machines using VirtualBox, highlighting practical concepts of virtualization, networking, and service-based application design.
