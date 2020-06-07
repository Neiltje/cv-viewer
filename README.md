# cv-viewer

The CV Viewer app allows authoirised users to maintain and view a number of CVs. The initial home screen provided a filterable list of all of the CVs that are currently in the system. Selection of any individual CV will show a summary screen and tabs that can be selected to show the following information:

*   Summary;
*   Education;
*   Skills;
*   Employment;
*   Interests.

Many of these tabs contain expandable sections for each sub-category.

Authorised users can log in to the application in order to edit and save a CV.

The app code is a Maven project that consists of the following modules:

### Schema

This module contains only the Swagger spec that defines the OpenAPI standard API definition between the client and the server.

### Client

The client module contains the front-end Angular code. The HTTP API service and model code was generated from the Swagger spec.

### Server
  
The server module contains the back-end code to server the CV data up to the front-end client. The API service and model code was generated from the Swagger spec. The data is managed using JPA and Hibernate connecting to a MySQL database. The application is secured using Spring Security. 