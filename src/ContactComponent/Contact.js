import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [enviado, setEnviado] = useState(false);

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Nombre es obligatorio';
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email es obligatorio';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email no válido';
      valid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Detalle es obligatorio';
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Mensaje es obligatorio';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Envío del formulario por email usando EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

/*
  YOUR_SERVICE_ID = service_9fwucou
  YOUR_TEMPLATE_ID = template_test
  YOUR_USER_ID = aQHf7Odg6pmMj2JU3
*/

    emailjs.send('service_9fwucou', 'template_test', templateParams, 'aQHf7Odg6pmMj2JU3')
      .then((result) => {
        console.log('Email enviado correctamente:', result.text);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setEnviado(true);
        toast.success('Mensaje enviado correctamente');
        // Aquí podrías mostrar un mensaje de éxito al usuario
        
      }, (error) => {
        console.error('Error al enviar el email:', error.text);
        {enviado && <div className="mensaje-enviado">Mensaje enviado correctamente</div>}
      });
  };


  return (
<div className="contact section-padding mt-5" id="contacto" data-scroll-index='4'>
  <div className="container">
    <div className="row justify-content-center"> {/* Agrega la clase justify-content-center para centrar el contenido */}
      <div className="col-md-12 section-title text-center">
        <h3>Contacto</h3>
        <p>Escríbenos tu consulta y nos pondremos en contacto contigo.</p>
        <span className="section-title-line"></span>
      </div>
      <div className="col-lg-7 col-md-8"> {/* Establece el tamaño de la columna a 7/12 (50%) */}
        <div className="card">
          <div className="card-body">
            <form className='form' id='contact-form' method='post' data-toggle='validator'>
              <input type='hidden' name='form-name' value='contact-form' />
              <div className="messages"></div>
              <div className="form-group">
                <input id="form_name" type="text" name="name" className="form-control" placeholder="Nombre *" required data-error="Nombre es obligatorio." />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email *" required data-error="Email no es válido." />
                <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Detalle" />
              </div>
              <div className="form-group">
                <textarea id="form_message" name="message" className="form-control" placeholder="Escribe tu mensaje" rows="4" required data-error="Por favor, escribe un mensaje."></textarea>
                <div className="help-block with-errors"></div>
              </div>
              <button type="submit" className="btn btn-primary">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default Contact;