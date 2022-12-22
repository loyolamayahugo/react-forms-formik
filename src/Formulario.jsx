import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <div>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
        }}
        validate={(valores) => {
          let errores = {};

          /**Validacion nombre */
          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          /**Validacion correo */
          if (!valores.correo) {
            errores.correo = "Por favor ingresa un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log(valores);
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 2000);
        }}
      >
       {/**Esto es una manera de hacerlo, usando el evento handleSubmit*/}
        {/* {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="john Doe"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && (
                <div className="error">{errors.nombre}</div>
              )}
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <input
                type="text"
                id="correo"
                name="correo"
                placeholder="john@gmail.com"
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.correo && errors.correo && (
                <div className="error">{errors.correo}</div>
              )}
            </div>
            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </form>
        )} */}
        {({errors}) => (
          <Form className="formulario">
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="john Doe"
              />
              <ErrorMessage name="nombre" component={() => (
                <div className="error">{errors.nombre}</div>
              )}/>
            </div>
            <div>
              <label htmlFor="correo">Correo</label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder="john@gmail.com"
              />
              <ErrorMessage name="correo" component={() => (
                <div className="error">{errors.correo}</div>
              )}/>
            </div>

            <div>
                <Field name='pais' as="select">
                    <option value='mexico'>Mexico</option>
                    <option value='africa'>Africa</option>
                    <option value='marruecos'>Marruecos</option>
                </Field>
            </div>

            <div>
                <label>
                    <Field type='radio' name='sexo' value='hombre'/> Hombre
                </label>
                <label>
                    <Field type='radio' name='sexo' value='hombre'/> Mujer
                </label>
            </div>

            <div>
                <Field name='mensaje' as='textarea' placeholder='Mensaje'/>
            </div>

            <button type="submit">Enviar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con exito!</p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
