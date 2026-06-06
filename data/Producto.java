package com.example.Integrador.data;

public class Producto {
    private String id;
    private String nombre;
    private String descripcion;
    private String categoria;
    private String imagen;

    private String peso;
    private String proteina;

    private double precio;
    private double precioLista;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getCategoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    public String getPeso() {
        return peso;
    }
    public void setPeso(String peso) {
        this.peso = peso;
    }
    public String getProteina() {
        return proteina;
    }
    public void setProteina(String proteina) {
        this.proteina = proteina;
    }
    public double getPrecio() {
        return precio;
    }
    public void setPrecio(double precio) {
        this.precio = precio;
    }
    public double getPrecioLista() {
        return precioLista;
    }
    public void setPrecioLista(double precioLista) {
        this.precioLista = precioLista;
    }

    
}
