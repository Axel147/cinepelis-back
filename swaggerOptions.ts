export const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.1",
        title: "API REST CINE-PELIS",
        description: "Documentación de Api Rest para el proyecto Cine-Pelis",
        contact: {
          name: "Sharon Ormachea"
        },
        servers: ["http://localhost:3001"]
      },
    },
    apis: ['./src/indexRoutes.ts'],
    
}