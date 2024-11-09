const { createApp } = Vue;

createApp({
    data() {
        return {
            nuevoNombre: "",
            nuevoTelefono: "",
            nuevaCategoria: "",
            contactos: []
        };
    },
    computed: {
        totalMensajes() {
            return this.contactos.reduce((total, contacto) => total + contacto.mensajes, 0);
        },
        totalLlamadas() {
            return this.contactos.reduce((total, contacto) => total + contacto.llamadas, 0);
        }
    },
    methods: {
        agregarContacto() {
            if (this.nuevoNombre && this.nuevoTelefono && this.nuevaCategoria) {
                this.contactos.push({
                    nombre: this.nuevoNombre,
                    telefono: this.nuevoTelefono,
                    categoria: this.nuevaCategoria,
                    mensajes: 0,
                    llamadas: 0
                });
                this.nuevoNombre = "";
                this.nuevoTelefono = "";
                this.nuevaCategoria = "";
            } else {
                alert("Por favor, completa todos los campos.");
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
        modificarMensajes(index, cantidad) {
            let nuevoValor = this.contactos[index].mensajes + cantidad;
            if (nuevoValor >= 0 && nuevoValor <= 25) {
                this.contactos[index].mensajes = nuevoValor;
            }
        },
        modificarLlamadas(index, cantidad) {
            let nuevoValor = this.contactos[index].llamadas + cantidad;
            if (nuevoValor >= 0 && nuevoValor <= 15) {
                this.contactos[index].llamadas = nuevoValor;
            }
        }
    }
}).mount("#app");
